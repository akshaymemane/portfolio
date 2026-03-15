'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  CogIcon, 
  ServerIcon, 
  UserGroupIcon, 
  ChartBarIcon,
  BuildingOfficeIcon 
} from '@heroicons/react/24/outline';
import profileData from '@/data/profile.json';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const expertise = [
    {
      icon: ServerIcon,
      title: 'Backend & Platform Engineering',
      description: 'Designing and scaling distributed systems that handle millions of users with high availability and performance.'
    },
    {
      icon: CogIcon,
      title: 'Event-Driven Architecture',
      description: 'Expertise in Kafka-based async systems, microservices, and modern architectural patterns for enterprise scale.'
    },
    {
      icon: ChartBarIcon,
      title: 'System Design & Scalability',
      description: 'From monoliths to microservices - architecting systems that scale from thousands to millions of requests.'
    },
    {
      icon: UserGroupIcon,
      title: 'Technical Leadership',
      description: 'Leading cross-functional teams of 6-8 engineers through complex migrations and architectural decisions.'
    }
  ];

  const targetCompanies = profileData.target_companies;

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Senior engineer with deep expertise in distributed systems, passionate about building 
            platforms that enable teams to move fast while maintaining reliability at scale.
          </p>
        </motion.div>

        {/* Core Expertise */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {expertise.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow bg-gray-50"
            >
              <item.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Career Goals Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Career Focus
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Currently preparing for Staff/Principal engineering roles at top tech companies, 
              focusing on system design, technical leadership, and distributed systems architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Target Roles</h4>
              <ul className="space-y-2">
                {profileData.target_roles.map((role) => (
                  <li key={role} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {role}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Target Companies</h4>
              <div className="flex flex-wrap gap-2">
                {targetCompanies.map((company) => (
                  <span 
                    key={company}
                    className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700 border border-gray-200"
                  >
                    {company}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Current Status */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            Open to Opportunities
          </div>
          <p className="text-gray-600 mt-4">
            Actively interviewing for Staff+ engineering positions at top-tier tech companies
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;