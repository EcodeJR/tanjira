import security from '../assets/sec2.png';
import education from '../assets/learn1.png';
import charity from '../assets/comm2.png';
import { useRef, useEffect } from 'react';
import {gsap, Power1} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Power1);
const Benefits = () => {

    const card1 = useRef(null);
    const card2 = useRef(null);
    const card3 = useRef(null);

    useEffect(() => {
        gsap.fromTo(card1.current, 
            { y: 100, opacity: 0 }, // from values
            { y: 0, opacity: 1, duration: 0.5, ease: "power1.inOut",
              scrollTrigger: {
                trigger: card1.current, // element to trigger animation
                start: "top 80%",
                end: "bottom top",
                toggleActions: "play pause resume none",
              }
             } // to values
          );

          gsap.fromTo(card2.current, 
            { y: 100, opacity: 0 }, // from values
            { y: 0, opacity: 1, duration: 1, ease: "power1.inOut",
              scrollTrigger: {
                trigger: card2.current, // element to trigger animation
                start: "top 80%",
                end: "bottom top",
                toggleActions: "play pause resume none",
              }
             } // to values
          );

          gsap.fromTo(card3.current, 
            { y: 100, opacity: 0 }, // from values
            { y: 0, opacity: 1, duration: 2, ease: "power1.inOut",
              scrollTrigger: {
                trigger: card3.current, // element to trigger animation
                start: "top 80%",
                end: "bottom top",
                toggleActions: "play pause resume none",
              }
             } // to values
          );
    
    }, [])
    

    return ( 
        <section id="benefits" className="p-5 bg-transparent scroll-smooth">
            <h2 className="font-bold text-4xl md:text-4xl lg:text-6xl text-[#3c2848] text-center tracking-wide uppercase">Our Benefits</h2>
            {/*cards container*/}
            <div className="w-full h-fit gap-10 flex flex-wrap items-center justify-evenly py-10 px-1 text-[#3c2848]">
                {/*card 1*/}
                <div className="w-[90%] md:max-w-[40vw] lg:w-[25vw] h-fit flex flex-col items-center justify-center px-4 py-1 overflow-hidden" ref={card1}>
                    <div className="flex items-center justify-center">
                        <img src={security} alt="A security shield" className='w-[40vw] lg:w-[15vw]' />
                    </div>
                    <div className="flex items-center justify-between flex-col px-2 py-4 bg-[#3c2848] rounded-tr-2xl rounded-bl-2xl text-white">
                        <h3 className="text-2xl md:text-4xl font-extrabold mb-4 uppercase text-center">Security</h3>
                        <p className="text-center text-gray-300">We provide high quality, secure, and professionally managed infrastructure so that you can be conﬁdent in your staking rewards, day after day.</p>
                        
                        {/* <ul className="text-justify text-sm list-decimal">
                            <li><p> Our robust validation process ensures the integrity and security of blockchain networks.</p></li>
                            <li><p> By validating transactions and preventing malicious activity, we contribute to a stable and trustworthy ecosystem.</p></li>
                            <li><p> Users can confidently participate, knowing their assets are safeguarded by our commitment to security.</p></li>
                        </ul> */}
                    </div>
                </div>

                {/*card 2*/}
                <div className="w-[90%] md:max-w-[40vw] lg:w-[25vw] h-fit flex flex-col items-center justify-center px-4 py-1 overflow-hidden" ref={card2}>
                    <div className="flex items-center justify-center">
                    <img src={education} alt="A book" className='w-[40vw] lg:w-[15vw]' />
                    </div>
                    <div className="flex items-center justify-between flex-col px-2 py-4 bg-[#3c2848] rounded-tr-2xl rounded-bl-2xl text-white">
                        <h3 className="text-2xl md:text-4xl font-extrabold mb-4 uppercase text-center">Only the best networks.</h3>
                        <p className="text-center text-gray-300">We only run validator nodes on networks that we believe to be the best candidates for successful blockchains and products. We stake our own assets as proof.</p>
                        {/* <ul className="text-justify text-sm list-decimal">
                            <li><p> We provide comprehensive tutorials, bootcamps, and expert guidance for users new to blockchain technology.</p></li>
                            <li><p> Whether setting up wallets or understanding consensus mechanisms, our educational content empowers users.</p></li>
                            <li><p> Smooth onboarding ensures a seamless experience for all participants.</p></li>
                        </ul> */}
                    </div>
                </div>

                {/*card 3*/}
                <div className="w-[90%] md:max-w-[40vw] lg:w-[25vw] h-fit flex flex-col items-center justify-around px-4 py-1 overflow-hidden" ref={card3}>
                    <div className="flex items-center justify-center">
                        <img src={charity} alt="A charity" className='w-[40vw] lg:w-[15vw]' />
                    </div>
                    <div className="flex items-center justify-between flex-col px-2 py-4 bg-[#3c2848] rounded-tr-2xl rounded-bl-2xl text-white">
                        <h3 className="text-2xl md:text-4xl font-extrabold mb-4 uppercase text-center">Slash protected.</h3>
                        <p className="text-center text-gray-300">You can be conﬁdent in your investment with our 100% soft-slash protection. We will refund any funds lost to a downtime slash.</p>
                        {/* <ul className="text-justify list-decimal text-sm">
                            <li><p> Join our active community forums and chats to discuss blockchain topics, share insights, and participate in governance decisions.</p></li>
                            <li><p> As part of our commitment to giving back, a portion of our validator rewards goes to charitable causes.</p></li>
                            <li><p> Transparency in our charitable initiatives reinforces trust and community involvement.</p></li>
                        </ul> */}
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Benefits;