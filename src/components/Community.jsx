import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiUsers } from 'react-icons/fi';
import { community } from '../data/portfolioData';

const Community = () => {
  return (
    <section id="community" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Community & Leadership
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {community.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-4"
              >
                <FiUsers className="text-primary-600 dark:text-primary-400" size={24} />
              </motion.div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {item.organization}
              </h3>
              
              <h4 className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-2">
                {item.role}
              </h4>
              
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                <FiCalendar className="mr-1" />
                {item.duration}
              </div>

              <p className="text-gray-700 dark:text-gray-300 text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;