'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { projectsData } from '@/data/projects';
import { ExternalLink, Github } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import Tag from '@/components/ui/Tag';

function TimelineCard({ project, align }: { project: typeof projectsData[0]; align: 'left' | 'right' }) {
  return (
    <div className={`group/card p-6 rounded-2xl bg-surface border border-white/5 hover:border-accent/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.08)] ${align === 'right' ? 'ml-auto' : ''}`}>
      <div className="flex items-center gap-3 mb-2">
        <span className="text-accent text-xs font-mono tracking-widest">{project.year}</span>
        <span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold bg-white/5 text-text-secondary border border-white/10">
          {project.status}
        </span>
      </div>
      
      <h3 className="font-display text-xl text-text-primary mb-2 leading-snug">{project.title}</h3>
      <p className="text-text-secondary text-sm leading-relaxed mb-4">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-5">
        {project.techStack.map((tech) => (
          <Tag key={tech} label={tech} />
        ))}
      </div>

      <div className="flex items-center gap-4 pt-4 border-t border-white/5">
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors flex items-center gap-1.5 text-sm">
          <Github size={16} /> Code
        </a>
        {project.demoUrl && (
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors flex items-center gap-1.5 text-sm">
            <ExternalLink size={16} /> Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

function TimelineItem({ project, index }: { project: typeof projectsData[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className="relative flex items-center justify-center w-full mb-12 last:mb-0">
      {/* Desktop Layout */}
      <div className="hidden md:flex w-full items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-[45%]"
        >
          {isLeft && <TimelineCard project={project} align="right" />}
        </motion.div>

        <div className="w-10 flex justify-center relative z-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="w-4 h-4 rounded-full bg-accent border-4 border-bg shadow-[0_0_15px_rgba(0,212,255,0.5)]"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-[45%]"
        >
          {!isLeft && <TimelineCard project={project} align="left" />}
        </motion.div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex gap-6 w-full">
        <div className="flex flex-col items-center relative z-10 pt-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.4 }}
            className="w-4 h-4 rounded-full bg-accent border-4 border-bg shadow-[0_0_15px_rgba(0,212,255,0.5)] flex-shrink-0"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex-1 pb-8"
        >
          <TimelineCard project={project} align="left" />
        </motion.div>
      </div>
    </div>
  );
}

export default function Timeline() {
  const sortedProjects = [...projectsData].sort((a, b) => b.year - a.year);

  return (
    <section id="timeline" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="02 / Evolution"
          title="The Builder's Journey"
          subtitle="A timeline of systems, games, and applications I've engineered from 2024 to present."
        />

        <div className="relative mt-16">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/30 to-transparent md:-translate-x-1/2" />
          
          {sortedProjects.map((project, i) => (
            <TimelineItem key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}