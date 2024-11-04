import block from '../assets/block_val.jpeg';
// import edu_onboard from '../assets/edu_onboard.jpeg';
// import community from '../assets/community.jpeg';
// import charity from '../assets/charity.jpeg';
import { useRef, useEffect } from 'react';
import {gsap, Power1} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Power1);



const Services = () => {

    const serImg = useRef(null);
    const serText = useRef(null);
    const serImg1 = useRef(null);
    const serText1 = useRef(null);
    const serImg2 = useRef(null);
    const serText2 = useRef(null);
    const serImg3 = useRef(null);
    const serText3 = useRef(null);


    useEffect(() => {
        gsap.fromTo(serImg.current, 
          { x: -100, opacity: 0 }, // from values
          { x: 0, opacity: 1, duration: 1, ease: "power1.inOut",
            scrollTrigger: {
              trigger: serImg.current, // element to trigger animation
              start: "top 80%",
              end: "bottom top",
              toggleActions: "play pause resume none",
            }
           } // to values
        );
        gsap.fromTo(serText.current, 
            { x: 100, opacity: 0 }, // from values
            { x: 0, opacity: 1, duration: 1, ease: "power1.inOut",
              scrollTrigger: {
                trigger: serText.current, // element to trigger animation
                start: "top 80%",
                end: "bottom top",
                toggleActions: "play pause resume none",
              }
             } // to values
          );
          gsap.fromTo(serImg1.current, 
            { x: 100, opacity: 0 }, // from values
            { x: 0, opacity: 1, duration: 1, ease: "power1.inOut",
              scrollTrigger: {
                trigger: serImg1.current, // element to trigger animation
                start: "top 80%",
                end: "bottom top",
                toggleActions: "play pause resume none",
              }
             } // to values
          );
          gsap.fromTo(serText1.current, 
            { x: -100, opacity: 0 }, // from values
            { x: 0, opacity: 1, duration: 1, ease: "power1.inOut",
              scrollTrigger: {
                trigger: serText1.current, // element to trigger animation
                start: "top 80%",
                end: "bottom top",
                toggleActions: "play pause resume none",
              }
             } // to values
          );
          gsap.fromTo(serImg2.current, 
            { x: -100, opacity: 0 }, // from values
            { x: 0, opacity: 1, duration: 1, ease: "power1.inOut",
              scrollTrigger: {
                trigger: serImg2.current, // element to trigger animation
                start: "top 80%",
                end: "bottom top",
                toggleActions: "play pause resume none",
              }
             } // to values
          );
          gsap.fromTo(serText2.current, 
            { x: 100, opacity: 0 }, // from values
            { x: 0, opacity: 1, duration: 1, ease: "power1.inOut",
              scrollTrigger: {
                trigger: serText2.current, // element to trigger animation
                start: "top 80%",
                end: "bottom top",
                toggleActions: "play pause resume none",
              }
             } // to values
          );
          gsap.fromTo(serImg3.current, 
            { x: 100, opacity: 0 }, // from values
            { x: 0, opacity: 1, duration: 1, ease: "power1.inOut",
              scrollTrigger: {
                trigger: serImg3.current, // element to trigger animation
                start: "top 80%",
                end: "bottom top",
                toggleActions: "play pause resume none",
              }
             } // to values
          );
          gsap.fromTo(serText3.current, 
            { x: -100, opacity: 0 }, // from values
            { x: 0, opacity: 1, duration: 1, ease: "power1.inOut",
              scrollTrigger: {
                trigger: serText3.current, // element to trigger animation
                start: "top 80%",
                end: "bottom top",
                toggleActions: "play pause resume none",
              }
             } // to values
          );
    
        }, [])



    return ( 
        <section id='services' className="bg-transparent scroll-smooth">
            <h2 className="font-bold text-4xl md:text-4xl lg:text-6xl bg-clip-text text-[#3c2848] text-center tracking-wide uppercase">Our Services</h2>
            <div className="flex flex-col items-center justify-around py-5">
              <h3 className="text-[#3c2848] text-center text-md md:text-xl px-4 md:px-6 py-3">At TANJIRA, we provide top-tier blockchain validation services designed to ensure the security, reliability, and decentralization of blockchain networks. We offer comprehensive solutions for both blockchain projects and individual token holders</h3>

                {/* Blockchain Validation section */}
                <div className='flex flex-col md:flex-row items-center justify-between py-4'>
                    <img className='w-[100%] md:w-[30%] mx-0 md:mx-auto' src={block} alt="A representation of blocks on the blockchain" ref={serImg} />
                    <div className='text-[#3c2848] w-full md:w-[50%] flex items-start justify-center flex-col my-5 md:my-0 mx-auto px-5' ref={serText}>
                        <h3 className="text-3xl md:text-3xl lg:text-5xl font-bold text-center md:text-start mx-auto md:mx-0">Blockchain <br /> Validation</h3>
                        <p className='pr-3 text-center md:text-left w-[100%] md:w-[80%] text-base text-gray-600 py-2'>Blockchain validation ensures the integrity and security of a blockchain network. As validators, our role is essential in keeping the network stable and trustworthy. Our dedication helps maintain the system's reliability for everyone involved.</p>
                        <details className='w-[90vw] md:w-[40vw] h-fit bg-black/10 p-3 my-2'>
                            <summary className='text-xl font-bold'>Security</summary>
                            <p className='pl-5 text-base text-gray-600'>Our validation process enhances the network's security by verifying transactions and preventing malicious activity.</p>
                        </details>
                        <details className='w-[90vw] md:w-[40vw] h-fit bg-black/10 p-3 my-2'>
                            <summary className='text-xl font-bold'>Consensus Mechanism</summary>
                            <p className='pl-5 text-base text-gray-600'>We utilize Proof of stake(PoS) consensus mechanism, where validators stake their own cryptocurrency to secure the network, validate transactions, and create new blocks, thereby contributing to network trust through economic incentives, decentralization, and reduced 51% attack vulnerability.</p>
                        </details>
                        <details className='w-[90vw] md:w-[40vw] h-fit bg-black/10 p-3 my-2'>
                            <summary className='text-xl font-bold'>Infrastructure</summary>
                            <p className='pl-5 text-base text-gray-600'>We have a robust infrastructure, including server locations, redundancy, and failover mechanisms.</p>
                        </details>
                        <details className='w-[90vw] md:w-[40vw] h-fit bg-black/10 p-3 my-2'>
                            <summary className='text-xl font-bold'>Staking Rewards</summary>
                            <p className='pl-5 text-base text-gray-600'>There are rewards users can earn by staking their tokens with your validator.</p>
                        </details>
                    </div>
                </div>

                {/* Education and Onboarding section */}
                <div className='flex flex-col md:flex-row items-center justify-between py-2'>
                    
                    <div className='text-[#3c2848] w-full md:w-[40%] flex items-start justify-center flex-col my-5 md:my-0 mx-auto px-5' ref={serText1}>
                        <h3 className="text-3xl md:text-3xl lg:text-5xl font-bold text-center md:text-start mx-auto md:mx-0">Education <br /> & Onboarding</h3>
                        <p className='pr-3 text-center md:text-left w-[100%] md:w-[80%] text-base text-gray-600 py-2'>Educating users and providing onboarding resources are essential for a thriving community.</p>
                        <details className='w-[90vw] md:w-[40vw] h-fit bg-black/10 p-3 my-2'>
                            <summary className='text-xl font-bold'>Tutorials</summary>
                            <p className='pl-5 text-base text-gray-600'>We Create step-by-step guides on setting up wallets, staking, and participating in governance.</p>
                        </details>
                        <details className='w-[90vw] md:w-[40vw] h-fit bg-black/10 p-3 my-2'>
                            <summary className='text-xl font-bold'>Bootcamps</summary>
                            <p className='pl-5 text-base text-gray-600'>We Host virtual bootcamps or workshops where users can learn about blockchain technology, consensus algorithms, and best practices.</p>
                        </details>
                        <details className='w-[90vw] md:w-[40vw] h-fit bg-black/10 p-3 my-2'>
                            <summary className='text-xl font-bold'>Expert Guidance</summary>
                            <p className='pl-5 text-base text-gray-600'>We offer personalized assistance to new users, helping them navigate the complexities of blockchain networks.</p>
                        </details>
                    </div>

                    {/* <img className='w-[100%] md:w-[30%] mx-0 md:mx-auto' src={edu_onboard} alt="A representation of blockchain education." ref={serImg1} /> */}
                    <div className='text-[#3c2848] w-full md:w-[40%] flex items-start justify-center flex-col my-5 md:my-0 mx-auto px-5' ref={serText2}>
                        <h3 className="text-3xl md:text-3xl lg:text-5xl font-bold text-center md:text-start mx-auto md:mx-0">Community</h3>
                        <p className='pr-3 text-base text-center md:text-left w-[100%] text-gray-600 py-2'>Community Engagement.</p>
                        <details className='w-[90vw] md:w-[40vw] h-fit bg-black/10 p-3 my-2'>
                            <summary className='text-xl font-bold'>Forums and Chats</summary>
                            <p className='pl-5 text-base text-gray-600'>We set up community forums or chat channels where users can discuss blockchain-related topics, share insights, and ask questions.</p>
                        </details>
                        <details className='w-[90vw] md:w-[40vw] h-fit bg-black/10 p-3 my-2'>
                            <summary className='text-xl font-bold'>Governance Participation</summary>
                            <p className='pl-5 text-base text-gray-600'>We encourage users to participate in network governance decisions, reinforcing a sense of ownership.</p>
                        </details>
                    </div>
                </div>


                {/* Community section */}
                <div className='flex flex-col md:flex-row items-center justify-between py-10'>
                    {/* <img className='w-[100%] md:w-[30%] mx-0 md:mx-auto' src={community} alt="A representation of blockchain education." ref={serImg2} /> */}

                    
                </div>


                {/* Charity section */}
                {/* <div className='flex flex-col-reverse md:flex-row items-center justify-between py-10'>

                    <div className='text-[#3c2848] w-full md:w-[50%] flex items-start justify-center flex-col my-5 md:my-0 mx-auto px-5' ref={serText3}>
                        <h3 className="text-3xl md:text-3xl lg:text-5xl font-bold text-center md:text-start mx-auto md:mx-0">Charity</h3>
                        <p className='pr-3 text-base text-center md:text-left w-[100%] text-gray-600 py-2'>Charitable Initiatives.</p>
                        <details className='w-[90vw] md:w-[40vw] h-fit bg-black/10 p-3 my-2'>
                            <summary className='text-xl font-bold'>Donate a Portion</summary>
                            <p className='pl-5 text-base text-gray-600'>Allocate a percentage of your validator rewards to charitable causes. Explain which causes you support (e.g., education, environmental conservation).</p>
                        </details>
                        <details className='w-[90vw] md:w-[40vw] h-fit bg-black/10 p-3 my-2'>
                            <summary className='text-xl font-bold'>Transparency</summary>
                            <p className='pl-5 text-base text-gray-600'>Be transparent about your charitable contributions, sharing updates and impact reports.</p>
                        </details>
                    </div>

                    <img className='w-[100%] md:w-[40%] mx-0 md:mx-auto' src={charity} alt="A representation of blockchain education." ref={serImg3} />
                </div> */}
            </div>
        </section>
     );
}
 
export default Services;