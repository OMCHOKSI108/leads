import re

with open('src/app/page.tsx', 'r', encoding='utf-8') as f:
    code = f.read()

# Make sure useState, useEffect are imported
code = code.replace('import React from "react";', 'import React, { useState, useEffect } from "react";')

target_str = 'export default function Page() {\n  return ('
replacement_str = '''export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Eye pupil mouse movement tracking
    const handleMouseMove = (e: MouseEvent) => {
      const pupils = document.querySelectorAll('.eye-pupil-left, .eye-pupil-right');
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx;
      const dy = (e.clientY - cy) / cy;
      const moveX = dx * 8;
      const moveY = dy * 8;

      pupils.forEach((pupil) => {
        (pupil as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Scroll reveal observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animTargets = document.querySelectorAll('section, h1, h2, p');
    animTargets.forEach((target) => observer.observe(target));

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  return ('''

if 'const [mobileMenuOpen, setMobileMenuOpen]' not in code:
    code = code.replace(target_str, replacement_str)

# Enable mobile menu toggle button click
code = re.sub(
    r'<div className="marketing-chrome-link marketing-nav-link after:hidden relative h-5 flex items-center px-2 cursor-pointer">\s*Menu\s*</div>',
    '<div onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="marketing-chrome-link marketing-nav-link after:hidden relative h-5 flex items-center px-2 cursor-pointer">Menu</div>',
    code
)

# Connect mobileMenuOpen state to mobile menu container
code = re.sub(
    r'<div className="fixed inset-0 transition-opacity opacity-0 pointer-events-none md:hidden z-40 bg-purple/95 backdrop-blur flex flex-col py-16">',
    '<div className={`fixed inset-0 transition-all duration-300 md:hidden z-40 bg-purple/95 backdrop-blur flex flex-col py-16 ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>\n<button type="button" onClick={() => setMobileMenuOpen(false)} className="absolute top-6 right-6 text-white text-xl p-2">✕</button>',
    code
)

with open('src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(code)

print('Successfully updated src/app/page.tsx with pupil tracking, scroll reveal, and mobile menu!')
