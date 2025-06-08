import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ErrorBoundary from './components/ErrorBoundary';
import SkipLink from './components/SkipLink';
import Toast from './components/Toast';
import OptimizedNavbar from './components/OptimizedNavbar';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import AccessibilityMenu from './components/AccessibilityMenu';
import QuickBreather from './components/QuickBreather';
import OptimizedPageTransition from './components/OptimizedPageTransition';
import LoadingSpinner from './components/LoadingSpinner';
import ScrollToTop from './components/ScrollToTop';
import MissionSliderReveal from './components/MissionSliderReveal';

// Lazy load pages to improve initial load time
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const AITechnologyPage = lazy(() => import('./pages/AITechnologyPage'));
const GamificationPage = lazy(() => import('./pages/how-it-works/GamificationPage'));
const SupportSystemPage = lazy(() => import('./pages/SupportSystemPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const FamilyPortalPage = lazy(() => import('./pages/FamilyPortalPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const NewPage = lazy(() => import('./pages/NewPage'));
const IlluminationPage = lazy(() => import('./pages/IlluminationPage'));
const ComingSoonPage = lazy(() => import('./pages/ComingSoonPage'));
const PromisePage = lazy(() => import('./pages/PromisePage'));

// Community Pages
const CommunityPage = lazy(() => import('./pages/CommunityPage'));
const EventsPage = lazy(() => import('./pages/community/EventsPage'));
const IlluminatorsPage = lazy(() => import('./pages/community/IlluminatorsPage'));

// Partner Pages
const PartnersPage = lazy(() => import('./pages/PartnersPage'));
const ProvidersPage = lazy(() => import('./pages/partners/ProvidersPage'));
const BenefitsPage = lazy(() => import('./pages/partners/BenefitsPage'));
const JoinPage = lazy(() => import('./pages/partners/JoinPage'));

// MyLight Pages
const MyLightPage = lazy(() => import('./pages/MyLightPage'));
const ProgressPage = lazy(() => import('./pages/mylight/ProgressPage'));
const SessionsPage = lazy(() => import('./pages/mylight/SessionsPage'));
const MessagesPage = lazy(() => import('./pages/mylight/MessagesPage'));

// iLight+ Page
const ILightPlusPage = lazy(() => import('./pages/ILightPlusPage'));

// Design System Page
const DesignSystemPage = lazy(() => import('./pages/DesignSystemPage'));

// Beta Page
const BetaPage = lazy(() => import('./pages/BetaPage'));

// Policy Pages
const PrivacyPolicyPage = lazy(() => import('./pages/privacy/PrivacyPolicyPage'));
const TermsOfServicePage = lazy(() => import('./pages/terms/TermsOfServicePage'));
const CookiePolicyPage = lazy(() => import('./pages/cookies/CookiePolicyPage'));

// Error Page
const ErrorPage = lazy(() => import('./components/ErrorPage'));

// Loading fallback for lazy-loaded components
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <LoadingSpinner size="lg" variant="primary" />
      <p className="mt-4 text-ilight-600">Loading page...</p>
    </div>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <div className="flex flex-col min-h-screen">
        <SkipLink />
        <Toast />
        <OptimizedNavbar />
        <ScrollToTop />
        
        <main id="main-content" className="flex-grow" role="main">
          <AnimatePresence mode="wait">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                {/* Set HomePage as the landing page */}
                <Route path="/" element={<OptimizedPageTransition><HomePage /></OptimizedPageTransition>} />
                
                {/* Coming soon page still accessible via /coming-soon */}
                <Route path="/coming-soon" element={<OptimizedPageTransition><ComingSoonPage /></OptimizedPageTransition>} />
                
                {/* Main Routes */}
                <Route path="/about" element={<OptimizedPageTransition><AboutPage /></OptimizedPageTransition>} />
                <Route path="/services" element={<OptimizedPageTransition><ServicesPage /></OptimizedPageTransition>} />
                <Route path="/contact" element={<OptimizedPageTransition><ContactPage /></OptimizedPageTransition>} />
                <Route path="/family-portal" element={<OptimizedPageTransition><FamilyPortalPage /></OptimizedPageTransition>} />
                <Route path="/beta" element={<OptimizedPageTransition><BetaPage /></OptimizedPageTransition>} />
                <Route path="/new-page" element={<OptimizedPageTransition><NewPage /></OptimizedPageTransition>} />
                <Route path="/contribute" element={<OptimizedPageTransition><IlluminationPage /></OptimizedPageTransition>} />
                <Route path="/promise" element={<OptimizedPageTransition><PromisePage /></OptimizedPageTransition>} />

                {/* Community Routes */}
                <Route path="/community" element={<OptimizedPageTransition><CommunityPage /></OptimizedPageTransition>} />
                <Route path="/community/events" element={<OptimizedPageTransition><EventsPage /></OptimizedPageTransition>} />
                <Route path="/community/illuminators" element={<OptimizedPageTransition><IlluminatorsPage /></OptimizedPageTransition>} />

                {/* Partner Routes */}
                <Route path="/partners" element={<OptimizedPageTransition><PartnersPage /></OptimizedPageTransition>} />
                <Route path="/partners/providers" element={<OptimizedPageTransition><ProvidersPage /></OptimizedPageTransition>} />
                <Route path="/partners/benefits" element={<OptimizedPageTransition><BenefitsPage /></OptimizedPageTransition>} />
                <Route path="/partners/join" element={<OptimizedPageTransition><JoinPage /></OptimizedPageTransition>} />

                {/* MyLight Routes */}
                <Route path="/mylight" element={<OptimizedPageTransition><MyLightPage /></OptimizedPageTransition>} />
                <Route path="/mylight/progress" element={<OptimizedPageTransition><ProgressPage /></OptimizedPageTransition>} />
                <Route path="/mylight/sessions" element={<OptimizedPageTransition><SessionsPage /></OptimizedPageTransition>} />
                <Route path="/mylight/messages" element={<OptimizedPageTransition><MessagesPage /></OptimizedPageTransition>} />

                {/* iLight+ Route */}
                <Route path="/ilight-plus" element={<OptimizedPageTransition><ILightPlusPage /></OptimizedPageTransition>} />
                
                {/* Technology Pages */}
                <Route path="/how-it-works/ai" element={<OptimizedPageTransition><AITechnologyPage /></OptimizedPageTransition>} />
                <Route path="/how-it-works/gamification" element={<OptimizedPageTransition><GamificationPage /></OptimizedPageTransition>} />
                <Route path="/how-it-works/support" element={<OptimizedPageTransition><SupportSystemPage /></OptimizedPageTransition>} />
                
                {/* Design System */}
                <Route path="/design-system" element={<OptimizedPageTransition><DesignSystemPage /></OptimizedPageTransition>} />
                
                {/* Policy Pages */}
                <Route path="/privacy" element={<OptimizedPageTransition><PrivacyPolicyPage /></OptimizedPageTransition>} />
                <Route path="/terms" element={<OptimizedPageTransition><TermsOfServicePage /></OptimizedPageTransition>} />
                <Route path="/cookies" element={<OptimizedPageTransition><CookiePolicyPage /></OptimizedPageTransition>} />
                
                {/* 404 Route */}
                <Route path="*" element={<ErrorPage code={404} title="Page Not Found" message="The page you're looking for doesn't exist or has been moved." />} />
              </Routes>
            </Suspense>
          </AnimatePresence>
        </main>
        
        <Footer />
        <CookieBanner />
        <AccessibilityMenu />
        <QuickBreather />
        <MissionSliderReveal />
      </div>
    </ErrorBoundary>
  );
}

export default App;