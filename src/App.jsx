import Navigation from './components/Navigation';
import Home from './pages/Home';
import bgVideo from './assets/video_bg.mp4';

function App() {

  return (
    <section className='w-full h-full relative'>
      <video src={bgVideo} autoPlay loop muted className='w-[100vw] h-screen fixed top-0 left-0 object-cover z-0' />
      <section className='absolute top-0 left-0 z-10 w-full h-fit bg-transparent'>
        <Navigation />
        <Home />
      </section>
    </section>
  )
}

export default App
