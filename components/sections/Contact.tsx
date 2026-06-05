'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

export default function Contact() {
  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: 'yysyuen123@gmail.com',
      href: 'mailto:yysyuen123@gmail.com',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/yys-beep',
      href: 'https://github.com/yys-beep',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/yeoh-yee-syuen',
      href: 'https://linkedin.com/in/yeoh-yee-syuen-aa9053321',
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-accent/3 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <SectionHeader
          eyebrow="07 / Contact"
          title="Let's Build Something Together"
          subtitle="Have an interesting project, opportunity, or just want to chat? My inbox is always open."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center gap-10 mt-8"
        >
          <p className="text-text-secondary leading-relaxed max-w-2xl text-lg">
            I am actively seeking internship opportunities in software engineering, backend development, 
            technology consulting, or AI/automation for <strong className="text-text-primary">July/August 2026 to February 2027</strong>. 
            Whether you're a recruiter or a fellow developer — feel free to reach out.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 w-full">
            {contacts.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-surface border border-white/5 hover:border-accent/30 group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(0,212,255,0.15)]"
              >
                <div className="w-14 h-14 rounded-full bg-accent/5 border border-accent/10 flex items-center justify-center group-hover:bg-accent/15 group-hover:border-accent/30 transition-colors duration-300">
                  <Icon size={24} className="text-accent" />
                </div>
                <div>
                  <p className="text-text-muted text-xs font-mono tracking-widest uppercase mb-2">{label}</p>
                  <p className="text-text-primary text-sm font-medium">{value}</p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}