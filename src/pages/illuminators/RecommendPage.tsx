import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lightbulb, Send, ArrowLeft } from 'lucide-react';
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

export default function RecommendPage() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    recommender_name: '',
    recommender_email: '',
    category: '',
    resource_name: '',
    resource_link: '',
    justification: ''
  });

  const categories = [
    'Proven Wellness Practice',
    'Digital Resource',
    'Vetted Provider/Clinic',
    'Community Program',
    'Products',
    'Services',
    'Acts of kindness / illumination'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.category || !formData.resource_name || !formData.resource_link || !formData.justification) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (formData.justification.split(' ').length < 50) {
      toast.error('Justification must be at least 50 words');
      return;
    }

    try {
      new URL(formData.resource_link);
    } catch {
      toast.error('Please enter a valid URL');
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('illuminator_recommendations')
        .insert([{
          recommender_name: formData.recommender_name || null,
          recommender_email: formData.recommender_email || null,
          category: formData.category,
          resource_name: formData.resource_name,
          resource_link: formData.resource_link,
          justification: formData.justification
        }]);

      if (error) throw error;

      navigate('/illuminators/thank-you');
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to submit your recommendation. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const wordCount = formData.justification.trim().split(/\s+/).filter(word => word.length > 0).length;

  return (
    <>
      <SEO
        title="Share Your Illuminator - Recommend Resources | iLight"
        description="Recommend innovative therapies, products, services, or acts of kindness for PTSD healing and resilience."
        canonical="/illuminators/recommend"
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
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-ilight-500 to-ilight-600 mb-4">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>

              <SectionHeading
                title="Share Your Recommended Illuminator"
                description="Innovative therapies, products, services, acts of kindness / illumination for PTSD healing and resilience"
                align="center"
                textColor="text-black"
              />
            </div>

            <Card variant="elevated" padding="lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="recommender_name" className="block text-sm font-medium text-black mb-2">
                      Your Name/Organization <span className="text-black/50">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      id="recommender_name"
                      name="recommender_name"
                      value={formData.recommender_name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ilight-500 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="recommender_email" className="block text-sm font-medium text-black mb-2">
                      Email Address <span className="text-black/50">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      id="recommender_email"
                      name="recommender_email"
                      value={formData.recommender_email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ilight-500 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-black mb-2">
                    Recommendation Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ilight-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select a category</option>
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="resource_name" className="block text-sm font-medium text-black mb-2">
                    Name of Resource/Provider <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="resource_name"
                    name="resource_name"
                    value={formData.resource_name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ilight-500 focus:border-transparent transition-all"
                    placeholder="Resource name"
                  />
                </div>

                <div>
                  <label htmlFor="resource_link" className="block text-sm font-medium text-black mb-2">
                    Website/Link <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="url"
                    id="resource_link"
                    name="resource_link"
                    value={formData.resource_link}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ilight-500 focus:border-transparent transition-all"
                    placeholder="https://example.com"
                  />
                </div>

                <div>
                  <label htmlFor="justification" className="block text-sm font-medium text-black mb-2">
                    Why do you recommend this? <span className="text-red-500">*</span>
                    <span className="text-xs text-black/50 ml-2">
                      (Minimum 50 words - Current: {wordCount})
                    </span>
                  </label>
                  <textarea
                    id="justification"
                    name="justification"
                    value={formData.justification}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ilight-500 focus:border-transparent transition-all resize-y"
                    placeholder="Tell us why this resource is valuable and how it can help others..."
                  />
                  {wordCount > 0 && wordCount < 50 && (
                    <p className="text-sm text-red-500 mt-1">
                      {50 - wordCount} more words needed
                    </p>
                  )}
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
                    {isSubmitting ? 'Submitting...' : 'Submit Recommendation'}
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
