import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Award, Brain, Building, Calendar, CheckCircle2, FileText, 
  GraduationCap, Heart, HelpCircle, Mail, Phone, Shield, 
  Target, User, Users 
} from 'lucide-react';
import SEO from '../../components/SEO';
import LoadingSpinner from '../../components/LoadingSpinner';
import { generateWebPageSchema } from '../../utils/seoUtils';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
}

const Tooltip = ({ content, children }: TooltipProps) => (
  <div className="group relative inline-block">
    {children}
    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-ilight-600 
      text-white text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 
      group-hover:visible transition-all duration-200 whitespace-nowrap z-10">
      {content}
      <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 
        border-transparent border-t-ilight-600" />
    </div>
  </div>
);

export default function JoinPage() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    credentials: '',
    specialization: '',
    experience: '',
    license: '',
    organization: '',
    about: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step < 2) {
      setStep(step + 1);
      return;
    }

    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setStep(3);
    setIsSubmitting(false);
  };

  // Generate schema for this page
  const schema = generateWebPageSchema(
    "Join iLight Partners - Provider Application",
    "Apply to join iLight's mental health provider network and transform your therapy solutions with innovative technology and support.",
    "https://ilight.health/partners/join"
  );

  if (step === 3) {
    return (
      <div className="min-h-screen pt-20 bg-gradient-to-br from-ilight-500 to-ilight-600">
        <div className="container-padding py-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-xl mx-auto bg-white rounded-2xl p-8 shadow-xl text-center"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 
              flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-ilight-600">
              Application Submitted Successfully
            </h2>
            <p className="text-ilight-400 mb-8">
              Thank you for your interest in joining the iLight provider network. Our team will 
              review your application and contact you within 2-3 business days.
            </p>
            <div className="space-y-4">
              <div className="bg-ilight-50 rounded-lg p-4">
                <h3 className="font-medium text-ilight-600 mb-2">Next Steps</h3>
                <ul className="text-left space-y-2">
                  <li className="flex items-center gap-2 text-ilight-400">
                    <CheckCircle2 className="w-5 h-5 text-ilight-500" />
                    Application review (2-3 business days)
                  </li>
                  <li className="flex items-center gap-2 text-ilight-400">
                    <CheckCircle2 className="w-5 h-5 text-ilight-500" />
                    Initial interview scheduling
                  </li>
                  <li className="flex items-center gap-2 text-ilight-400">
                    <CheckCircle2 className="w-5 h-5 text-ilight-500" />
                    Credential verification
                  </li>
                  <li className="flex items-center gap-2 text-ilight-400">
                    <CheckCircle2 className="w-5 h-5 text-ilight-500" />
                    Platform orientation
                  </li>
                </ul>
              </div>
              <p className="text-sm text-ilight-400">
                Questions? Contact our provider support team at{' '}
                <a href="mailto:providers@ilight.health" className="text-ilight-500 hover:text-ilight-600">
                  providers@ilight.health
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title="Join iLight Partners - Provider Application"
        description="Apply to join iLight's mental health provider network and transform your therapy solutions with innovative technology and support."
        canonical="/partners/join"
        schema={schema}
      />
      <div className="min-h-screen pt-20">
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <div className="flex justify-between items-center max-w-xs mx-auto">
                {[1, 2].map((stepNumber) => (
                  <div key={stepNumber} className="flex items-center">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: stepNumber * 0.1 }}
                      className={`w-8 h-8 rounded-full flex items-center justify-center 
                        ${step >= stepNumber 
                          ? 'bg-ilight-500 text-white' 
                          : 'bg-ilight-100 text-ilight-400'}`}
                    >
                      {stepNumber}
                    </motion.div>
                    {stepNumber < 2 && (
                      <div className={`w-24 h-1 ${
                        step > stepNumber ? 'bg-ilight-500' : 'bg-ilight-100'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-ilight-100">
              <form onSubmit={handleSubmit} className="space-y-8">
                {step === 1 && (
                  <>
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold text-ilight-600">Personal Information</h2>
                      <p className="text-ilight-400">
                        Tell us about yourself and your therapy solutions.
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="form-label" htmlFor="firstName">
                            First Name
                          </label>
                          <div className="input-with-icon">
                            <User className="icon" />
                            <input
                              type="text"
                              id="firstName"
                              value={formData.firstName}
                              onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                              className="form-input"
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <label className="form-label" htmlFor="lastName">
                            Last Name
                          </label>
                          <div className="input-with-icon">
                            <User className="icon" />
                            <input
                              type="text"
                              id="lastName"
                              value={formData.lastName}
                              onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                              className="form-input"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="form-label" htmlFor="email">
                          Email Address
                        </label>
                        <div className="input-with-icon">
                          <Mail className="icon" />
                          <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="form-input"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="form-label" htmlFor="phone">
                          Phone Number
                        </label>
                        <div className="input-with-icon">
                          <Phone className="icon" />
                          <input
                            type="tel"
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            className="form-input"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {step === 2 && (
                  <>
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold text-ilight-600">Professional Details</h2>
                      <p className="text-ilight-400">
                        Tell us about your qualifications and experience.
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <label className="form-label flex items-center gap-2" htmlFor="credentials">
                          Professional Credentials
                          <Tooltip content="Your degrees, certifications, and licenses">
                            <HelpCircle className="w-4 h-4 text-ilight-400" />
                          </Tooltip>
                        </label>
                        <div className="input-with-icon">
                          <Award className="icon" />
                          <input
                            type="text"
                            id="credentials"
                            value={formData.credentials}
                            onChange={(e) => setFormData({...formData, credentials: e.target.value})}
                            className="form-input"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="form-label flex items-center gap-2" htmlFor="specialization">
                          Specialization
                          <Tooltip content="Your primary areas of expertise">
                            <HelpCircle className="w-4 h-4 text-ilight-400" />
                          </Tooltip>
                        </label>
                        <div className="input-with-icon">
                          <GraduationCap className="icon" />
                          <select
                            id="specialization"
                            value={formData.specialization}
                            onChange={(e) => setFormData({...formData, specialization: e.target.value})}
                            className="form-input"
                            required
                          >
                            <option value="">Select specialization</option>
                            <option value="trauma">Trauma Therapy</option>
                            <option value="ptsd">PTSD</option>
                            <option value="anxiety">Anxiety</option>
                            <option value="depression">Depression</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="form-label flex items-center gap-2" htmlFor="experience">
                          Years of Experience
                          <Tooltip content="Total years of professional therapy solutions">
                            <HelpCircle className="w-4 h-4 text-ilight-400" />
                          </Tooltip>
                        </label>
                        <div className="input-with-icon">
                          <Calendar className="icon" />
                          <input
                            type="number"
                            id="experience"
                            value={formData.experience}
                            onChange={(e) => setFormData({...formData, experience: e.target.value})}
                            className="form-input"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="form-label flex items-center gap-2" htmlFor="license">
                          License Number
                          <Tooltip content="Your current professional license number">
                            <HelpCircle className="w-4 h-4 text-ilight-400" />
                          </Tooltip>
                        </label>
                        <div className="input-with-icon">
                          <Shield className="icon" />
                          <input
                            type="text"
                            id="license"
                            value={formData.license}
                            onChange={(e) => setFormData({...formData, license: e.target.value})}
                            className="form-input"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="form-label flex items-center gap-2" htmlFor="organization">
                          Organization
                          <Tooltip content="Your therapy solutions or affiliated organization">
                            <HelpCircle className="w-4 h-4 text-ilight-400" />
                          </Tooltip>
                        </label>
                        <div className="input-with-icon">
                          <Building className="icon" />
                          <input
                            type="text"
                            id="organization"
                            value={formData.organization}
                            onChange={(e) => setFormData({...formData, organization: e.target.value})}
                            className="form-input"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="form-label flex items-center gap-2" htmlFor="about">
                          About You
                          <Tooltip content="Brief description of your therapy solutions and approach">
                            <HelpCircle className="w-4 h-4 text-ilight-400" />
                          </Tooltip>
                        </label>
                        <div className="input-with-icon">
                          <FileText className="icon" />
                          <textarea
                            id="about"
                            value={formData.about}
                            onChange={(e) => setFormData({...formData, about: e.target.value})}
                            className="form-input"
                            rows={4}
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full relative"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className={`flex items-center justify-center gap-2 
                    ${isSubmitting ? 'invisible' : ''}`}>
                    {step === 2 ? 'Submit Application' : 'Continue'} 
                    <Heart className="w-5 h-5" />
                  </span>
                  {isSubmitting && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <LoadingSpinner size="sm" variant="light" />
                    </div>
                  )}
                </motion.button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}