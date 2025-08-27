import { motion } from 'framer-motion';

export default function SkipLink() {
  return (
    <motion.a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 
        bg-white text-ilight-700 px-4 py-2 rounded-lg z-50 shadow-calm
        focus:outline-none focus:ring-2 focus:ring-ilight-500 focus:ring-offset-2 font-bold"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <TranslatedContent dynamicContent={true}>Skip to main content</TranslatedContent>
    </motion.a>
  );
}