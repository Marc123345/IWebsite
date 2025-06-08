import { motion } from 'framer-motion';
import SEO from '../../components/SEO';
import Section from '../../components/Section';
import SectionHeading from '../../components/SectionHeading';
import Container from '../../components/Container';

export default function CookiePolicyPage() {
  return (
    <>
      <SEO 
        title="Cookie Policy - iLight"
        description="Learn about how iLight uses cookies and similar technologies on our website."
        canonical="/cookies"
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
                title="Cookie Policy"
                description="Last Updated: May 1, 2025"
                align="left"
                withDivider
              />
              
              <div className="prose prose-lg max-w-none">
                <p>
                  This Cookie Policy explains how iLight ("we", "us", or "our") uses cookies and similar technologies on our website. By using our website, you consent to the use of cookies as described in this policy.
                </p>
                
                <h2>What Are Cookies?</h2>
                <p>
                  Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work more efficiently, provide a better user experience, and give website owners information about how their site is being used.
                </p>
                
                <h2>Types of Cookies We Use</h2>
                <p>
                  We use the following types of cookies on our website:
                </p>
                <ul>
                  <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and account access. You cannot opt out of these cookies.</li>
                  <li><strong>Analytics Cookies:</strong> These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website and your experience.</li>
                  <li><strong>Functionality Cookies:</strong> These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.</li>
                  <li><strong>Marketing Cookies:</strong> These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user.</li>
                </ul>
                
                <h2>Third-Party Cookies</h2>
                <p>
                  In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website and deliver advertisements on and through the website. These third parties may include:
                </p>
                <ul>
                  <li>Analytics providers (such as Google Analytics)</li>
                  <li>Advertising networks</li>
                  <li>Social media platforms</li>
                </ul>
                
                <h2>Managing Cookies</h2>
                <p>
                  Most web browsers allow you to manage your cookie preferences. You can set your browser to refuse cookies, or to alert you when cookies are being sent. The methods for doing so vary from browser to browser, and from version to version. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience, since it will no longer be personalized to you.
                </p>
                
                <h2>Your Choices</h2>
                <p>
                  When you first visit our website, you will be presented with a cookie banner that allows you to accept or decline non-essential cookies. You can change your preferences at any time by clicking on the "Cookie Preferences" link in the footer of our website.
                </p>
                
                <h2>Do Not Track Signals</h2>
                <p>
                  Some browsers have a "Do Not Track" feature that lets you tell websites that you do not want to have your online activities tracked. These features are not yet uniform, so we do not currently respond to such signals.
                </p>
                
                <h2>Changes to This Cookie Policy</h2>
                <p>
                  We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last Updated" date at the top of this page. You are advised to review this Cookie Policy periodically for any changes.
                </p>
                
                <h2>Contact Us</h2>
                <p>
                  If you have any questions about our Cookie Policy, please contact us at:
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