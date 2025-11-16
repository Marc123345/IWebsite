import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Send, ArrowLeft, Upload } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';
import SEO from '../../components/SEO';
import Section from '../../components/Section';
import Container from '../../components/Container';
import Card from '../../components/Card';
import Button from '../../components/Button';
import SectionHeading from '../../components/SectionHeading';
import { toast } from 'sonner';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default function SharePage() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    story_type: '',
    story_submission: '',
    video_url: '',
    media_consent: false
  });

  const storyTypes = [
    'Personal Testimonial',
    'Impact Story',
    'The Why (Recruitment)'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.story_type || !formData.story_submission) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (formData.story_submission.length > 3000) {
      toast.error('Story must be 3000 characters or less');
      return;
    }

    if (!formData.media_consent) {
      toast.error('Please provide media consent to submit');
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('illuminator_stories')
        .insert([{
          full_name: formData.full_name || null,
          email: formData.email || null,
          story_type: formData.story_type,
          story_submission: formData.story_submission,
          video_url: formData.video_url || null,
          media_consent: formData.media_consent
        }]);

      if (error) throw error;

      navigate('/illuminators/thank-you');
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to submit your story. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData({
        ...formData,
        [name]: checked
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const characterCount = formData.story_submission.length;

  return (
    <>
      <SEO
        title="Share Your Story - Illumination Stories | iLight"
        description="Share your personal testimonial, impact story, or recruitment message to inspire others and illuminate lives."
        canonical="/illuminators/share"
      />

      <Section background="white" padding="xl" className="min-h-screen">
        <Container size="md">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Button
              as="a"
              href="/illuminators"
              variant="ghost"
              size="sm"
              icon={<ArrowLeft className="w-4 h-4" />}
              className="mb-6 text-black hover:text-ilight-600"
            >
              Back to Illuminators
            </Button>

            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-ilight-600 to-ilight-700 mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>

              <SectionHeading
                title="Your Story is Our Light"
                description="Inspiration & Recruitment - Share your journey to illuminate others"
                align="center"
                textColor="text-black"
              />
            </div>

            <Card variant="elevated" padding="lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="full_name" className="block text-sm font-medium text-black mb-2">
                      Full Name <span className="text-black/50">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      id="full_name"
                      name="full_name"
                      value={formData.full_name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ilight-500 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                      Email Address <span className="text-black/50">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ilight-500 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="story_type" className="block text-sm font-medium text-black mb-2">
                    Story Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="story_type"
                    name="story_type"
                    value={formData.story_type}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ilight-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select a story type</option>
                    {storyTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="story_submission" className="block text-sm font-medium text-black mb-2">
                    Story Submission <span className="text-red-500">*</span>
                    <span className="text-xs text-black/50 ml-2">
                      ({characterCount}/3000 characters)
                    </span>
                  </label>
                  <textarea
                    id="story_submission"
                    name="story_submission"
                    value={formData.story_submission}
                    onChange={handleChange}
                    required
                    rows={10}
                    maxLength={3000}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ilight-500 focus:border-transparent transition-all resize-y"
                    placeholder="Share your story or include a link to your story/video..."
                  />
                  {characterCount > 2700 && (
                    <p className="text-sm text-orange-500 mt-1">
                      {3000 - characterCount} characters remaining
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="video_url" className="block text-sm font-medium text-black mb-2">
                    Video Link <span className="text-black/50">(Optional)</span>
                  </label>
                  <div className="flex gap-2">
                    <Upload className="w-5 h-5 text-black/50 mt-3" />
                    <input
                      type="url"
                      id="video_url"
                      name="video_url"
                      value={formData.video_url}
                      onChange={handleChange}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ilight-500 focus:border-transparent transition-all"
                      placeholder="https://youtube.com/... or any video hosting URL"
                    />
                  </div>
                  <p className="text-xs text-black/50 mt-1">
                    If you have a video hosted elsewhere (YouTube, Vimeo, etc.), paste the link here
                  </p>
                </div>

                <div className="bg-ilight-50 border border-ilight-200 rounded-lg p-4">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="media_consent"
                      checked={formData.media_consent}
                      onChange={handleChange}
                      required
                      className="mt-1 w-5 h-5 text-ilight-600 border-gray-300 rounded focus:ring-ilight-500"
                    />
                    <span className="text-sm text-black">
                      <span className="text-red-500">*</span> I consent to iLight using my submitted story/video content for promotional and recruitment purposes.
                    </span>
                  </label>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    type="submit"
                    variant="gradient"
                    size="lg"
                    rounded="full"
                    icon={<Send className="w-5 h-5" />}
                    disabled={isSubmitting}
                    className="flex-1"
                  >
                    {isSubmitting ? 'Submitting...' : 'Share Your Story'}
                  </Button>
                </div>
              </form>
            </Card>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
