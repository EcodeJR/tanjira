import Navigation from './components/Navigation';
import Home from './pages/Home';
// import bgVideo from './assets/video_bg.mp4';
import PreLoader from './components/PreLoader';
import { useEffect, useState } from 'react';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const removeLoader = () => setLoading(false);
  
    // Add event listener right away to catch the load event
    window.addEventListener('load', removeLoader);
  
    // Fallback in case load event takes too long
    const timer = setTimeout(removeLoader, 9000);
  
    return () => {
      window.removeEventListener('load', removeLoader);
      clearTimeout(timer); // Cleanup timeout
    };
  }, []);
  
  

  return (
    <section className='w-full h-full relative scroll-smooth'>
      {
        loading && <PreLoader />
      }
       
      
      {/* <video src={bgVideo} autoPlay loop muted className='w-[100vw] h-screen fixed top-0 left-0 object-cover z-0' /> */}
      <div className='w-screen h-screen fixed top-0 left-0 right-0 bg-white/60 z-0'>
        <div className='w-60 h-60 md:w-80 md:h-80 absolute top-0 right-0 bg-gradient-to-r from-[#ff9e01] via-[#fc210d] to-[#6f1112] shadow-2xl shadow-[#fc210d] rounded-full'></div>
        <div className='w-60 h-60 md:w-80 md:h-80 absolute bottom-0 left-0 bg-gradient-to-r from-[#ff9e01] via-[#fc210d] to-[#6f1112] shadow-2xl shadow-[#fc210d] rounded-full'></div>
      </div>
      <section className='absolute top-0 left-0 z-10 w-full h-fit bg-white/20 backdrop-blur-md text-[#3c2848] scroll-smooth'>
        <ScrollToTop />
        <Navigation />
        <Home />
      </section>
    </section>
  )
}

export default App
