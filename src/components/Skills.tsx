'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  CodeBracketIcon, 
  ServerIcon, 
  CloudIcon, 
  ChartBarIcon,
  ComputerDesktopIcon,
  AcademicCapIcon 
} from '@heroicons/react/24/outline';
import skillsData from '@/data/skills.json';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const getSkillLevelColor = (level: string) => {
    switch (level) {
      case 'expert': return 'bg-green-500';
      case 'advanced': return 'bg-blue-500';
      case 'intermediate': return 'bg-yellow-500';
      default: return 'bg-gray-400';
    }
  };

  const getSkillLevelWidth = (level: string) => {
    switch (level) {
      case 'expert': return 'w-full';
      case 'advanced': return 'w-4/5';
      case 'intermediate': return 'w-3/5';
      default: return 'w-2/5';
    }
  };

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: CodeBracketIcon,
      skills: skillsData.skills.programming_languages,
      color: 'text-blue-600'
    },
    {
      title: 'Backend & Architecture',
      icon: ServerIcon,
      skills: skillsData.skills.backend_architecture,
      color: 'text-green-600'
    },
    {
      title: 'Cloud & DevOps',
      icon: CloudIcon,
      skills: skillsData.skills.cloud_devops,
      color: 'text-purple-600'
    },
    {
      title: 'Data & Observability',
      icon: ChartBarIcon,
      skills: skillsData.skills.data_observability,
      color: 'text-orange-600'
    },
    {
      title: 'Frontend Technologies',
      icon: ComputerDesktopIcon,
      skills: skillsData.skills.frontend,
      color: 'text-pink-600'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Deep expertise across the full stack with focus on backend engineering and distributed systems
          </p>
        </motion.div>

        {/* Core Expertise Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {skillsData.skills.core_expertise.map((skill, index) => (
            <div key={skill.category} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">{skill.years}yr</div>
              <div className="font-semibold text-gray-900 mb-2">{skill.category}</div>
              <div className="text-sm text-gray-600 capitalize">{skill.level}</div>
            </div>
          ))}
        </motion.div>

        {/* Detailed Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-gray-50 rounded-lg p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <category.icon className={`h-8 w-8 ${category.color}`} />
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-gray-900">{skill.name}</span>
                        {(skill as any).primary && (
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                            Primary
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span>{skill.years}yr</span>
                        <span className="capitalize">{skill.level}</span>
                      </div>
                    </div>
                    
                    {/* Skill level bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                      <div className={`h-2 rounded-full ${getSkillLevelColor(skill.level)} ${getSkillLevelWidth(skill.level)}`}></div>
                    </div>

                    {/* Specific technologies */}
                    {(skill as any).specific && (
                      <div className="flex flex-wrap gap-1 mb-2">
                        {(skill as any).specific.map((tech: string) => (
                          <span 
                            key={tech}
                            className="bg-white text-gray-600 px-2 py-1 rounded text-xs border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learning Focus */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-8"
        >
          <div className="flex items-center gap-3 mb-6 justify-center">
            <AcademicCapIcon className="h-8 w-8 text-purple-600" />
            <h3 className="text-2xl font-bold text-gray-900">Current Learning Focus</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillsData.learning_focus.map((topic) => (
              <div key={topic} className="bg-white rounded-lg p-4 text-center shadow-sm">
                <span className="text-gray-800 font-medium">{topic}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <p className="text-gray-600">
              Actively preparing for Staff+ engineering interviews and expanding expertise in AI/ML systems
            </p>
          </div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center"
        >
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">Java</div>
            <div className="text-gray-600">Primary Language</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">Kafka</div>
            <div className="text-gray-600">Event Streaming</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">AWS</div>
            <div className="text-gray-600">Cloud Platform</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">Spring</div>
            <div className="text-gray-600">Framework</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;