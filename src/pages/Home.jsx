import logo from '../assets/tanjira_logo.svg';
import Services from '../components/Services';
import Benefits from '../components/Benefits';
import Networks from '../components/Networks';
import Contact from '../components/Contact';

const templateHeroImage = 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3q2rCe-Mm9tvs4-ulirGi3QoYkVY5fZJUkRPcbjWb4pRvpeH9xhHxpjlP7fMm8xmiP82h43r84XdcR5syvi1GtkMo_-HoA7Lp2MZhSbTLq1Um_QYTzCgevQPOzOVxDvgFOX8Z5NzE8v0c0wcV8ceYGJTCT1J-o4_Gx1a5M1fr-3eQDif83blysOFrVg4GVeY3ki2R5c7dAGJOt3w-ayp1dMdQfWoPnZQ3ZT-AJl-4qHvP99MIXy8MyZQlUL5d33jMfEUFOm5mMQ';

const Home = () => {
  return (
    <section className='overflow-x-hidden'>
      <header id='home' className='relative min-h-screen px-4 pb-20 pt-28 md:px-8'>
        <div className='mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2'>
          <div className='space-y-7'>
            <div className='inline-flex rounded-full border border-white/15 bg-[#1e1e2d]/45 px-4 py-1.5 backdrop-blur-xl'>
              <span className='font-label text-[11px] uppercase tracking-[0.2em] text-[#81ecff]'>Validator Node Operations</span>
            </div>

            <h1 className='font-headline text-5xl font-bold leading-[0.95] tracking-[-0.03em] text-[#e9e6f7] md:text-7xl lg:text-8xl'>
              Earn
              <br />
              <span className='bg-gradient-to-r from-[#ff9157] to-[#aa8aff] bg-clip-text text-transparent'>Staking rewards</span>
            </h1>

            <p className='max-w-xl text-lg leading-relaxed text-[#aba9b9] md:text-xl'>
              Through non-custodial staking and Web3 infrastructure.
            </p>

            <div className='flex flex-wrap gap-4 pt-2'>
              <a
                href='#contact'
                className='rounded-md bg-[#ff9157] px-8 py-3.5 font-headline text-sm font-bold uppercase tracking-wide text-[#280f00] transition-all hover:shadow-[0_0_28px_rgba(255,145,87,0.35)]'
              >
                Get Started
              </a>
              <a
                href='#services'
                className='rounded-md border border-[#81ecff]/70 px-8 py-3.5 font-headline text-sm font-bold uppercase tracking-wide text-[#81ecff] transition-all hover:bg-[#81ecff]/10'
              >
                Learn More
              </a>
            </div>
          </div>

          <div className='relative mx-auto flex h-[340px] w-[320px] items-center justify-center md:h-[520px] md:w-[520px]'>
            <div className='absolute inset-12 rounded-[2rem] bg-[#81ecff]/10 blur-[70px]' />
            <div className='absolute inset-6 rotate-12 overflow-hidden rounded-[2rem] border border-white/10 bg-[#1e1e2d]/40 backdrop-blur-2xl'>
              <img
                src={templateHeroImage}
                alt='Template hero architecture'
                className='h-full w-full object-cover opacity-60 mix-blend-screen'
              />
            </div>
            <div className='absolute inset-6 -rotate-6 rounded-[2rem] border border-white/5 bg-[#12121e]/70' />
            <div className='relative z-10 flex h-36 w-36 items-center justify-center rounded-3xl bg-[#0d0d18]/70 backdrop-blur-md md:h-48 md:w-48'>
              <img src={logo} alt='Tanjira emblem' className='h-20 w-20 md:h-28 md:w-28' />
            </div>
          </div>
        </div>

        <div className='absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2'>
          <span className='font-label text-[10px] uppercase tracking-[0.25em] text-[#aba9b9]'>Scroll to Explore</span>
          <div className='h-12 w-px bg-gradient-to-b from-[#ff9157] to-transparent' />
        </div>
      </header>

      <Services />
      <Benefits />
      <Networks />
      <Contact />

      <footer className='bg-[#12121e]'>
        <div className='mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-8 px-4 py-14 md:flex-row md:px-8'>
          <div className='space-y-3 text-center md:text-left'>
            <div className='flex items-center justify-center gap-2 md:justify-start'>
              <img src={logo} alt='Tanjira logo' className='h-9 w-9' />
              <h3 className='font-headline text-xl font-bold'>Tanjira</h3>
            </div>
            <p className='max-w-sm text-sm text-[#aba9b9]'>© 2026 Tanjira.</p>
          </div>

          <div className='flex flex-wrap items-center justify-center gap-6'>
            <a href='#' className='font-label text-[11px] uppercase tracking-[0.16em] text-[#aba9b9] transition-colors hover:text-[#ff9157]'>Privacy Policy</a>
            <a href='#' className='font-label text-[11px] uppercase tracking-[0.16em] text-[#aba9b9] transition-colors hover:text-[#ff9157]'>Terms of Service</a>
            <a href='#' className='font-label text-[11px] uppercase tracking-[0.16em] text-[#aba9b9] transition-colors hover:text-[#ff9157]'>Docs</a>
            <a href='#' className='font-label text-[11px] uppercase tracking-[0.16em] text-[#aba9b9] transition-colors hover:text-[#ff9157]'>Status</a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Home;