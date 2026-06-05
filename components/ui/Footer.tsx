'use client';

import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display text-lg text-gradient">Yeoh Yee Syuen</span>

        <p className="text-text-muted text-sm text-center">
          © {year} Designed & built by Yeoh Yee Syuen
        </p>

        <div className="flex items-center gap-4">
          {[
            { icon: Github, href: 'https://github.com/', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com/', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:hello@example.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-text-muted hover:text-accent transition-colors"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
