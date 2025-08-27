const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

interface TranslationRequest {
  text: string;
  targetLanguage: string;
  sourceLanguage?: string;
}

interface TranslationResponse {
  translatedText: string;
  detectedSourceLanguage?: string;
  success: boolean;
  error?: string;
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Only allow POST requests
    if (req.method !== 'POST') {
      return new Response(
        JSON.stringify({ error: 'Method not allowed' }),
        { 
          status: 405, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Get the API key from environment variables
    const apiKey = Deno.env.get('GOOGLE_TRANSLATION_API_KEY')
    if (!apiKey) {
      console.error('GOOGLE_TRANSLATION_API_KEY not found in environment variables')
      return new Response(
        JSON.stringify({ 
          error: 'Translation service not configured. Please set GOOGLE_TRANSLATION_API_KEY in Supabase Edge Function secrets.',
          success: false 
        }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Parse request body
    const { text, targetLanguage, sourceLanguage }: TranslationRequest = await req.json()

    // Validate input
    if (!text || !targetLanguage) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields: text and targetLanguage' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Skip translation if target is the same as source or if it's English to English
    if (targetLanguage === 'en' || (sourceLanguage && sourceLanguage === targetLanguage)) {
      return new Response(
        JSON.stringify({
          translatedText: text,
          success: true
        }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Prepare the request to Google Translate API
    const googleTranslateUrl = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`
    
    const requestBody = {
      q: text,
      target: targetLanguage,
      ...(sourceLanguage && { source: sourceLanguage }),
      format: 'text'
    }

    // Make request to Google Translate API
    const response = await fetch(googleTranslateUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody)
    })

    if (!response.ok) {
      const errorData = await response.text()
      console.error('Google Translate API error:', errorData)
      return new Response(
        JSON.stringify({ 
          error: 'Translation service error',
          success: false 
        }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    const data = await response.json()
    
    // Extract translated text from Google's response
    const translatedText = data.data.translations[0].translatedText
    const detectedSourceLanguage = data.data.translations[0].detectedSourceLanguage

    const result: TranslationResponse = {
      translatedText,
      detectedSourceLanguage,
      success: true
    }

    return new Response(
      JSON.stringify(result),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )

  } catch (error) {
    console.error('Translation function error:', error)
    return new Response(
      JSON.stringify({ 
        error: 'Internal server error',
        success: false 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})