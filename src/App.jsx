import React, { useEffect, useState, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';

// Lazy-load below-the-fold components to reduce initial payload and eliminate TBT
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Skills = lazy(() => import('./components/Skills'));
const Education = lazy(() => import('./components/Education'));
const ContactJourney = lazy(() => import('./components/ContactJourney'));
const Footer = lazy(() => import('./components/Footer'));
const FloatingWhatsApp = lazy(() => import('./components/FloatingWhatsApp'));
const SecretDoorModal = lazy(() => import('./components/SecretDoorModal'));

// Critical above-the-fold memoization
const MemoHero = React.memo(Hero);
const MemoMarquee = React.memo(Marquee);

export default function App() {
  const [loading, setLoading] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('portfolio-theme') === 'dark';
    }
    return false;
  });
  const [isSecretOpen, setIsSecretOpen] = useState(false);
  const [loadBelowFold, setLoadBelowFold] = useState(() => {
    if (typeof window !== 'undefined' && window.location.hash) return true;
    return false;
  });

  // Defer below-the-fold components until user interaction or after initial paint quiet window
  useEffect(() => {
    if (loadBelowFold) return;

    const triggerLoad = () => {
      setLoadBelowFold(true);
      ['scroll', 'touchstart', 'mousemove', 'click', 'keydown', 'wheel'].forEach(evt => {
        window.removeEventListener(evt, triggerLoad);
      });
    };

    ['scroll', 'touchstart', 'mousemove', 'click', 'keydown', 'wheel'].forEach(evt => {
      window.addEventListener(evt, triggerLoad, { passive: true, once: true });
    });

    const timer = setTimeout(triggerLoad, 4500);

    return () => {
      ['scroll', 'touchstart', 'mousemove', 'click', 'keydown', 'wheel'].forEach(evt => {
        window.removeEventListener(evt, triggerLoad);
      });
      clearTimeout(timer);
    };
  }, [loadBelowFold]);

  // Initialize Lenis smooth scroll only after initial paint and on interaction/idle
  useEffect(() => {
    if (!loadBelowFold) return;

    let lenisInstance = null;
    let animationFrameId = null;

    const initLenis = async () => {
      try {
        const { default: Lenis } = await import('lenis');
        lenisInstance = new Lenis({
          duration: 1.1,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: 'vertical',
          smoothWheel: true,
          wheelMultiplier: 0.9,
        });

        function raf(time) {
          if (lenisInstance) {
            lenisInstance.raf(time);
            animationFrameId = requestAnimationFrame(raf);
          }
        }
        animationFrameId = requestAnimationFrame(raf);
        window.lenis = lenisInstance;
      } catch (e) {}
    };

    initLenis();

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (lenisInstance) lenisInstance.destroy();
      window.lenis = null;
    };
  }, [loadBelowFold]);


  // Instant zero-latency theme toggle handler (next-themes instant transition lock)
  const handleToggleTheme = () => {
    const nextDark = !isDark;

    // 1. Temporarily freeze all CSS transitions across DOM so theme swap is instantaneous
    const css = document.createElement('style');
    css.appendChild(
      document.createTextNode(
        `*, *::before, *::after {
          -webkit-transition: none !important;
          -moz-transition: none !important;
          -o-transition: none !important;
          -ms-transition: none !important;
          transition: none !important;
        }`
      )
    );
    document.head.appendChild(css);

    // 2. Synchronously mutate DOM classes
    if (nextDark) {
      document.documentElement.classList.add('dark', 'theme-charcoal');
    } else {
      document.documentElement.classList.remove('dark', 'theme-charcoal');
    }
    try {
      localStorage.setItem('portfolio-theme', nextDark ? 'dark' : 'light');
    } catch (e) {}
    setIsDark(nextDark);

    // 3. Force reflow and re-enable regular transitions on the very next animation frame
    window.getComputedStyle(css).opacity;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (css.parentNode) {
          css.parentNode.removeChild(css);
        }
      });
    });
  };

  return (
    <div className={`min-h-screen relative font-sans selection:bg-[#EA580C] selection:text-white ${
      isDark ? 'dark theme-charcoal bg-[#1C1917] text-[#FFF7ED]' : 'bg-[#FFF7ED] text-[#292524]'
    }`}>
      {/* Animated Preloader */}
      {loading && <Loader onComplete={() => setLoading(false)} />}

      {/* Fixed Clean Header */}
      <Navbar
        isDark={isDark}
        onToggleTheme={handleToggleTheme}
        onOpenSecret={() => setIsSecretOpen(true)}
      />

      {/* Main Layout Content */}
      <main className="relative">
        <MemoHero />
        {loadBelowFold && (
          <>
            <MemoMarquee />
            <Suspense fallback={null}>
              <Projects />
              <Experience />
              <Skills />
              <Education />
              <ContactJourney />
            </Suspense>
          </>
        )}
      </main>

      {/* Editorial Footer & Extras (Lazy Loaded) */}
      {loadBelowFold && (
        <Suspense fallback={null}>
          <Footer />
          <FloatingWhatsApp />
          {isSecretOpen && (
            <SecretDoorModal
              isOpen={isSecretOpen}
              onClose={() => setIsSecretOpen(false)}
            />
          )}
        </Suspense>
      )}
    </div>
  );
}
