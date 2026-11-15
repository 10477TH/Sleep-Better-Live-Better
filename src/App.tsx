import { useEffect, useState } from 'react';
import { AppRoute, parseHashRoute } from './utils/router';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { SciencePage } from './pages/SciencePage';
import { ResearchPage } from './pages/ResearchPage';
import { GuidePage } from './pages/GuidePage';
import { JourneyPage } from './pages/JourneyPage';
import { ReferencesPage } from './pages/ReferencesPage';

export default function App() {
  const [route, setRoute] = useState<AppRoute>(() => {
    if (typeof window === 'undefined') return 'home';
    if (!window.location.hash) {
      window.location.hash = '#/home';
    }
    return parseHashRoute(window.location.hash);
  });

  useEffect(() => {
    const handleHashChange = () => {
      const nextRoute = parseHashRoute(window.location.hash);
      setRoute(nextRoute);
      window.scrollTo({ top: 0, behavior: 'auto' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (route) {
      case 'about':
        return <AboutPage />;
      case 'science':
        return <SciencePage />;
      case 'research':
        return <ResearchPage />;
      case 'guide':
        return <GuidePage />;
      case 'journey':
        return <JourneyPage />;
      case 'references':
        return <ReferencesPage />;
      case 'home':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F2E9D9] text-[#29242F]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-[#E9C75B] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#29242F] focus:shadow-lg"
      >
        Skip to main content
      </a>

      <Navbar currentRoute={route} />

      <main id="main-content" className="flex-1">
        {renderPage()}
      </main>

      <Footer currentRoute={route} />
      <BackToTop />
    </div>
  );
}
