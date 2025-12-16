import React from 'react';
import { motion } from 'framer-motion';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* @ts-expect-error - Framer Motion v6 type definitions issue */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-2"
        >
          © {new Date().getFullYear()} James McCarthy
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;

