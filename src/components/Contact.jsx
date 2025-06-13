// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { FiMail, FiLinkedin, FiSend } from 'react-icons/fi';
// import { personalInfo } from '../data/portfolioData';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     // Create mailto link
//     const subject = `Portfolio Contact from ${formData.name}`;
//     const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
//     const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
//     window.location.href = mailtoLink;
    
//     setIsSubmitting(false);
//     setFormData({ name: '', email: '', message: '' });
//   };

//   return (
//     <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
//       <div className="max-w-4xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
//             Get In Touch
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto mb-6"></div>
//           <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//             I'm always open to discussing new opportunities, innovative projects, or just having a great conversation about product management.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 dark:text-white"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 dark:text-white"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   rows={5}
//                   required
//                   className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 dark:text-white resize-none"
//                 />
//               </div>

//               <motion.button
//                 type="submit"
//                 disabled={isSubmitting}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="w-full inline-flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 text-white font-medium rounded-lg transition-colors"
//               >
//                 <FiSend className="mr-2" size={18} />
//                 {isSubmitting ? 'Sending...' : 'Send Message'}
//               </motion.button>
//             </form>
//           </motion.div>

//           {/* Contact Information */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="space-y-8"
//           >
//             <div>
//               <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
//                 Let's Connect
//               </h3>
//               <p className="text-gray-600 dark:text-gray-400 mb-8">
//                 Feel free to reach out through any of these channels. I typically respond within 24 hours.
//               </p>
//             </div>

//             <div className="space-y-4">
//               <motion.a
//                 href={`mailto:${personalInfo.email}`}
//                 whileHover={{ scale: 1.05 }}
//                 className="flex items-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transition-colors"
//               >
//                 <div className="flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full mr-4">
//                   <FiMail className="text-primary-600 dark:text-primary-400" size={20} />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
//                   <p className="text-gray-600 dark:text-gray-400">{personalInfo.email}</p>
//                 </div>
//               </motion.a>

//               <motion.a
//                 href={personalInfo.linkedin}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 whileHover={{ scale: 1.05 }}
//                 className="flex items-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transition-colors"
//               >
//                 <div className="flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full mr-4">
//                   <FiLinkedin className="text-primary-600 dark:text-primary-400" size={20} />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-gray-900 dark:text-white">LinkedIn</h4>
//                   <p className="text-gray-600 dark:text-gray-400">Connect with me</p>
//                 </div>
//               </motion.a>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;




import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiSend } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://mitenshah-backend.vercel.app/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast.success('Message sent successfully!', { position: "top-right" });
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast.error('Failed to send message. Please try again.', { position: "top-right" });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error('Something went wrong!', { position: "top-right" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <ToastContainer />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, innovative projects, or just having a great conversation about product management.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 dark:text-white resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 text-white font-medium rounded-lg transition-colors"
              >
                <FiSend className="mr-2" size={18} />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Feel free to reach out through any of these channels. I typically respond within 24 hours.
              </p>
            </div>

            <div className="space-y-4">
              <motion.a
                href={`mailto:${personalInfo.email}`}
                whileHover={{ scale: 1.05 }}
                className="flex items-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transition-colors"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full mr-4">
                  <FiMail className="text-primary-600 dark:text-primary-400" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
                  <p className="text-gray-600 dark:text-gray-400">{personalInfo.email}</p>
                </div>
              </motion.a>

              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex items-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transition-colors"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full mr-4">
                  <FiLinkedin className="text-primary-600 dark:text-primary-400" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">LinkedIn</h4>
                  <p className="text-gray-600 dark:text-gray-400">Connect with me</p>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
