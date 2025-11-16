import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, Send, ArrowLeft } from 'lucide-react';
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

export default function ParticipatePage() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone_number: '',
    areas_of_interest: [] as string[],
    other_interest: '',
    time_commitment: '',
    skills_notes: ''
  });

  const interestAreas = [
    'Direct Service & Events',
    'Skills-Based Volunteering',
    'Peer & Community Support',
    'Strategic Outreach',
    'Random Illumination Delivery (IlluminUBER)',
    'Other'
  ];

  const timeCommitments = [
    'Low (1-2 hrs/month)',
    'Medium (5 hrs/month)',
    'High (10+ hrs/month)',
    'Flexible'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.full_name || !formData.email || formData.areas_of_interest.length === 0 || !formData.time_commitment) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (formData.areas_of_interest.includes('Other') && !formData.other_interest.trim()) {
      toast.error('Please specify your other area of interest');
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('illuminator_participation')
        .insert([{
          full_name: formData.full_name,
          email: formData.email,
          phone_number: formData.phone_number || null,
          areas_of_interest: formData.areas_of_interest,
          other_interest: formData.other_interest || null,
          time_commitment: formData.time_commitment,
          skills_notes: formData.skills_notes || null
        }]);

      if (error) throw error;

      navigate('/illuminators/thank-you');
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to submit your participation form. Please try again.');
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

  const handleCheckboxChange = (value: string) => {
    const currentInterests = formData.areas_of_interest;
    const newInterests = currentInterests.includes(value)
      ? currentInterests.filter(item => item !== value)
      : [...currentInterests, value];

    setFormData({
      ...formData,
      areas_of_interest: newInterests
    });
  };

  return (
    <>
      <SEO
        title="How Do You Want to Illuminate? - Volunteer | iLight"
        description="Join the iLight volunteer program and explore ways to serve through direct service, skills-based volunteering, peer support, and more."
        canonical="/illuminators/participate"
      />

      <Section background="white" padding="xl" className="min-h-screen pt-24">
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
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-ilight-700 to-ilight-800 mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>

              <SectionHeading
                title="How do you want to Illuminate?"
                description="Action & Involvement - Explore ways to serve and make a difference"
                align="center"
                textColor="text-black"
              />
            </div>

            <Card variant="elevated" padding="lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="full_name" className="block text-sm font-medium text-black mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="full_name"
                      name="full_name"
                      value={formData.full_name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ilight-500 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ilight-500 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone_number" className="block text-sm font-medium text-black mb-2">
                    Phone Number <span className="text-black/50">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone_number"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ilight-500 focus:border-transparent transition-all"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-3">
                    Area of Interest <span className="text-red-500">*</span>
                    <span className="text-xs text-black/50 ml-2">(Select all that apply)</span>
                  </label>
                  <div className="space-y-3">
                    {interestAreas.map(area => (
                      <label key={area} className="flex items-start gap-3 cursor-pointer p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <input
                          type="checkbox"
                          checked={formData.areas_of_interest.includes(area)}
                          onChange={() => handleCheckboxChange(area)}
                          className="mt-1 w-5 h-5 text-ilight-600 border-gray-300 rounded focus:ring-ilight-500"
                        />
                        <span className="text-sm text-black">{area}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {formData.areas_of_interest.includes('Other') && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <label htmlFor="other_interest" className="block text-sm font-medium text-black mb-2">
                      Please specify your other area of interest <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="other_interest"
                      name="other_interest"
                      value={formData.other_interest}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ilight-500 focus:border-transparent transition-all"
                      placeholder="Describe your area of interest"
                    />
                  </motion.div>
                )}

                <div>
                  <label htmlFor="time_commitment" className="block text-sm font-medium text-black mb-2">
                    Time Commitment <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="time_commitment"
                    name="time_commitment"
                    value={formData.time_commitment}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ilight-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select time commitment</option>
                    {timeCommitments.map(commitment => (
                      <option key={commitment} value={commitment}>{commitment}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="skills_notes" className="block text-sm font-medium text-black mb-2">
                    Skills/Notes <span className="text-black/50">(Optional)</span>
                  </label>
                  <textarea
                    id="skills_notes"
                    name="skills_notes"
                    value={formData.skills_notes}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ilight-500 focus:border-transparent transition-all resize-y"
                    placeholder="Tell us about your professional skills, event experience, or any other relevant information..."
                  />
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
                    {isSubmitting ? 'Submitting...' : 'Submit My Interest'}
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
