import { motion } from 'framer-motion';
import { AlertTriangle, Home, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ErrorPageProps {
  title?: string;
  message?: string;
  code?: string | number;
  showHomeLink?: boolean;
  showBackLink?: boolean;
}

export default function ErrorPage({
  title = "Oops! Something went wrong",
  message = "We're sorry for the inconvenience. Please try refreshing the page.",
  code,
  showHomeLink = true,
  showBackLink = true
}: ErrorPageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-ilight-50 px-4">
      <div className="text-center max-w-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6 flex justify-center">
            <div className="w-20 h-20 rounded-full bg-ilight-100 flex items-center justify-center">
              <AlertTriangle className="w-10 h-10 text-ilight-500" />
            </div>
          </div>
          
          {code && (
            <div className="text-5xl font-bold text-ilight-500 mb-4">{code}</div>
          )}
          
          <h1 className="text-2xl font-bold text-ilight-700 mb-4">
            {title}
          </h1>
          
          <p className="text-ilight-600 mb-8">
            {message}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {showBackLink && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.history.back()}
                className="btn-secondary flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-5 h-5" />
                Go Back
              </motion.button>
            )}
            
            {showHomeLink && (
              <Link to="/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary flex items-center justify-center gap-2"
                >
                  <Home className="w-5 h-5" />
                  Back to Home
                </motion.button>
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}