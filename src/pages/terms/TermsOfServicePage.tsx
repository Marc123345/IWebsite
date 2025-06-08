import { motion } from 'framer-motion';
import SEO from '../../components/SEO';
import Section from '../../components/Section';
import SectionHeading from '../../components/SectionHeading';
import Container from '../../components/Container';

export default function TermsOfServicePage() {
  return (
    <>
      <SEO 
        title="Terms of Service - iLight"
        description="Read the terms and conditions governing the use of iLight's services and platform."
        canonical="/terms"
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
                title="Terms of Service"
                description="Last Updated: May 1, 2025"
                align="left"
                withDivider
              />
              
              <div className="prose prose-lg max-w-none">
                <p>
                  Welcome to iLight. Please read these Terms of Service ("Terms") carefully as they contain important information regarding your legal rights, remedies, and obligations. By accessing or using the iLight platform, you agree to be bound by these Terms.
                </p>
                
                <h2>Acceptance of Terms</h2>
                <p>
                  By accessing or using our services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, please do not use our services.
                </p>
                
                <h2>Description of Services</h2>
                <p>
                  iLight provides a platform for personal wellness support, including but not limited to AI-powered assistance, professional therapy connections, and community support. Our services are designed to provide information, resources, and connections to support personal wellness, but are not a substitute for professional medical advice, diagnosis, or treatment.
                </p>
                
                <h2>User Accounts</h2>
                <p>
                  To access certain features of our platform, you may need to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. You are responsible for safeguarding your password and for all activities that occur under your account.
                </p>
                
                <h2>User Conduct</h2>
                <p>
                  You agree not to:
                </p>
                <ul>
                  <li>Use the services in any way that violates any applicable law or regulation</li>
                  <li>Impersonate any person or entity, or falsely state or otherwise misrepresent your affiliation with a person or entity</li>
                  <li>Interfere with or disrupt the services or servers or networks connected to the services</li>
                  <li>Attempt to gain unauthorized access to any portion of the services or any other accounts, computer systems, or networks connected to the services</li>
                  <li>Use the services to harm, threaten, or harass another person or organization</li>
                  <li>Use the services to send unsolicited communications, promotions, or advertisements</li>
                </ul>
                
                <h2>Intellectual Property</h2>
                <p>
                  The services and their entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by iLight, its licensors, or other providers of such material and are protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                </p>
                
                <h2>Disclaimer of Warranties</h2>
                <p>
                  THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. NEITHER ILIGHT NOR ANY PERSON ASSOCIATED WITH ILIGHT MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE SERVICES.
                </p>
                
                <h2>Limitation of Liability</h2>
                <p>
                  IN NO EVENT WILL ILIGHT, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE SERVICES, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.
                </p>
                
                <h2>Indemnification</h2>
                <p>
                  You agree to defend, indemnify, and hold harmless iLight, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the services.
                </p>
                
                <h2>Termination</h2>
                <p>
                  We may terminate or suspend your account and bar access to the services immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
                </p>
                
                <h2>Changes to Terms</h2>
                <p>
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                </p>
                
                <h2>Governing Law</h2>
                <p>
                  These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which iLight is established, without regard to its conflict of law provisions.
                </p>
                
                <h2>Contact Us</h2>
                <p>
                  If you have any questions about these Terms, please contact us at:
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