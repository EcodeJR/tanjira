import { useState, useRef, useLayoutEffect } from 'react';
import logo from '../assets/tanjira_logo.svg';
import { MdArrowOutward } from "react-icons/md";
import gsap from 'gsap';

// let links = ['Services', 'Benefits', 'Networks'];

const Navigation = () => {

    const logoAni = useRef(null);
    const linkAni = useRef(null);
    const linkAni1 = useRef(null);
    const linkAni2 = useRef(null);
    const btnAni = useRef(null);
    const smallMenu = useRef(null);
    const smallNav = useRef(null);

    useLayoutEffect(() => {
        const elements = [linkAni.current, linkAni1.current, linkAni2.current];

        gsap.fromTo(logoAni.current, 
            { x: -100, opacity: 0 }, // from values
            { x: 0, opacity: 1, duration: 1 } // to values
        );

        gsap.fromTo(btnAni.current, 
            { x: 100, opacity: 0 }, // from values
            { x: 0, opacity: 1, duration: 2 } // to values
        );

        elements.forEach(element => {
            gsap.fromTo(element, 
                { y: -100, opacity: 0 }, // from values
                { y: 0, opacity: 1, duration: 1 } // to values
            );
        });

        gsap.fromTo(smallMenu.current, 
            { x: 100, opacity: 0 }, // from values
            { x: 0, opacity: 1, duration: 1, ease: "power1.inOut"} // to values
          );

        //   gsap.fromTo(smallNav.current, 
        //     { y: -100, opacity: 0, duration: 1, ease: "power1.inOut" }, // from values
        //     { y: 0, opacity: 1, duration: 1, ease: "power1.inOut"} // to values
        //   );
    }, []);
    
    

    const [smallscreen, Setsmallscreen] = useState(false);
    const Links = [
        {id: 1, name: 'Services', value: '#services', AniRef : linkAni},
        {id: 2, name: 'Benefits', value: '#benefits', AniRef : linkAni1},
        {id: 3, name: 'Networks', value: '#networks', AniRef : linkAni2}
    ];

    const toggleNav = () => {
        Setsmallscreen(!smallscreen)
    }

    let SmallNav =
    <ul className='flex md:hidden flex-col items-center justify-around w-full min-h-[60vh] text-[#3c2848] uppercase absolute top-full left-0 z-20 bg-white p-5 scroll-smooth' ref={smallNav}>
                {
                    Links.map(link => (
                        <li key={link.id}><a href={link.value} onClick={toggleNav} className='font-semibold text-2xl scroll-smooth'>{link.name}</a></li>
                    ))
                }
                <div className='flex items-center justify-center mt-3'>
                    <a href="#contact" className='font-bold text-2xl mx-1' onClick={toggleNav}>Get in Touch</a>
                    <MdArrowOutward className='font-extrabold text-2xl mx-1 text-[#6f1112]' onClick={toggleNav} />
                </div>
    </ul> ;

    return(
        <nav className='w-full h-fit py-5 px-3 flex items-end md:items-center justify-between bg-black/5 relative scroll-smooth'>
            <div className='flex items-end justify-center' ref={logoAni}>
                <img src={logo} alt="Tanjira's Logo." className='w-[40px] md:w-[50px] lg:w-[50px]' />
                <h1 className='text-[#3c2848] font-extrabold text-lg md:text-xl lg:text-2xl'>TANJIRA</h1>
            </div>
            <ul className='hidden md:flex items-center justify-around md:w-[70%] lg:w-[60%] text-[#3c2848] uppercase'>
                {
                    Links.map(link => (
                        <li key={link.id} ref={link.AniRef}><a href={link.value} className='font-semibold text-base hover:text-[#3c2848]/40 delay-75 ease-in-out scroll-smooth'>{link.name}</a></li>
                    ))
                }
                <div className='flex items-center justify-center px-2 py-3 rounded-3xl hover:text-white hover:bg-gradient-to-r hover:from-[#ff9e01] hover:via-[#6f1112] hover:to-[#fc210d] hover:shadow-lg duration-75 ease-in-out delay-75' ref={btnAni}>
                    <a href='#contact' className='font-extrabold text-lg mx-1'>Get in Touch</a>
                    <MdArrowOutward className='font-extrabold text-xl mx-1' />
                </div>
            </ul>
            {
                smallscreen ? SmallNav : null
            }
            <div className='flex items-end justify-center md:hidden scroll-smooth'>
                {
                    smallscreen ? <button onClick={toggleNav} className='md:hidden text-base text-[#3c2848] font-bold uppercase'>Close</button> : <button onClick={toggleNav} className='md:hidden text-base text-[#3c2848] font-bold uppercase' ref={smallMenu}>Menu</button>
                }
                
            </div>
        </nav>
    )
};

export default Navigation;