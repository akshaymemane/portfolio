'use client';

import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid';
import profileData from '@/data/profile.json';

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Animated entrance */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              {profileData.name}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-light text-blue-600 mb-8">
              {profileData.title}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-12">
              {profileData.summary}
            </p>
          </motion.div>

          {/* Key highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto"
          >
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">{profileData.years_experience}</div>
              <div className="text-gray-700">Years Experience</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">{profileData.team_leadership_experience}</div>
              <div className="text-gray-700">Team Leadership</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">Millions</div>
              <div className="text-gray-700">Users Impacted</div>
            </div>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap justify-center items-center gap-6 mb-12 text-gray-600"
          >
            <div className="flex items-center gap-2">
              <MapPinIcon className="h-5 w-5" />
              <span>{profileData.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <EnvelopeIcon className="h-5 w-5" />
              <a 
                href={`mailto:${profileData.contact.email}`}
                className="hover:text-blue-600 transition-colors"
              >
                {profileData.contact.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <PhoneIcon className="h-5 w-5" />
              <span>{profileData.contact.phone}</span>
            </div>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
            >
              Get In Touch
            </button>
            <a
              href={profileData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg"
            >
              View LinkedIn
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.button
            onClick={scrollToNext}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-blue-600 transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDownIcon className="h-8 w-8" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Hero;