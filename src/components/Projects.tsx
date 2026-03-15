'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  RocketLaunchIcon, 
  CheckCircleIcon, 
  ClockIcon,
  BuildingOfficeIcon,
  HomeIcon,
  ChartBarIcon,
  CpuChipIcon 
} from '@heroicons/react/24/outline';
import projectsData from '@/data/projects.json';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return CheckCircleIcon;
      case 'active': return RocketLaunchIcon;
      case 'in_progress': return ClockIcon;
      default: return ClockIcon;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-100';
      case 'active': return 'text-blue-600 bg-blue-100';
      case 'in_progress': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Personal Infrastructure': return HomeIcon;
      case 'IoT & Analytics': return ChartBarIcon;
      case 'Enterprise Platform': return BuildingOfficeIcon;
      case 'High-Traffic Systems': return CpuChipIcon;
      case 'Financial Systems': return BuildingOfficeIcon;
      default: return RocketLaunchIcon;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Personal Infrastructure': return 'text-purple-600';
      case 'IoT & Analytics': return 'text-green-600';
      case 'Enterprise Platform': return 'text-blue-600';
      case 'High-Traffic Systems': return 'text-red-600';
      case 'Financial Systems': return 'text-orange-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of impactful projects spanning enterprise platforms, personal infrastructure, and innovative solutions
          </p>
        </motion.div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projectsData.featured_projects.map((project, index) => {
            const StatusIcon = getStatusIcon(project.status);
            const CategoryIcon = getCategoryIcon(project.category);
            
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <CategoryIcon className={`h-6 w-6 ${getCategoryColor(project.category)}`} />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                      <p className="text-sm text-gray-600">{project.category}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      <StatusIcon className="h-3 w-3" />
                      {project.status.replace('_', ' ')}
                    </span>
                    <span className="text-xs text-gray-500">{project.year}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Outcomes */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Outcomes</h4>
                  <ul className="space-y-1">
                    {project.outcomes.slice(0, 3).map((outcome, outcomeIndex) => (
                      <li key={outcomeIndex} className="text-sm text-gray-700 flex items-start gap-2">
                        <CheckCircleIcon className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Side Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-lg p-8 shadow-lg"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Side Projects & Experiments</h3>
            <p className="text-gray-600">
              Personal projects demonstrating continuous learning and technical exploration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectsData.side_projects.map((project, index) => (
              <div key={project.title} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-gray-900">{project.title}</h4>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {project.status}
                  </span>
                </div>
                <p className="text-sm text-gray-700 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Project Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center"
        >
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">5</div>
            <div className="text-gray-600">Featured Projects</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
            <div className="text-gray-600">Active Projects</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
            <div className="text-gray-600">Efficiency Gains</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">Millions</div>
            <div className="text-gray-600">Users Served</div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Want to see more technical details?
            </h3>
            <p className="text-gray-600 mb-6">
              I'd love to discuss architecture decisions, technical challenges, and system design choices
            </p>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Let's Talk Tech
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;