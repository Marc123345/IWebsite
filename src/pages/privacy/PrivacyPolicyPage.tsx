import { motion } from 'framer-motion';
import SEO from '../../components/SEO';
import Section from '../../components/Section';
import SectionHeading from '../../components/SectionHeading';
import Container from '../../components/Container';

export default function PrivacyPolicyPage() {
  return (
    <>
      <SEO 
        title="Privacy Policy - iLight"
        description="Learn about how iLight collects, uses, and protects your personal information."
        canonical="/privacy"
      />
      <div className="min-h-screen pt-20">
        <Section background="white" padding="lg">
          <Container size="md">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <SectionHeading
                title="Privacy Policy"
                description="Last Updated: May 1, 2025"
                align="left"
                withDivider
              />
              
              <div className="prose prose-lg max-w-none">
                <p>
                  At iLight, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
                
                <h2>Information We Collect</h2>
                <p>
                  We collect information that you provide directly to us, such as when you create an account, fill out a form, participate in interactive features, or communicate with us. This may include:
                </p>
                <ul>
                  <li>Personal identifiers (name, email address, phone number)</li>
                  <li>Account credentials</li>
                  <li>Demographic information</li>
                  <li>Health information you choose to share</li>
                  <li>Payment information</li>
                  <li>Any other information you choose to provide</li>
                </ul>
                
                <p>
                  We also automatically collect certain information when you visit our website or use our services, including:
                </p>
                <ul>
                  <li>Log information (IP address, browser type, pages visited)</li>
                  <li>Device information</li>
                  <li>Location information</li>
                  <li>Usage information</li>
                  <li>Cookies and similar technologies</li>
                </ul>
                
                <h2>How We Use Your Information</h2>
                <p>
                  We use the information we collect for various purposes, including to:
                </p>
                <ul>
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send administrative messages and communications</li>
                  <li>Respond to your comments, questions, and requests</li>
                  <li>Personalize your experience</li>
                  <li>Monitor and analyze trends, usage, and activities</li>
                  <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
                  <li>Protect the rights and property of iLight and others</li>
                </ul>
                
                <h2>Sharing of Information</h2>
                <p>
                  We may share the information we collect in various ways, including:
                </p>
                <ul>
                  <li>With vendors, consultants, and other service providers who need access to such information to carry out work on our behalf</li>
                  <li>In response to a request for information if we believe disclosure is in accordance with, or required by, any applicable law, regulation, or legal process</li>
                  <li>If we believe your actions are inconsistent with our user agreements or policies, or to protect the rights, property, and safety of iLight or others</li>
                  <li>In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business by another company</li>
                  <li>With your consent or at your direction</li>
                </ul>
                
                <h2>Data Security</h2>
                <p>
                  We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction. However, no security system is impenetrable, and we cannot guarantee the security of our systems.
                </p>
                
                <h2>Your Choices</h2>
                <p>
                  You have several choices regarding the information we collect and how it is used:
                </p>
                <ul>
                  <li><strong>Account Information:</strong> You may update, correct, or delete your account information at any time by logging into your account or contacting us.</li>
                  <li><strong>Cookies:</strong> Most web browsers are set to accept cookies by default. You can usually choose to set your browser to remove or reject browser cookies.</li>
                  <li><strong>Promotional Communications:</strong> You may opt out of receiving promotional communications from us by following the instructions in those communications.</li>
                </ul>
                
                <h2>Children's Privacy</h2>
                <p>
                  Our services are not directed to children under 16, and we do not knowingly collect personal information from children under 16. If we learn we have collected personal information from a child under 16, we will delete this information.
                </p>
                
                <h2>International Data Transfers</h2>
                <p>
                  We may transfer the information we collect about you to countries other than the country in which you initially provided the information. These countries may not have the same data protection laws as the country in which you provided the information. When we transfer your information to other countries, we will protect that information as described in this Privacy Policy.
                </p>
                
                <h2>Changes to This Privacy Policy</h2>
                <p>
                  We may change this Privacy Policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy and, in some cases, we may provide you with additional notice. We encourage you to review the Privacy Policy whenever you access our services to stay informed about our information practices.
                </p>
                
                <h2>Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <p>
                  Email: <a href="mailto:support@ilight.care">support@ilight.care</a>
                </p>
              </div>
            </motion.div>
          </Container>
        </Section>
      </div>
    </>
  );
}