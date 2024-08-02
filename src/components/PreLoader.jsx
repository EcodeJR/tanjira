// import gsap from "gsap";
// import { useRef } from "react";
import logo from '../assets/tanjira_logo.svg';


const PreLoader = () => {
    // const tl = gsap.timeline();
    // const load_cont = useRef(null);
    // const cont = useRef(null);
    // const text = useRef(null);

    // tl.to(cont, {
    //     duration: 1,
    //     opacity: 1,
    //     bottom: 0,
    //     ease: "Power3.easeOut",
    // })
    // .from(text, {
    //     duration: 1.5,
    //     delay: 1,
    //     y: 70,
    //     skewY: 10,
    //     stagger: 0.4,
    //     ease: "Power3.easeOut",
    // })
    // .to(text, {
    //     duration: 1,
    //     y: 70,
    //     skewY: -20,
    //     stagger: 0.2,
    //     ease: "Power3.easeOut",
    // })
    // .to(
    //     load_cont,
    //     {
    //       duration: 1.5,
    //       height: "0vh",
    //       ease: "Power3.easeOut",
    //     });
    //     tl.play();
    return(
        <section className="fixed z-50 bottom-0 left-0 right-0 w-screen h-screen flex flex-col items-center justify-center bg-white text-[#3c2848] p-10">
            <img src={logo} alt="Tanjira's Logo." className='w-[50px] md:w-[60px] lg:w-[70px] py-5 animate-pulse' />
            <div className="flex flex-wrap items-center justify-center uppercase">
                <span className="text-base md:text-xl font-extrabold px-1 animate-[bounce_1s_ease-in-out_infinite]">Blockchain,</span>
                <span className="text-base md:text-xl font-extrabold px-1 animate-[bounce_1.5s_ease-in-out_infinite]">dPoS,</span>
                <span className="text-base md:text-xl font-extrabold px-1 animate-[bounce_2s_ease-in-out_infinite]">Verification.</span>
            </div> 
        </section>
    )
};

export default PreLoader;