import { MdMarkEmailRead } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { useRef, useEffect } from 'react';
import {gsap, Power1} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Power1);


const socials = [
    {
        icon: < FaFacebook className="text-3xl" />,
        link: 'https//:link.com'
    },
    {
        icon: <FaXTwitter className="text-3xl" />,
        link: 'https//:link.com'
    },
    {
        icon: <FaSquareWhatsapp className="text-3xl" />,
        link: 'https//:link.com'
    },
    {
        icon: <FaDiscord className="text-3xl" />,
        link: 'https//:link.com'
    },
    {
        icon: <FaTelegram className="text-3xl" />,
        link: 'https//:link.com'
    },
]


const Contact = () => {

    const mainTextcont = useRef(null);
    const smallTextcont = useRef(null);
    const emailcont = useRef(null);
    const phonecont = useRef(null);
    const socialsCont = useRef([]);

    useEffect(() => {
        gsap.fromTo(mainTextcont.current, 
            { y: 100, opacity: 0 }, // from values
            { y: 0, opacity: 1, duration: 1, ease: "power1.inOut",
              scrollTrigger: {
                trigger: mainTextcont.current, // element to trigger animation
                start: "top 80%",
                end: "bottom top",
                toggleActions: "play pause resume none",
              }
             } // to values
          );

          gsap.fromTo(smallTextcont.current, 
            { x: 100, opacity: 0 }, // from values
            { x: 0, opacity: 1, duration: 2, ease: "power1.inOut",
              scrollTrigger: {
                trigger: smallTextcont.current, // element to trigger animation
                start: "top 80%",
                end: "bottom top",
                toggleActions: "play pause resume none",
              }
             } // to values
          );

          gsap.fromTo(emailcont.current, 
            { x: 100, opacity: 0 }, // from values
            { x: 0, opacity: 1, duration: 1.5, ease: "power1.inOut",
              scrollTrigger: {
                trigger: emailcont.current, // element to trigger animation
                start: "top 80%",
                end: "bottom top",
                toggleActions: "play pause resume none",
              }
             } // to values
          );

          gsap.fromTo(phonecont.current, 
            { x: 100, opacity: 0 }, // from values
            { x: 0, opacity: 1, duration: 2, ease: "power1.inOut",
              scrollTrigger: {
                trigger: phonecont.current, // element to trigger animation
                start: "top 80%",
                end: "bottom top",
                toggleActions: "play pause resume none",
              }
             } // to values
          );

          socialsCont.current.forEach((link, index) => {
            // Calculate a unique duration based on the index or any other factor
            const duration = 0.5 + index * 0.2; // Example: increase duration by 0.2s for each card
            
            gsap.fromTo(link, 
              { x: 100, opacity: 0 }, // from values
              { x: 0, opacity: 1, duration: duration, ease: "power1.inOut",
                scrollTrigger: {
                  trigger: link, // element to trigger animation
                  start: "top 80%",
                  end: "bottom top",
                  toggleActions: "play pause resume none",
                }
              } // to values
            );
          });
    
    }, []);
    
    return ( 
        <section id="contact" className="p-5 py-10 bg-transparent flex items-center justify-center scroll-smooth">
            <div className="mx-auto text-[#3c2848] w-[80%] md:w-[60vw]">
                <h2 className="font-extrabold text-5xl md:text-7xl lg:text-9xl py-3 tracking-wide" ref={mainTextcont}>GET <br /> IN <span className="px-2 py-0 md:px-2 md:py-0 bg-orange-500 text-white font-extrabold rounded">TOUCH</span> WITH US</h2>
                <p className="text-[#3c2848] text-sm md:text-base text-start w-[60vw] md:w-[40vw] py-4" ref={smallTextcont}>Tanjira are highly active in the communities we operate in. We are available 24/7 and provide free support helping community in ofﬁcial chats</p>
                <ul className="px-4 py-2 list-disc my-4">
                    <li className="text-[#3c2848] text-base text-start py-1 flex items-center justify-start" ref={emailcont}><MdMarkEmailRead className="text-2xl" /> <a href="mailto: me@gmail.com" className="px-2 text-base md:text-xl font-bold uppercase">tanjiro@gmail.com</a></li>
                    <li className="text-[#3c2848] text-base text-start py-1 flex items-center justify-start" ref={phonecont}><FaPhoneSquareAlt className="text-2xl" /> <a href="call: 07051242451" className="px-2 text-base md:text-xl font-bold uppercase">+2347051242451</a></li>
                </ul>
                <div className="gap-2 flex flex-wrap">
                    {
                        socials.map((social, index) => (
                            <a className="mx-2 cursor-pointer font-bold" href={social.link} key={index} ref={el => socialsCont.current[index] = el}>{social.icon}</a>
                        ))
                    }
                </div>
            </div>
            
        </section>
     );
}
 
export default Contact;