import Navigation from './components/Navigation';
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop';
import PreLoader from './components/PreLoader';
import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className='relative min-h-screen overflow-x-hidden bg-[#0d0d18] text-[#e9e6f7]'>
      <ScrollToTop />
      {loading && <PreLoader />}

      <div className='pointer-events-none fixed inset-0 z-0'>
        <div className='absolute -top-40 -right-20 h-80 w-80 rounded-full bg-[#ff9157]/20 blur-[90px]' />
        <div className='absolute bottom-10 -left-20 h-96 w-96 rounded-full bg-[#81ecff]/10 blur-[120px]' />
        <div className='absolute inset-0 bg-[radial-gradient(circle,rgba(129,236,255,0.06)_1px,transparent_1px)] bg-[length:40px_40px] opacity-60' />
      </div>

      <div className='relative z-10'>
        <Navigation />
        <Home />
      </div>
    </section>
  );
}

export default App;
