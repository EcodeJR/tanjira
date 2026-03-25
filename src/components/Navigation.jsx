import { useState } from 'react';
import logo from '../assets/tanjira_logo.svg';

const links = [
    { id: 1, name: 'Services', value: '#services' },
    { id: 2, name: 'Benefits', value: '#benefits' },
    { id: 3, name: 'Networks', value: '#networks' },
];

const Navigation = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className='fixed top-0 z-50 w-full border-b border-white/5 bg-[#0d0d18]/80 backdrop-blur-xl'>
            <div className='mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 md:px-8'>
                <a href='#home' className='flex items-center gap-2'>
                    <img src={logo} alt="Tanjira logo" className='h-9 w-9 md:h-10 md:w-10' />
                    <span className='font-headline text-xl font-bold tracking-tight text-[#e9e6f7]'>Tanjira</span>
                </a>

                <ul className='hidden items-center gap-10 md:flex'>
                    {links.map((link) => (
                        <li key={link.id}>
                            <a
                                href={link.value}
                                className='font-headline text-sm font-semibold uppercase tracking-wider text-[#e9e6f7] transition-colors hover:text-[#81ecff]'
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                <a
                    href='#contact'
                    className='hidden rounded-md bg-[#ff9157] px-5 py-2.5 font-headline text-sm font-bold text-[#240d00] transition-all hover:shadow-[0_0_20px_rgba(255,145,87,0.35)] md:inline-flex'
                >
                    Get in Touch
                </a>

                <button
                    type='button'
                    onClick={() => setOpen(!open)}
                    className='font-headline text-sm font-bold uppercase tracking-wider text-[#e9e6f7] md:hidden'
                >
                    {open ? 'Close' : 'Menu'}
                </button>
            </div>

            {open && (
                <div className='border-t border-white/10 bg-[#12121e] px-4 py-6 md:hidden'>
                    <ul className='flex flex-col gap-4'>
                        {links.map((link) => (
                            <li key={link.id}>
                                <a
                                    href={link.value}
                                    onClick={() => setOpen(false)}
                                    className='font-headline text-sm font-semibold uppercase tracking-wider text-[#e9e6f7]'
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a
                                href='#contact'
                                onClick={() => setOpen(false)}
                                className='inline-flex rounded-md bg-[#ff9157] px-5 py-2.5 font-headline text-sm font-bold text-[#240d00]'
                            >
                                Get in Touch
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navigation;