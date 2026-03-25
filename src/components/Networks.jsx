import { MdRocketLaunch, MdArchitecture, MdAdd } from 'react-icons/md';
import { TbGrain } from 'react-icons/tb';

const cards = [
    {
        name: 'Jackal',
        status: 'Active',
        icon: MdRocketLaunch,
    },
    {
        name: 'Passage',
        status: 'Inactive',
        icon: MdArchitecture,
    },
    {
        name: 'AtomOne',
        status: 'Active',
        icon: TbGrain,
    },
    {
        name: 'More Soon',
        status: 'Developing',
        icon: MdAdd,
    },
];

const Networks = () => {
    return (
        <section id='networks' className='relative overflow-hidden bg-[#12121e] px-4 py-24 md:px-8'>
            <div className='absolute -right-20 top-4 h-72 w-72 rounded-full bg-[#aa8aff]/10 blur-[80px]' />

            <div className='relative mx-auto w-full max-w-7xl'>
                <div className='mb-14 text-center'>
                    <h2 className='font-label text-xs uppercase tracking-[0.22em] text-[#81ecff]'>Integrations</h2>
                    <h3 className='mt-3 font-headline text-4xl font-bold tracking-tight text-[#e9e6f7] md:text-5xl'>Supported Ecosystems</h3>
                </div>

                <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4'>
                    {cards.map((card, index) => (
                        (() => {
                            const Icon = card.icon;

                            return (
                        <article
                            key={card.name}
                            className={`rounded-2xl p-6 text-center transition-all ${
                                index === cards.length - 1
                                    ? 'border border-dashed border-white/20 bg-[#1e1e2d]/45'
                                    : 'border border-transparent bg-[#1e1e2d] hover:-translate-y-1 hover:border-white/15'
                            }`}
                        >
                            <div className='mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-xl bg-[#0d0d18]'>
                                <Icon className='text-3xl text-[#aba9b9]' />
                            </div>
                            <h4 className='font-headline text-lg font-bold text-[#e9e6f7]'>{card.name}</h4>
                            <p className='mt-2 font-label text-[10px] uppercase tracking-[0.18em] text-[#aba9b9]'>{card.status}</p>
                        </article>
                            );
                        })()
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Networks;