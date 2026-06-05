'use client';

import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { achievementsData } from '@/data/achievements';
import SectionHeader from '@/components/ui/SectionHeader';

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 relative">
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-accent/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          eyebrow="06 / Achievements"
          title="Milestones & Recognition"
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {achievementsData.map((ach, i) => (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group p-6 rounded-2xl bg-surface border border-white/5 hover:border-accent/20 transition-colors duration-300 cursor-default"
            >
              {/* Trophy icon */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-yellow-400/10 border border-yellow-400/15 flex items-center justify-center">
                  <Trophy size={16} className="text-yellow-400" />
                </div>
                <span className="text-text-muted text-xs font-mono">{ach.year}</span>
              </div>

              <p className="text-text-muted text-xs font-mono tracking-widest mb-2 uppercase">
                {ach.competition}
              </p>
              <h3 className="font-display text-lg text-text-primary mb-2 group-hover:text-accent transition-colors">
                {ach.award}
              </h3>
              {ach.description && (
                <p className="text-text-secondary text-sm leading-relaxed">
                  {ach.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
