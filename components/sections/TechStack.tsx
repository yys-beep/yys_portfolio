'use client';

import { motion } from 'framer-motion';
import { Code2, Monitor, Database, Brain, Sparkles, Wrench } from 'lucide-react';
import { techStackData } from '@/data/techstack';
import SectionHeader from '@/components/ui/SectionHeader';

// Map string icon names from data to actual Lucide React components
const iconMap: Record<string, React.ElementType> = {
  Code2,
  Monitor,
  Database,
  Brain,
  Sparkles,
  Wrench,
};

export default function TechStack() {
  return (
    <section id="tech" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="04 / Arsenal"
          title="Technologies & Tools"
          subtitle="The languages, frameworks, and concepts powering my digital experiences."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {techStackData.map((category, index) => {
            const Icon = iconMap[category.icon] || Code2;
            
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-6 rounded-2xl bg-surface border border-white/5 hover:border-accent/20 transition-colors"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/15 flex items-center justify-center">
                    <Icon size={18} className="text-accent" />
                  </div>
                  <h3 className="font-display text-lg text-text-primary">
                    {category.name}
                  </h3>
                </div>

                {/* Skills Progress Bars */}
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="text-text-secondary">{skill.name}</span>
                        <span className="text-text-muted font-mono text-xs">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 1, 
                            delay: 0.2 + (index * 0.1), 
                            ease: "easeOut" 
                          }}
                          className="h-full bg-accent/80 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}