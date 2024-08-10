import injective from '../assets/injective.svg';
import chihuahua from '../assets/chihuahua.svg';
import evmos from '../assets/evmos.svg';
import firmachain from '../assets/firmachain.svg';
import juno from '../assets/juno.svg';
import ki from '../assets/ki.svg';
import nois from '../assets/nois.svg';
import omniflix from '../assets/omniflix.svg';
import stargaze from '../assets/stargaze.svg';
import { useRef, useEffect } from 'react';
import {gsap, Power1} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Power1);

let cards = [
    {
        name: 'Injective',
        image: injective,
        description: 'Injective is an open and interoperable blockchain built to for DeFi applications with time to finality nearing 1 second.'
    },
    {
        name: 'Evmos',
        image: evmos,
        description: 'Evmos is bringing the world of Ethereum-based applications and assets to the interoperable networks of the Cosmos ecosystem.'
    },
    {
        name: 'Juno',
        image: juno,
        description: 'The first permissionless smart-contract platform in the Cosmos. Juno is community owned and governed through SubDAO`&apos`s on DAODAO.'
    },
    {
        name: 'Stargaze',
        image: stargaze,
        description: 'The go-to NFT platform in the Cosmos. Open, Permissionless and the home of Bad Kids the world over.'
    },
    {
        name: 'Omniflixhub',
        image: omniflix,
        description: 'Mint, manage & distribute media assets, across multiple chains powered by NFTs, with extensible rights for fractionalization of ownership and increased distribution.'
    },
    {
        name: 'Firmachain',
        image: firmachain,
        description: 'A multipurpose cosmos-sdk smart-contract enabled blockchain. Firmachain is targeted towards businesses wanting to build blockchain based products.'
    },
    {
        name: 'Ki Chain',
        image: ki,
        description: 'Ki aims to bridge DeFi and CeFi with its Klub investor platform.'
    },
    {
        name: 'Chihuahua',
        image: chihuahua,
        description: 'Chihuahua is the first interoperable layer-1 meme coin in the Cosmos, and supercharged with smart-contracts.'
    },
    {
        name: 'Nois',
        image: nois,
        description: 'Nois protocol is a public good chain that provides reliable randomness to blockchain developers, derived from the drand beacon provided by the league of entropy.'
    },
]


const Networks = () => {
    const netCard = useRef([]);

    useEffect(() => {
        netCard.current.forEach((card, index) => {
          // Calculate a unique duration based on the index or any other factor
          const duration = 0.5 + index * 0.2; // Example: increase duration by 0.2s for each card
          
          gsap.fromTo(card, 
            { y: 100, opacity: 0 }, // from values
            { y: 0, opacity: 1, duration: duration, ease: "power1.inOut",
              scrollTrigger: {
                trigger: card, // element to trigger animation
                start: "top 80%",
                end: "bottom top",
                toggleActions: "play pause resume none",
              }
            } // to values
          );
        });
      }, []);
    
    return ( 
        <section id="networks" className="p-5 bg-transparent scroll-smooth">
            <h2 className="font-bold text-3xl md:text-4xl lg:text-6xl text-[#3c2848] text-center tracking-wide uppercase">Our Networks</h2>
            {/*network cards container*/}
            <div className="w-full py-10 px-5 flex flex-wrap items-start justify-evenly gap-5">
                {/*----------network cards--------*/}
                {
                    cards.map((card, index) => (
                        <div className="bg-[#3c2848] rounded-md text-white flex flex-col items-start justify-around p-3 w-[80%] md:max-w-[30vw] lg:max-w-[20vw]" key={index} ref={el => netCard.current[index] = el}>
                            <img src={card.image} alt="A logo of Injective" className='w-[10vw]' />
                            <div className="p-2">
                                <h5 className="text-2xl font-extrabold py-2">{card.name}</h5>
                                <p className="text-base">{card.description}</p>
                            </div>
                        </div>
                    ))
                }
                
            </div>
        </section>
     );
}
 
export default Networks;