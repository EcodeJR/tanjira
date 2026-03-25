import logo from '../assets/tanjira_logo.svg';

const PreLoader = () => {
    return (
        <section className='fixed inset-0 z-[80] flex items-center justify-center overflow-hidden bg-[#0d0d18] px-4'>
            <div className='pointer-events-none absolute inset-0'>
                <div className='absolute -top-24 right-0 h-72 w-72 rounded-full bg-[#ff9157]/20 blur-[95px]' />
                <div className='absolute -bottom-24 left-0 h-80 w-80 rounded-full bg-[#81ecff]/15 blur-[110px]' />
                <div className='absolute inset-0 bg-[radial-gradient(circle,rgba(129,236,255,0.05)_1px,transparent_1px)] bg-[length:36px_36px]' />
            </div>

            <div className='relative w-full max-w-sm rounded-2xl border border-white/10 bg-[#1e1e2d]/65 p-8 text-center backdrop-blur-2xl'>
                <img src={logo} alt='Tanjira logo' className='mx-auto h-16 w-16 animate-pulse' />
                <h2 className='mt-4 font-headline text-3xl font-bold tracking-tight text-[#e9e6f7]'>Tanjira</h2>
                <p className='mt-2 text-sm text-[#aba9b9]'>Preparing secure validator infrastructure...</p>

                <div className='mt-6 h-2 w-full overflow-hidden rounded-full bg-white/10'>
                    <div className='h-full w-1/2 animate-pulse rounded-full bg-gradient-to-r from-[#ff9157] to-[#81ecff]' />
                </div>

                <div className='mt-5 flex items-center justify-center gap-2'>
                    <span className='h-2 w-2 animate-bounce rounded-full bg-[#ff9157]' />
                    <span className='h-2 w-2 animate-bounce rounded-full bg-[#81ecff] [animation-delay:140ms]' />
                    <span className='h-2 w-2 animate-bounce rounded-full bg-[#aa8aff] [animation-delay:280ms]' />
                </div>
            </div>
        </section>
    );
};

export default PreLoader;