import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiAward } from 'react-icons/fi';
import { education } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 to-secondary-600"></div>

          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-secondary-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10"></div>

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                    <FiCalendar className="mr-1" />
                    {edu.duration}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {edu.degree}
                  </h3>
                  
                  <h4 className="text-lg font-semibold text-secondary-600 dark:text-secondary-400 mb-3">
                    {edu.institution}
                  </h4>
                  
                  <div className="flex items-center mb-3">
                    <FiAward className="text-accent-600 mr-2" />
                    <span className="text-accent-600 dark:text-accent-400 font-semibold">
                      {edu.grade}
                    </span>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Key Modules:</strong> {edu.modules}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;