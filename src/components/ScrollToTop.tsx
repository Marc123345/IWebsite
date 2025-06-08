import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop component
 * Scrolls to the top of the page when the route changes
 * Helps fix scrolling issues when navigating between pages
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top with smooth behavior
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    
    // Also reset any horizontal scroll
    document.documentElement.style.scrollBehavior = 'smooth';
    document.body.scrollLeft = 0;
    
    // Reset scroll behavior after scrolling
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, [pathname]);

  return null;
}