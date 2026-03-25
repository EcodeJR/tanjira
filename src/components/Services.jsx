import { useState } from 'react';
import { MdHub, MdSchool, MdGroups } from 'react-icons/md';

const services = [
  {
    title: 'Blockchain Validation',
    body: 'Secure your network with robust validator nodes, enterprise monitoring, and failover systems that keep operations continuously online.',
    action: 'Explore Tech',
    accent: 'text-[#ff9157] bg-[#ff9157]/12',
    icon: MdHub,
    details: [
      {
        heading: 'Security',
        text: 'Our validation process enhances network security by verifying transactions and preventing malicious activity.',
      },
      {
        heading: 'Consensus Mechanism',
        text: 'We use a Proof of Stake model where validators stake assets to secure the network, validate blocks, and reduce attack risks.',
      },
      {
        heading: 'Infrastructure',
        text: 'Our setup includes robust server distribution, redundancy, and failover pathways to maintain stability.',
      },
      {
        heading: 'Staking Rewards',
        text: 'Delegators can earn rewards by staking their tokens with our validator nodes.',
      },
    ],
  },
  {
    title: 'Education & Onboarding',
    body: 'Comprehensive guides and support workflows to help communities navigate staking, governance, and technical operations with confidence.',
    action: 'View Docs',
    accent: 'text-[#81ecff] bg-[#81ecff]/12',
    icon: MdSchool,
    details: [
      {
        heading: 'Tutorials',
        text: 'Step-by-step resources for wallet setup, staking flow, and governance participation.',
      },
      {
        heading: 'Bootcamps',
        text: 'Virtual sessions to teach blockchain fundamentals, consensus models, and operational best practices.',
      },
      {
        heading: 'Expert Guidance',
        text: 'Personalized support for new users navigating technical setup and network participation.',
      },
    ],
  },
  {
    title: 'Community Engagement',
    body: 'Sustainable protocol growth through active governance participation, proposal support, and transparent communication.',
    action: 'Join DAO',
    accent: 'text-[#aa8aff] bg-[#aa8aff]/12',
    icon: MdGroups,
    details: [
      {
        heading: 'Forums and Chats',
        text: 'Community channels for discussion, insights sharing, and rapid support.',
      },
      {
        heading: 'Governance Participation',
        text: 'We encourage proposal review and voting to strengthen ownership and long-term ecosystem health.',
      },
    ],
  },
];

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  const openDetails = (service) => setActiveService(service);
  const closeDetails = () => setActiveService(null);

  return (
    <>
      <section id='services' className='bg-[#12121e] px-4 py-24 md:px-8'>
        <div className='mx-auto w-full max-w-7xl'>
          <div className='mb-14 space-y-3'>
            <h2 className='font-label text-xs uppercase tracking-[0.22em] text-[#81ecff]'>The Ecosystem</h2>
            <h3 className='font-headline text-4xl font-bold tracking-tight text-[#e9e6f7] md:text-5xl'>Technical Excellence</h3>
          </div>

          <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
            {services.map((service) => (
              (() => {
                const Icon = service.icon;

                return (
              <article
                key={service.title}
                className='flex h-full flex-col rounded-2xl border border-white/5 bg-[#1e1e2d]/65 p-8 backdrop-blur-2xl transition-all hover:-translate-y-1 hover:border-white/20'
              >
                <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg font-headline text-xl font-bold ${service.accent}`}>
                  <Icon className='text-2xl' />
                </div>
                <h4 className='font-headline text-2xl font-bold text-[#e9e6f7]'>{service.title}</h4>
                <p className='mt-4 flex-1 text-sm leading-relaxed text-[#aba9b9]'>{service.body}</p>
                <button
                  type='button'
                  onClick={() => openDetails(service)}
                  className='mt-7 inline-flex w-fit font-label text-[11px] uppercase tracking-[0.18em] text-[#81ecff] transition-opacity hover:opacity-80'
                >
                  {service.action} →
                </button>
              </article>
                );
              })()
            ))}
          </div>
        </div>
      </section>

      {activeService && (
        <div className='fixed inset-0 z-[70] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm' onClick={closeDetails}>
          <div
            className='w-full max-w-2xl rounded-2xl border border-white/10 bg-[#1e1e2d] p-6 md:p-8'
            onClick={(event) => event.stopPropagation()}
          >
            <div className='mb-5 flex items-start justify-between gap-4'>
              <div>
                <h4 className='font-headline text-2xl font-bold text-[#e9e6f7]'>{activeService.title}</h4>
                <p className='mt-2 text-sm text-[#aba9b9]'>Detailed information from the original dropdown section.</p>
              </div>
              <button
                type='button'
                onClick={closeDetails}
                className='rounded-md border border-white/15 px-3 py-1.5 font-headline text-xs uppercase tracking-wider text-[#e9e6f7] transition-colors hover:bg-white/10'
              >
                Close
              </button>
            </div>

            <div className='space-y-4'>
              {activeService.details.map((detail) => (
                <div key={detail.heading} className='rounded-xl bg-[#242434] p-4'>
                  <h5 className='font-headline text-base font-semibold text-[#e9e6f7]'>{detail.heading}</h5>
                  <p className='mt-2 text-sm leading-relaxed text-[#aba9b9]'>{detail.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Services;