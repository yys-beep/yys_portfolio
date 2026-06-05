'use client';

import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { experienceData } from '@/data/experience';
import SectionHeader from '@/components/ui/SectionHeader';
import Tag from '@/components/ui/Tag';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="05 / Experience"
          title="Where I've Contributed"
        />

        <div className="space-y-6 max-w-3xl">
          {experienceData.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="group relative p-6 md:p-8 rounded-2xl bg-surface border border-white/5 hover:border-white/10 transition-all duration-300"
            >
              {/* Top accent line on hover */}
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-accent/0 to-transparent group-hover:via-accent/30 transition-all duration-500" />

              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent/10 border border-accent/15 flex items-center justify-center">
                  <Briefcase size={16} className="text-accent" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <h3 className="font-display text-lg text-text-primary">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-mono text-text-muted border border-white/10 px-2 py-1 rounded-md flex-shrink-0">
                      {exp.duration}
                    </span>
                  </div>

                  <p className="text-accent text-sm mb-4">{exp.organization}</p>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((line, li) => (
                      <li key={li} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-text-muted mt-1.5 flex-shrink-0" />
                        <span className="text-text-secondary text-sm leading-relaxed">{line}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.tags && (
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <Tag key={tag} label={tag} variant="outline" />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
