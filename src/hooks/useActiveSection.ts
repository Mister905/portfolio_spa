import { useState, useEffect } from 'react';

const SECTION_IDS = ['home', 'about', 'skills', 'projects', 'contact'];

export const useActiveSection = (): string => {
  const [activeId, setActiveId] = useState<string>('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            if (id && SECTION_IDS.includes(id)) {
              setActiveId(id);
            }
          }
        }
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return activeId;
};
