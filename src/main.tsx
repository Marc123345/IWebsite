import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { I18nextProvider } from 'react-i18next';
import i18n from './lib/i18n';
import App from './App';
import { AnimationController } from './components/AnimationController';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AnimationController>
      <BrowserRouter>
        <HelmetProvider>
          <I18nextProvider i18n={i18n}>
            <App />
          </I18nextProvider>
        </HelmetProvider>
      </BrowserRouter>
    </AnimationController>
  </StrictMode>
);