'use client';

import { motion, useInView, animate } from 'framer-motion';
import { useRef, useEffect } from 'react';
import SectionHeader from '@/components/ui/SectionHeader';

interface StatProps {
  value: number;
  suffix?: string;
  label: string;
  delay?: number;
  decimals?: number;
}

function AnimatedStat({ value, suffix = '', label, delay = 0, decimals = 0 }: StatProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const el = ref.current;
    const controls = animate(0, value, {
      duration: 1.8,
      delay,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(v) {
        el.textContent = v.toFixed(decimals) + suffix;
      },
    });
    return () => controls.stop();
  }, [inView, value, suffix, delay, decimals]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="text-center p-6 rounded-2xl bg-surface border border-white/5 hover:border-accent/20 transition-colors"
    >
      <div className="text-3xl font-display text-gradient mb-1">
        <span ref={ref}>0{suffix}</span>
      </div>
      <p className="text-text-secondary text-sm">{label}</p>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="01 / About"
          title="Who I Am"
          subtitle="A peek behind the terminal."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: profile + bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-8"
          >
            {/* Profile placeholder */}
            <div className="flex items-center gap-6">
              <div className="relative flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-surface border border-white/10 flex items-center justify-center overflow-hidden">
                  <span className="font-display text-2xl text-gradient">YS</span>
                </div>
                <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-green-400 border-2 border-bg" />
              </div>
              <div>
                <p className="font-display text-xl text-text-primary">Yeoh Yee Syuen</p>
                <p className="text-text-secondary text-sm">Computer Science Student & Technology Builder</p>
                <p className="text-text-secondary text-sm">Malaysia · Available for Internships (Jul/Aug '26)</p>
              </div>
            </div>

            {/* Bio paragraphs */}
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                I'm a Computer Science (Multimedia Computing) undergraduate at the University of Malaya, 
                with a deep interest in building software, AI-powered systems, and interactive digital experiences.
                My journey spans across academic projects, competitive hackathons, and technical teaching roles.
              </p>
              <p>
                I thrive on exploration and hands-on development. Whether I'm building a real-time full-stack web application, 
                prototyping a mobile app, integrating a Generative AI pipeline, or designing an interactive AR game—I enjoy
                experimenting across the entire technical stack to turn ideas into functional products.
              </p>
              <p>
                Outside of building, you'll find me exploring new frameworks, experimenting with AI-assisted 
                prototyping, or helping my peers debug logical problems as a university programming demonstrator.
              </p>
            </div>

            {/* Fun facts / quick bio */}
            <div className="grid grid-cols-2 gap-3 mt-2">
              {[
                { label: 'University', value: 'University of Malaya' },
                { label: 'Degree', value: 'Bachelor of Computer Science (Multimedia Computing)' },
                { label: 'Expected Grad', value: 'Feb 2028' },
                { label: 'Interests', value: 'Software, AI, Interactive Systems' },
              ].map(({ label, value }) => (
                <div 
                  key={label} 
                  className={`p-4 rounded-xl bg-surface border border-white/5 ${label === 'Degree' ? 'col-span-2' : ''}`}
                >
                  <p className="text-text-muted text-xs font-mono mb-1">{label}</p>
                  <p className="text-text-primary text-sm">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-8"
          >
            <div className="grid grid-cols-2 gap-4">
              <AnimatedStat value={3.84} decimals={2} label="CGPA" delay={0} />
              <AnimatedStat value={12} suffix="+" label="Technical Projects" delay={0.1} />
              <AnimatedStat value={8} suffix="+" label="Hackathons & Competitions" delay={0.2} />
              <AnimatedStat value={3} suffix="+" label="Leadership & Organizing Experience" delay={0.3} />
            </div>

            {/* Currently learning block */}
            <div className="p-6 rounded-2xl bg-surface border border-accent/15 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
              <p className="text-accent text-xs font-mono tracking-widest mb-3">CORE FOCUS & EXPLORATION</p>
              <div className="flex flex-wrap gap-2">
                {['Full-Stack Workflows', 'Generative AI Integration', 'Interactive Apps', 'Mobile & Web', 'Database Design'].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-xs rounded-lg bg-accent/10 text-accent/80 border border-accent/15 font-mono"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* What I value */}
            <div className="p-6 rounded-2xl bg-surface border border-white/5">
              <p className="text-text-secondary text-xs font-mono tracking-widest mb-4">WHAT I VALUE</p>
              <div className="space-y-3">
                {[
                  'Critical thinking and structured problem solving',
                  'Clear communication and strong teamwork',
                  'Adaptability in fast-paced hackathon environments',
                  'Understanding core fundamentals before abstractions',
                ].map((val) => (
                  <div key={val} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                    <p className="text-text-secondary text-sm">{val}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}