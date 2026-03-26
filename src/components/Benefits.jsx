import { FiCheckCircle, FiGlobe, FiShield } from 'react-icons/fi';

const benefits = [
    {
        id: '01',
        title: 'Institutional Security',
        body: 'Hardware security modules and multi sig authorization layers protecting every byte.',
        icon: FiShield,
        tone: 'text-[#ff9157]',
    },
    {
        id: '02',
        title: 'Only the Best Networks',
        body: 'Rigorous due diligence on every protocol we support. Quality over quantity, always.',
        icon: FiGlobe,
        tone: 'text-[#81ecff]',
    },
    {
        id: '03',
        title: 'Slash Protected',
        body: 'Zero-slashing history across all supported networks since inception.',
        icon: FiCheckCircle,
        tone: 'text-[#aa8aff]',
    },
];

const Benefits = () => {
    return (
        <section id='benefits' className='bg-[#0d0d18] px-4 py-24 md:px-8'>
            <div className='mx-auto w-full max-w-7xl'>
                <div className='mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end'>
                    <div className='space-y-3'>
                        <h2 className='font-label text-xs uppercase tracking-[0.22em] text-[#ff9157]'>Why Tanjira</h2>
                        <h3 className='font-headline text-4xl font-bold tracking-tight text-[#e9e6f7] md:text-5xl'>Architected for Resiliency</h3>
                    </div>
                    <p className='max-w-md text-[#aba9b9]'>
                        We do not just run nodes. We build foundational infrastructure that powers next generation decentralized systems.
                    </p>
                </div>

                <div className='space-y-4'>
                    {benefits.map((benefit) => {
                        const Icon = benefit.icon;

                        return (
                        <article
                            key={benefit.id}
                            className='group flex flex-col items-start gap-6 rounded-2xl bg-[#1e1e2d] p-6 transition-all hover:bg-[#242434] md:flex-row md:items-center'
                        >
                            <div className='flex h-12 w-12 items-center justify-center rounded-full bg-[#0d0d18] text-lg'>
                                <Icon className={benefit.tone} />
                            </div>

                            <div className='flex-1'>
                                <h4 className='font-headline text-xl font-bold text-[#e9e6f7]'>{benefit.title}</h4>
                                <p className='mt-1 text-sm text-[#aba9b9]'>{benefit.body}</p>
                            </div>

                            <span className='font-headline text-4xl font-bold text-[#2f2f3e] transition-colors group-hover:text-[#3a3a4f]'>
                                {benefit.id}
                            </span>
                        </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Benefits;