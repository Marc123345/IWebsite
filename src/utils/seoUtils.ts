/**
 * Utility functions for SEO optimization
 */

/**
 * Generate a schema.org JSON-LD script for a webpage
 * 
 * @param title Page title
 * @param description Page description
 * @param url Page URL
 * @param image Featured image URL
 * @returns Schema.org JSON-LD object
 */
export function generateWebPageSchema(title: string, description: string, url: string, image?: string): object {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": url,
    ...(image && { "image": image })
  };
}

/**
 * Generate a schema.org JSON-LD script for an organization
 * 
 * @returns Schema.org JSON-LD object for iLight organization
 */
export function generateOrganizationSchema(): object {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "iLight",
    "url": "https://ilight.health",
    "logo": "https://ilight.health/logo.png",
    "sameAs": [
      "https://twitter.com/ilight",
      "https://www.facebook.com/ilight",
      "https://www.linkedin.com/company/ilight"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-800-123-4567",
      "contactType": "customer service",
      "availableLanguage": ["English", "Hebrew"]
    }
  };
}

/**
 * Generate a schema.org JSON-LD script for a service
 * 
 * @param name Service name
 * @param description Service description
 * @param url Service URL
 * @returns Schema.org JSON-LD object
 */
export function generateServiceSchema(name: string, description: string, url: string): object {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "iLight",
      "url": "https://ilight.health"
    },
    "url": url
  };
}

/**
 * Generate a schema.org JSON-LD script for an article
 * 
 * @param headline Article headline
 * @param description Article description
 * @param url Article URL
 * @param image Featured image URL
 * @param datePublished Publication date
 * @param dateModified Last modified date
 * @returns Schema.org JSON-LD object
 */
export function generateArticleSchema(
  headline: string, 
  description: string, 
  url: string, 
  image: string,
  datePublished: string,
  dateModified: string
): object {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "description": description,
    "image": image,
    "datePublished": datePublished,
    "dateModified": dateModified,
    "author": {
      "@type": "Organization",
      "name": "iLight",
      "url": "https://ilight.health"
    },
    "publisher": {
      "@type": "Organization",
      "name": "iLight",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ilight.health/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  };
}