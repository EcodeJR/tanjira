import homesvg from '../assets/head1_svg.svg'
import logo from '../assets/tanjira_logo.svg';
import { FaStarOfLife } from "react-icons/fa";
import Services from '../components/Services';
import Benefits from '../components/Benefits';
import Networks from '../components/Networks';
import Contact from '../components/Contact';
import { useState, useRef, useEffect } from 'react';
import {gsap, Power1} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Power1);

// window.addEventListener('scroll', window.scroll({
//     behavior: 'smooth'
// }))
const Home = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('load', ()=> {
    scrollToTop();
  })

    const [counters, setCounters] = useState([0, 0]);
    const countersRefs = [useRef(null), useRef(null)];
  
    const finalValues = [1, 99]; // Final values for each counter
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
              let currentCount = 0;
              const countInterval = setInterval(() => {
                if (currentCount === finalValues[index]) {
                  clearInterval(countInterval);
                } else {
                  currentCount += 1;
                  setCounters((prevCounters) => {
                    const updatedCounters = [...prevCounters];
                    updatedCounters[index] = currentCount;
                    return updatedCounters;
                  });
                }
              }, 10);
            }
          });
        },
        { threshold: 1 } // Adjust threshold as needed
      );
  
      countersRefs.forEach((ref) => {
        if (ref.current) {
          observer.observe(ref.current);
        }
      });
  
      return () => {
        countersRefs.forEach((ref) => {
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        });
      };
    }, []);

    const mainText1 = useRef(null);
    const counterAni = useRef(null);
    const imageAni = useRef(null);
    const textAni = useRef(null);
    const maqueeAni = useRef(null);



    useEffect(() => {
      
    gsap.fromTo(mainText1.current, 
      { y: 50, opacity: 0, stagger: 0.5 }, // from values
      { y: 0, opacity: 1, duration: 2, stagger: 0.5, ease: "power1.inOut" } // to values
    );

    gsap.fromTo(counterAni.current, 
      { x: -100, opacity: 0 }, // from values
      { x: 0, opacity: 1, duration: 2, ease: "power1.inOut",
        scrollTrigger: {
          trigger: counterAni.current, // element to trigger animation
          start: "top 60%",
          end: "bottom top",
          toggleActions: "play pause resume none",
        }
       } // to values
    );

    gsap.fromTo(textAni.current, 
      { x: 100, opacity: 0 }, // from values
      { x: 0, opacity: 1, duration: 2, ease: "power1.inOut",
        scrollTrigger: {
          trigger: textAni.current, // element to trigger animation
          start: "top 80%",
          end: "bottom top",
          toggleActions: "play pause resume none",
        }
       } // to values
    );

    }, [])
    
    
    return ( 
        <section className="w-full h-fit scroll-smooth overflow-x-hidden">
            <div className="w-full h-fit py-10">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#3c2848] uppercase text-center tracking-wider" ref={mainText1}>
                    Earn<br /> <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff9e01] via-[#6f1112] to-[#fc210d]">Staking rewards</span> <br />
                    through non-custodial staking <br />
                    and Web3 infrastructure.
                </h1>
            </div>
            <div className="w-full h-fit flex flex-col-reverse md:flex-wrap md:flex-row items-center justify-around p-3">
                <div className="flex flex-col items-center justify-center" ref={counterAni}>
                    <div className="p-10 rounded-lg flex flex-col items-center justify-center border-[1px] border-black/5 bg-gray-500/10 my-3">
                        <h1 className='text-[#3c2848] text-4xl md:text-5xl lg:text-5xl' ref={countersRefs[0]}>{counters[0]}+</h1>
                        <p className='text-gray-500 text-base'>NETWORKS</p>
                    </div>
                    <div className="p-10 rounded-lg flex flex-col items-center justify-center border-[1px] border-black/5 bg-gray-500/10">
                      <h1 className='text-[#3c2848] text-4xl md:text-5xl lg:text-5xl' ref={countersRefs[1]}>{counters[1]}%</h1>
                      <p className='text-gray-500 text-base'>UP TIME</p>
                    </div>
                </div>
                <div className='flex items-center justify-center my-4 md:my-0' ref={imageAni}>
                    <img src={homesvg} loading='lazy' alt="An NFT statue" className='w-[80%] md:w-[40vw]' />
                </div>
                <div className='flex flex-col items-center md:items-start justify-center md:w-[20vw]' ref={textAni}>
                    <p className='text-base text-center md:text-left'>Our professional staking services support the future of decentralised blockchains.</p>
                    <span className='bg-gradient-to-r from-[#ff9e01] via-[#6f1112] to-[#fc210d] p-3 rounded-3xl cursor-pointer text-center text my-2 text-white font-bold hover:shadow-lg hover:px-4 hover:delay-100 ease-in-out'><a href="#contact">Get Started</a></span>
                </div>
            </div>

            <div className="pointer-events-none relative flex gap-10 overflow-hidden bg-black/10 py-2 my-20 h-[10vh] lg:h-[15vh] -skew-y-6" ref={maqueeAni}>
                <div className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-10 text-[#3c2848] font-bold">
                <h3 className='text-2xl'>BLOCKCHAIN</h3>
                {/* <FaStarOfLife className='font-bold text-3xl text-orange-600 px-3 w-10' />
                <h3 className='text-2xl'>WEB3</h3> */}
                <FaStarOfLife className='font-bold text-3xl text-orange-600 px-3 w-10' />
                <h3 className='text-2xl'>dPoS</h3>
                {/* <FaStarOfLife className='font-bold text-3xl text-orange-600 px-3 w-10' />
                <h3 className='text-2xl'>VERIFICATION</h3> */}
                <FaStarOfLife className='font-bold text-3xl text-orange-600 px-3 w-10' />
                <h3 className='text-2xl'>LEARNING</h3>
                <FaStarOfLife className='font-bold text-3xl text-orange-600 px-3 w-10' />
                <h3 className='text-2xl'>EARNING</h3>
                </div>
            </div>
            <Services />
            <Benefits />
            <Networks />
            <Contact />
            <footer className='w-full flex flex-col items-center justify-center p-3'>
                <div className='flex items-center justify-between w-[90%]'>
                    <div className='flex items-end justify-center'>
                        <img src={logo} alt="Tanjira's Logo." className='w-[40px] md:w-[50px] lg:w-[50px]' />
                        <h1 className='text-[#3c2848] font-extrabold text-lg md:text-xl lg:text-2xl'>TANJIRA</h1>
                    </div>
                    <p className='text-[#3c2848] text-xs md:text-sm font-bold w-[30%] md:w-[20%]'>Our professional staking services support the future of decentralised blockchain.</p>
                </div>
                <hr className='w-[90%] h-[3px] bg-[#3c2848] opacity-40 rounded-lg my-4' />
                <h5 className='text-[#3c2848] text-base text-center uppercase'>© tanjira 2024</h5>
            </footer>
        </section>
     );
}
 
export default Home;