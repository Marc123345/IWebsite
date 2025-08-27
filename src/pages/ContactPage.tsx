import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Award, Brain, Building, Calendar, CheckCircle2, FileText, 
  GraduationCap, Heart, HelpCircle, Mail, Phone, Shield, 
  Target, User, Users, Globe
} from 'lucide-react';
import SEO from '../components/SEO';
import LoadingSpinner from '../components/LoadingSpinner';
import { submitContactForm } from '../lib/contact';
import Section from '../components/Section';
import Container from '../components/Container';
import Grid from '../components/Grid';
import Flex from '../components/Flex';
import SectionHeading from '../components/SectionHeading';
import Card from '../components/Card';
import Button from '../components/Button';
import TranslatedContent from '../components/TranslatedContent';
import { 
  GlassCard, 
  ParallaxEffect, 
  TextReveal, 
  MorphingShape,
  AnimatedBackground
} from '../components/patterns';
import { generateWebPageSchema } from '../utils/seoUtils';

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

// List of countries for dropdown
const countries = [
  { code: "US", name: "United States" },
  { code: "CA", name: "Canada" },
  { code: "GB", name: "United Kingdom" },
  { code: "AU", name: "Australia" },
  { code: "IL", name: "Israel" },
  { code: "DE", name: "Germany" },
  { code: "FR", name: "France" },
  { code: "ES", name: "Spain" },
  { code: "IT", name: "Italy" },
  { code: "JP", name: "Japan" },
  { code: "CN", name: "China" },
  { code: "IN", name: "India" },
  { code: "BR", name: "Brazil" },
  { code: "ZA", name: "South Africa" },
  { code: "MX", name: "Mexico" },
  { code: "AR", name: "Argentina" },
  { code: "NZ", name: "New Zealand" },
  { code: "SG", name: "Singapore" },
  { code: "AE", name: "United Arab Emirates" },
  { code: "Other", name: "Other" }
];

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const typeFromUrl = searchParams.get('type');
  
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState<'careseeker' | 'caregiver'>(
    typeFromUrl === 'caregiver' ? 'caregiver' : 'careseeker'
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    organizationName: '',
    contactName: '',
    role: '',
    specialization: '',
    experienceYears: '',
    additionalInfo: '',
    supportNeeds: '',
    dateOfBirth: '',
    emergencyContact: '',
    preferredCommunication: ''
  });

  // Generate schema for this page
  const schema = generateWebPageSchema(
    userType === 'careseeker' ? "Get Support - iLight" : "Join iLight - Provider Application",
    userType === 'careseeker' 
      ? "Get started with personalized wellness support through iLight's comprehensive care system."
      : "Apply to join iLight's personal wellness provider network and transform your therapy solution with innovative technology and support.",
    "https://ilight.health/contact"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step < 2) {
      setStep(step + 1);
      return;
    }

    setIsSubmitting(true);
    
    try {
      const contactData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        userType
      };

      const submissionData = userType === 'careseeker' 
        ? {
            dateOfBirth: formData.dateOfBirth,
            emergencyContact: formData.emergencyContact,
            preferredCommunication: formData.preferredCommunication,
            supportNeeds: formData.supportNeeds
          }
        : {
            organizationName: formData.organizationName,
            contactName: formData.contactName,
            role: formData.role,
            specialization: formData.specialization,
            experienceYears: parseInt(formData.experienceYears),
            additionalInfo: formData.additionalInfo,
            supportNeeds: formData.supportNeeds
          };

      await submitContactForm(contactData, submissionData);
      setStep(3);
    } catch (error) {
      console.error('Submission error:', error);
      // Handle error appropriately
    } finally {
      setIsSubmitting(false);
    }
  };

  if (step === 3) {
    return (
      <div className="min-h-screen pt-20">
        <AnimatedBackground
          variant="gradient"
          intensity="medium"
          primaryColor="rgba(59, 95, 138, 0.8)"
          secondaryColor="rgba(45, 77, 118, 0.8)"
          className="absolute inset-0"
        />
        
        <Container className="py-section relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-xl mx-auto"
          >
            <Card
              variant="glass"
              shadow="lg"
              padding="lg"
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 
                flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-success" />
              </div>
              <TextReveal
                direction="up"
                className="text-2xl font-bold mb-4 text-ilight-700"
              >
                {userType === 'careseeker' 
                  ? "Thank You for Reaching Out" 
                  : "Thank You for Your Interest"}
              </TextReveal>
              <p className="text-ilight-600 mb-8">
                {userType === 'careseeker'
                  ? "We've received your information and will contact you within 24 hours to discuss how we can support your journey."
                  : "We've received your application and will review your credentials. Our team will contact you within 48 hours to discuss next steps."}
              </p>
              <div className="space-y-4">
                <Card
                  variant="default"
                  shadow="md"
                  padding="md"
                  className="bg-ilight-50"
                >
                  <h3 className="font-medium text-ilight-700 mb-2">Next Steps</h3>
                  <ul className="text-left space-y-2">
                    {userType === 'careseeker' ? (
                      <>
                        <li className="flex items-center gap-2 text-ilight-600">
                          <CheckCircle2 className="w-5 h-5 text-ilight-500" />
                          Initial consultation scheduling
                        </li>
                        <li className="flex items-center gap-2 text-ilight-600">
                          <CheckCircle2 className="w-5 h-5 text-ilight-500" />
                          Personalized support plan creation
                        </li>
                        <li className="flex items-center gap-2 text-ilight-600">
                          <CheckCircle2 className="w-5 h-5 text-ilight-500" />
                          Resource recommendations
                        </li>
                      </>
                    ) : (
                      <>
                        <li className="flex items-center gap-2 text-ilight-600">
                          <CheckCircle2 className="w-5 h-5 text-ilight-500" />
                          Application review (2-3 business days)
                        </li>
                        <li className="flex items-center gap-2 text-ilight-600">
                          <CheckCircle2 className="w-5 h-5 text-ilight-500" />
                          Initial interview scheduling
                        </li>
                        <li className="flex items-center gap-2 text-ilight-600">
                          <CheckCircle2 className="w-5 h-5 text-ilight-500" />
                          Organization verification
                        </li>
                        <li className="flex items-center gap-2 text-ilight-600">
                          <CheckCircle2 className="w-5 h-5 text-ilight-500" />
                          Platform orientation
                        </li>
                      </>
                    )}
                  </ul>
                </Card>
                <p className="text-sm text-ilight-400">
                  Questions? Contact us at{' '}
                  <a href="mailto:contact@ilight.care" className="text-ilight-500 hover:text-ilight-600">
                    contact@ilight.care
                  </a>
                </p>
              </div>
            </Card>
          </motion.div>
        </Container>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title={userType === 'careseeker' ? "Get Support - iLight" : "Join iLight - Provider Application"}
        description={userType === 'careseeker' 
          ? "Get started with personalized wellness support through iLight's comprehensive care system."
          : "Apply to join iLight's personal wellness provider network and transform your therapy solution with innovative technology and support."
        }
        canonical={userType === 'careseeker' ? "/contact" : "/join"}
        schema={schema}
      />
      <div className="min-h-screen pt-20">
        <AnimatedBackground
          variant="gradient"
          intensity="low"
          primaryColor="rgba(59, 95, 138, 0.1)"
          secondaryColor="rgba(45, 77, 118, 0.1)"
          className="absolute inset-0"
        />
        
        <Section padding="md" className="relative z-10">
          <Container size="md">
            {/* User Type Selection */}
            {step === 1 && (
              <div className="mb-12">
                <SectionHeading
                  title="How can we help you?"
                  description="Select the option that best describes your needs"
                  align="center"
                  withGradient
                  withDivider
                  textColor="text-black"
                />
                
                <Grid cols={1} mdCols={2} gap="md">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setUserType('careseeker')}
                    className={`p-6 rounded-xl text-left transition-all shadow-calm hover:shadow-calm-lg ${
                      userType === 'careseeker'
                        ? 'bg-ilight-500 text-white'
                        : 'bg-white text-ilight-700 hover:bg-ilight-50'
                    } border ${
                      userType === 'careseeker'
                        ? 'border-ilight-400'
                        : 'border-ilight-200'
                    }`}
                    aria-pressed={userType === 'careseeker'}
                  >
                    <Heart className={`w-8 h-8 mb-4 ${
                      userType === 'careseeker' ? 'text-white' : 'text-ilight-500'
                    }`} />
                    <h3 className="text-lg font-semibold mb-2">Looking for Support</h3>
                    <TranslatedContent className={userType === 'careseeker' ? 'text-white/90' : 'text-ilight-600'} dynamicContent={true}>
                      Get personalized wellness support and guidance
                    </TranslatedContent>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setUserType('caregiver')}
                    className={`p-6 rounded-xl text-left transition-all shadow-calm hover:shadow-calm-lg ${
                      userType === 'caregiver'
                        ? 'bg-ilight-500 text-white'
                        : 'bg-white text-ilight-700 hover:bg-ilight-50'
                    } border ${
                      userType === 'caregiver'
                        ? 'border-ilight-400'
                        : 'border-ilight-200'
                    }`}
                    aria-pressed={userType === 'caregiver'}
                  >
                    <Shield className={`w-8 h-8 mb-4 ${
                      userType === 'caregiver' ? 'text-white' : 'text-ilight-500'
                    }`} />
                    <h3 className="text-lg font-semibold mb-2">Join as a Provider</h3>
                    <TranslatedContent className={userType === 'caregiver' ? 'text-white/90' : 'text-ilight-600'} dynamicContent={true}>
                      Join our network of therapy and solution providers
                    </TranslatedContent>
                  </motion.button>
                </Grid>
              </div>
            )}

            {/* Progress Steps */}
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

            <Card
              variant="default"
              shadow="lg"
              padding="lg"
              className="rounded-2xl"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                {step === 1 && (
                  <>
                    <div className="mb-8">
                      <TextReveal
                        direction="up"
                        className="text-2xl font-bold text-ilight-700"
                      >
                        Personal Information
                      </TextReveal>
                      <p className="text-ilight-600">
                        {userType === 'careseeker'
                          ? "Tell us about yourself so we can provide the best support."
                          : "Tell us about yourself and your therapy solution."
                        }
                      </p>
                    </div>

                    <div className="space-y-6">
                      <Grid cols={1} mdCols={2} gap="md">
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
                              aria-required="true"
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
                              aria-required="true"
                            />
                          </div>
                        </div>
                      </Grid>

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
                            aria-required="true"
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
                            aria-required="true"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="form-label" htmlFor="country">
                          Country
                        </label>
                        <div className="input-with-icon">
                          <Globe className="icon" />
                          <select
                            id="country"
                            value={formData.country}
                            onChange={(e) => setFormData({...formData, country: e.target.value})}
                            className="form-input"
                            required
                            aria-required="true"
                          >
                            <option value="">Select your country</option>
                            {countries.map((country) => (
                              <option key={country.code} value={country.code}>
                                {country.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {step === 2 && userType === 'careseeker' && (
                  <div className="space-y-6">
                    <div className="mb-8">
                      <TextReveal
                        direction="up"
                        className="text-2xl font-bold text-ilight-700"
                      >
                        Support Preferences
                      </TextReveal>
                      <p className="text-ilight-600">
                        Help us understand your needs better
                      </p>
                    </div>
                    
                    <div>
                      <label className="form-label flex items-center gap-2" htmlFor="dateOfBirth">
                        Date of Birth
                        <Tooltip content="Used to provide age-appropriate support and resources">
                          <HelpCircle className="w-4 h-4 text-ilight-400" />
                        </Tooltip>
                      </label>
                      <div className="input-with-icon">
                        <Calendar className="icon" />
                        <input
                          type="date"
                          id="dateOfBirth"
                          value={formData.dateOfBirth}
                          onChange={(e) => setFormData({...formData, dateOfBirth: e.target.value})}
                          className="form-input"
                          required
                          aria-required="true"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="form-label flex items-center gap-2" htmlFor="emergencyContact">
                        Emergency Contact
                        <Tooltip content="Only used in crisis situations to ensure your safety">
                          <HelpCircle className="w-4 h-4 text-ilight-400" />
                        </Tooltip>
                      </label>
                      <div className="input-with-icon">
                        <Phone className="icon" />
                        <input
                          type="text"
                          id="emergencyContact"
                          value={formData.emergencyContact}
                          onChange={(e) => setFormData({...formData, emergencyContact: e.target.value})}
                          className="form-input"
                          required
                          aria-required="true"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="form-label flex items-center gap-2" htmlFor="preferredCommunication">
                        Preferred Communication Method
                        <Tooltip content="How would you like us to reach out to you?">
                          <HelpCircle className="w-4 h-4 text-ilight-400" />
                        </Tooltip>
                      </label>
                      <div className="input-with-icon">
                        <Mail className="icon" />
                        <select
                          id="preferredCommunication"
                          value={formData.preferredCommunication}
                          onChange={(e) => setFormData({
                            ...formData, 
                            preferredCommunication: e.target.value
                          })}
                          className="form-input"
                          required
                          aria-required="true"
                        >
                          <option value="">Select an option</option>
                          <option value="email">Email</option>
                          <option value="phone">Phone</option>
                          <option value="text">Text Message</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="form-label flex items-center gap-2" htmlFor="supportNeeds">
                        How can we help you?
                        <Tooltip content="Brief description of what brings you here and how we can help">
                          <HelpCircle className="w-4 h-4 text-ilight-400" />
                        </Tooltip>
                      </label>
                      <div className="input-with-icon">
                        <FileText className="icon" />
                        <textarea
                          id="supportNeeds"
                          value={formData.supportNeeds}
                          onChange={(e) => setFormData({...formData, supportNeeds: e.target.value})}
                          className="form-input"
                          rows={4}
                          placeholder="Tell us about your support needs..."
                          required
                          aria-required="true"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {step === 2 && userType === 'caregiver' && (
                  <div className="space-y-6">
                    <div className="mb-8">
                      <TextReveal
                        direction="up"
                        className="text-2xl font-bold text-ilight-700"
                      >
                        Professional Details
                      </TextReveal>
                      <p className="text-ilight-600">
                        Tell us about your organization and expertise
                      </p>
                    </div>
                    
                    <div>
                      <label className="form-label flex items-center gap-2" htmlFor="organizationName">
                        Name of Organization
                        <Tooltip content="Your organization or company name">
                          <HelpCircle className="w-4 h-4 text-ilight-400" />
                        </Tooltip>
                      </label>
                      <div className="input-with-icon">
                        <Building className="icon" />
                        <input
                          type="text"
                          id="organizationName"
                          value={formData.organizationName}
                          onChange={(e) => setFormData({...formData, organizationName: e.target.value})}
                          className="form-input"
                          required
                          aria-required="true"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="form-label flex items-center gap-2" htmlFor="contactName">
                        Contact Name
                        <Tooltip content="Primary contact person for this application">
                          <HelpCircle className="w-4 h-4 text-ilight-400" />
                        </Tooltip>
                      </label>
                      <div className="input-with-icon">
                        <User className="icon" />
                        <input
                          type="text"
                          id="contactName"
                          value={formData.contactName}
                          onChange={(e) => setFormData({...formData, contactName: e.target.value})}
                          className="form-input"
                          required
                          aria-required="true"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="form-label flex items-center gap-2" htmlFor="role">
                        Role in Company
                        <Tooltip content="Your position or role in the organization">
                          <HelpCircle className="w-4 h-4 text-ilight-400" />
                        </Tooltip>
                      </label>
                      <div className="input-with-icon">
                        <Users className="icon" />
                        <input
                          type="text"
                          id="role"
                          value={formData.role}
                          onChange={(e) => setFormData({...formData, role: e.target.value})}
                          className="form-input"
                          required
                          aria-required="true"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="form-label flex items-center gap-2" htmlFor="specialization">
                        Specialization
                        <Tooltip content="Your organization's main areas of expertise">
                          <HelpCircle className="w-4 h-4 text-ilight-400" />
                        </Tooltip>
                      </label>
                      <div className="input-with-icon">
                        <Target className="icon" />
                        <input
                          type="text"
                          id="specialization"
                          value={formData.specialization}
                          onChange={(e) => setFormData({...formData, specialization: e.target.value})}
                          className="form-input"
                          required
                          aria-required="true"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="form-label flex items-center gap-2" htmlFor="experienceYears">
                        Years of Experience/in Business
                        <Tooltip content="How long has your organization been operating">
                          <HelpCircle className="w-4 h-4 text-ilight-400" />
                        </Tooltip>
                      </label>
                      <div className="input-with-icon">
                        <Calendar className="icon" />
                        <input
                          type="number"
                          id="experienceYears"
                          value={formData.experienceYears}
                          onChange={(e) => setFormData({...formData, experienceYears: e.target.value})}
                          className="form-input"
                          required
                          aria-required="true"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="form-label flex items-center gap-2" htmlFor="additionalInfo">
                        Additional Information
                        <Tooltip content="Any additional details about your organization">
                          <HelpCircle className="w-4 h-4 text-ilight-400" />
                        </Tooltip>
                      </label>
                      <div className="input-with-icon">
                        <FileText className="icon" />
                        <textarea
                          id="additionalInfo"
                          value={formData.additionalInfo}
                          onChange={(e) => setFormData({...formData, additionalInfo: e.target.value})}
                          className="form-input"
                          rows={4}
                          placeholder="Share any additional information about your organization..."
                        />
                      </div>
                    </div>

                    <div>
                      <label className="form-label flex items-center gap-2" htmlFor="supportNeeds">
                        How can we help you/your organization?
                        <Tooltip content="Tell us how we can support your organization">
                          <HelpCircle className="w-4 h-4 text-ilight-400" />
                        </Tooltip>
                      </label>
                      <div className="input-with-icon">
                        <FileText className="icon" />
                        <textarea
                          id="supportNeeds"
                          value={formData.supportNeeds}
                          onChange={(e) => setFormData({...formData, supportNeeds: e.target.value})}
                          className="form-input"
                          rows={4}
                          placeholder="Tell us about your organization's needs..."
                          required
                          aria-required="true"
                        />
                      </div>
                    </div>
                  </div>
                )}

                <Button
                  type="submit"
                  variant="gradient"
                  size="lg"
                  fullWidth
                  loading={isSubmitting}
                  icon={<Heart className="w-5 h-5" />}
                  withShimmer
                >
                  {step === 2 ? 'Submit' : 'Continue'}
                </Button>
              </form>
            </Card>
          </Container>
        </Section>
      </div>
    </>
  );
}