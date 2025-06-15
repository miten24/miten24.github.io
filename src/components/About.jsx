import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center">
            {personalInfo.about}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-primary-100 dark:bg-primary-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <span className="text-2xl">🎯</span>
            </motion.div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Product Leadership
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Driving user-focused outcomes through strategy, teamwork, and execution
            </p>
          </div>

          <div className="text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-secondary-100 dark:bg-secondary-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <span className="text-2xl">⚡</span>
            </motion.div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Agile Mindset
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Leading iterative sprints with speed, flexibility, and clarity
            </p>
          </div>

          <div className="text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-accent-100 dark:bg-accent-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <span className="text-2xl">📊</span>
            </motion.div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Global & Data-Driven
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Blending insights from India, the UK, and Norway to build inclusive, impactful products
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;