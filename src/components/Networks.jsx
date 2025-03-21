import jackal from '../assets/jackal.svg';
// import chihuahua from '../assets/chihuahua.svg';
import evmos from '../assets/evmos.svg';
// import firmachain from '../assets/firmachain.svg';
import juno from '../assets/juno.svg';
import atomone from '../assets/atomone_.png';
// import ki from '../assets/ki.svg';
// import nois from '../assets/nois.svg';
// import omniflix from '../assets/omniflix.svg';
// import stargaze from '../assets/stargaze.svg';
import passage from '../assets/passage_logo.svg';
import { useRef, useEffect } from 'react';
import {gsap, Power1} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Power1);

let cards = [
    {
        name: 'Passage',
        image: passage,
        description: 'Making virtual more human. World-class virtual experiences on any device—No downloads, no apps, no compromises.'
    },
    {
        name: 'Jackal',
        image: jackal,
        description: 'Jackal is a blockchain that delivers decentralized data storage to individuals, businesses, and other blockchains.'
    },
    {
        name: 'AtomOne',
        image: atomone,
        description: 'AtomOne is a community-driven, constitutionally governed blockchain designed to prioritize security, decentralization, and innovation.'
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
    // {
    //     name: 'Stargaze',
    //     image: stargaze,
    //     description: 'The go-to NFT platform in the Cosmos. Open, Permissionless and the home of Bad Kids the world over.'
    // },
    // {
    //     name: 'Omniflixhub',
    //     image: omniflix,
    //     description: 'Mint, manage & distribute media assets, across multiple chains powered by NFTs, with extensible rights for fractionalization of ownership and increased distribution.'
    // },
    // {
    //     name: 'Firmachain',
    //     image: firmachain,
    //     description: 'A multipurpose cosmos-sdk smart-contract enabled blockchain. Firmachain is targeted towards businesses wanting to build blockchain based products.'
    // },
    // {
    //     name: 'Ki Chain',
    //     image: ki,
    //     description: 'Ki aims to bridge DeFi and CeFi with its Klub investor platform.'
    // },
    // {
    //     name: 'Chihuahua',
    //     image: chihuahua,
    //     description: 'Chihuahua is the first interoperable layer-1 meme coin in the Cosmos, and supercharged with smart-contracts.'
    // },
    // {
    //     name: 'Nois',
    //     image: nois,
    //     description: 'Nois protocol is a public good chain that provides reliable randomness to blockchain developers, derived from the drand beacon provided by the league of entropy.'
    // },
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
            <h2 className="font-bold text-4xl md:text-4xl lg:text-6xl text-[#3c2848] text-center tracking-wide uppercase">Our Networks</h2>
            {/*network cards container*/}
            <div className="w-full py-10 px-5 flex flex-wrap items-start justify-evenly gap-5">
                {/*----------network cards--------*/}
                {
                    cards.map((card, index) => (
                        <div className={`bg-[#3c2848] rounded-md text-white flex flex-col items-start justify-around p-3 w-[80%] md:max-w-[30vw] lg:max-w-[20vw] relative ${index != 0 && index != 1 ? "before:absolute before:top-0 before:left-0 before:z-20 before:h-full before:w-full before:bg-black/70 before:rounded-md" : "blur-0"}`} key={index} ref={el => netCard.current[index] = el}>
                            <h2 className={`${index != 0 && index != 1 ? "text-xl text-center text-white opacity-100 z-20 font-bold mx-auto absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] animate-pulse" : "opacity-0"}`}>COMING SOON</h2>
                            <img src={card.image} alt={`${card.name} logo`} className={`w-[10vw] ${index != 0 && index != 1 && index != 2 ? "blur-lg" : "blur-0"}`} />
                            <div className={`p-2 ${index != 0 && index != 1 ? "blur-lg" : "blur-0"}`}>
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