import { useState } from 'react';
import logo from '../assets/tanjira_logo.svg';
import { MdArrowOutward } from "react-icons/md";

// let links = ['Services', 'Benefits', 'Networks'];

const Navigation = () => {
    const [smallscreen, Setsmallscreen] = useState(false);
    const [Links, setLinks] = useState([
        {id: 1, name: 'Services', value: '#services'},
        {id: 2, name: 'Benefits', value: '#benefits'},
        {id: 3, name: 'Networks', value: '#networks'}
    ]);

    const toggleNav = () => {
        Setsmallscreen(!smallscreen)
    }

    let SmallNav =
    <ul className='flex md:hidden flex-col items-center justify-around w-full min-h-[60vh] text-[#3c2848] uppercase absolute top-full left-0 z-20 bg-white p-5'>
                {
                    Links.map(link => (
                        <li key={link.id}><a href={link.value} onClick={toggleNav} className='font-semibold text-2xl'>{link.name}</a></li>
                    ))
                }
                <div className='flex items-center justify-center mt-3'>
                    <a href="#contact" className='font-bold text-2xl mx-1' onClick={toggleNav}>Get in Touch</a>
                    <MdArrowOutward className='font-extrabold text-2xl mx-1 text-[#6f1112]' onClick={toggleNav} />
                </div>
    </ul> ;

    return(
        <nav className='w-full h-fit py-5 px-3 flex items-end md:items-center justify-between bg-white/5 relative'>
            <div className='flex items-end justify-center'>
                <img src={logo} alt="Tanjira's Logo." className='w-[40px] md:w-[50px] lg:w-[50px]' />
                <h1 className='text-white font-extrabold text-lg md:text-xl lg:text-2xl'>TANJIRA</h1>
            </div>
            <ul className='hidden md:flex items-center justify-around md:w-[70%] lg:w-[60%] text-white uppercase'>
                {
                    Links.map(link => (
                        <li key={link.id}><a href={link.value} className='font-semibold text-base text-gray-400 hover:text-white'>{link.name}</a></li>
                    ))
                }
                <div className='flex items-center justify-center hover:text-[#6f1112]'>
                    <a href='#contact' className='font-bold text-lg mx-1'>Get in Touch</a>
                    <MdArrowOutward className='font-extrabold text-xl mx-1' />
                </div>
            </ul>
            {
                smallscreen ? SmallNav : null
            }
            <div className='flex items-end justify-center md:hidden'>
                {
                    smallscreen ? <button onClick={toggleNav} className='md:hidden text-base text-white font-bold uppercase'>Close</button> : <button onClick={toggleNav} className='md:hidden text-base text-white font-bold uppercase'>Menu</button>
                }
                
            </div>
        </nav>
    )
};

export default Navigation;