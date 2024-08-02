import Navigation from './components/Navigation';
import Home from './pages/Home';
import bgVideo from './assets/video_bg.mp4';
import PreLoader from './components/PreLoader';
import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const removeLoader = () => setLoading(false);
    window.addEventListener('load', removeLoader);
    return () => window.removeEventListener('load', removeLoader);
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
        <Navigation />
        <Home />
      </section>
    </section>
  )
}

export default App
