'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, FolderOpen } from 'lucide-react';
import { projectsData } from '@/data/projects';
import { Project } from '@/types';
import SectionHeader from '@/components/ui/SectionHeader';
import Tag from '@/components/ui/Tag';

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const featured = project.tier === 'S';

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative flex flex-col rounded-2xl overflow-hidden border transition-all duration-500
        ${featured
          ? 'border-accent/20 bg-gradient-to-b from-accent/5 to-surface hover:border-accent/40 hover:shadow-[0_0_40px_rgba(0,212,255,0.1)]'
          : 'border-white/5 bg-surface hover:border-white/15 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]'
        }`}
    >
      {/* Top line accent */}
      {featured && (
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent z-10" />
      )}

      {/* Image Area */}
      <div className="relative h-56 bg-bg overflow-hidden border-b border-white/5">
        {project.imageUrl ? (
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
          />
        ) : (
          /* Fallback pattern if image is missing */
          <>
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(0,212,255,0.06) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0,212,255,0.06) 1px, transparent 1px)
                `,
                backgroundSize: '24px 24px',
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 rounded-2xl bg-surface border border-white/10 flex items-center justify-center group-hover:border-accent/30 transition-colors">
                <FolderOpen size={22} className="text-text-muted group-hover:text-accent transition-colors" />
              </div>
            </div>
          </>
        )}

        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-4 right-4 z-10">
            <span className="px-2.5 py-1 text-[10px] uppercase font-bold tracking-wider rounded-full bg-accent text-bg shadow-lg">
              Featured
            </span>
          </div>
        )}
        
        {/* Status Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-2.5 py-1 text-[10px] uppercase font-bold tracking-wider rounded-full bg-surface/80 text-text-primary backdrop-blur-md border border-white/10">
            {project.status}
          </span>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-surface to-transparent" />
      </div>

      {/* Content Area */}
      <div className="flex flex-col flex-1 p-6 gap-4">
        <div>
          <h3 className="font-display text-xl text-text-primary group-hover:text-accent transition-colors leading-snug mb-2">
            {project.title}
          </h3>
          <p className="text-text-secondary text-sm leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Contributions List */}
        {project.contributions && project.contributions.length > 0 && (
          <div className="flex-1 mt-2">
            <h4 className="text-xs text-text-primary font-semibold mb-2 uppercase tracking-widest">My Contributions:</h4>
            <ul className="space-y-1.5">
              {project.contributions.map((contribution, idx) => (
                <li key={idx} className="text-xs text-text-muted flex items-start gap-2">
                  <span className="text-accent mt-0.5">▹</span> {contribution}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.techStack.map((tech) => (
            <Tag key={tech} label={tech} />
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 pt-4 mt-2 border-t border-white/5">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              <Github size={16} />
              <span>Code</span>
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent/80 transition-colors ml-auto"
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative">
      {/* Background accent */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-accent/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="03 / Projects"
          title="Things I've Built"
          subtitle="A collection of applications, games, and systems that reflect my curiosity and craft."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {projectsData.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/yys-beep"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 text-text-secondary text-sm rounded-full hover:border-accent/30 hover:text-accent transition-all hover:shadow-[0_0_20px_rgba(0,212,255,0.05)]"
          >
            <Github size={16} />
            See all on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}