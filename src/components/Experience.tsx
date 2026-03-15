'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CalendarIcon, MapPinIcon, UsersIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import experienceData from '@/data/experience.json';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const formatDuration = (start: string, end: string) => {
    const startDate = new Date(start);
    const endDate = end === 'present' ? new Date() : new Date(end);
    const diffInMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12 + 
                        (endDate.getMonth() - startDate.getMonth());
    
    const years = Math.floor(diffInMonths / 12);
    const months = diffInMonths % 12;
    
    if (years === 0) return `${months}mo`;
    if (months === 0) return `${years}yr`;
    return `${years}yr ${months}mo`;
  };

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            9+ years of building and scaling distributed systems across insurance, fintech, and events platforms
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-blue-200"></div>

          {experienceData.experience.map((job, index) => (
            <motion.div
              key={`${job.company}-${job.role}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-16 ${
                index % 2 === 0 
                  ? 'md:flex-row-reverse md:text-right' 
                  : 'md:flex-row md:text-left'
              } flex flex-col md:flex md:items-center`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

              {/* Content */}
              <div className={`ml-20 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex flex-wrap items-center gap-2 mb-2 text-sm text-gray-500">
                      <CalendarIcon className="h-4 w-4" />
                      <span>{job.duration.display}</span>
                      <span>•</span>
                      <span>{formatDuration(job.duration.start, job.duration.end)}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {job.role}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-blue-600 font-semibold mb-2">
                      <span>{job.company}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <MapPinIcon className="h-4 w-4" />
                      <span>{job.location}</span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {job.summary}
                  </p>

                  {/* Key metrics */}
                  {job.impact_metrics && job.impact_metrics.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                      {job.impact_metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="bg-blue-50 rounded-lg p-3 text-center">
                          <div className="text-lg font-bold text-blue-600">{metric.value}</div>
                          <div className="text-xs text-gray-600">{metric.description}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Team size */}
                  {job.team_size && (
                    <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
                      <UsersIcon className="h-4 w-4" />
                      <span>Led team of {job.team_size} engineers</span>
                    </div>
                  )}

                  {/* Key achievements */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {job.achievements.slice(0, 3).map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="text-sm text-gray-700 flex items-start gap-2">
                          <ChartBarIcon className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {job.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">9+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
            <div className="text-gray-600">Companies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">50%</div>
            <div className="text-gray-600">Incident Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">8</div>
            <div className="text-gray-600">Engineers Mentored</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;