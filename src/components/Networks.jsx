import injective from '../assets/injective.svg';
import chihuahua from '../assets/chihuahua.svg';
import evmos from '../assets/evmos.svg';
import firmachain from '../assets/firmachain.svg';
import juno from '../assets/juno.svg';
import ki from '../assets/ki.svg';
import nois from '../assets/nois.svg';
import omniflix from '../assets/omniflix.svg';
import stargaze from '../assets/stargaze.svg';
const Networks = () => {
    return ( 
        <section id="networks" className="p-5 bg-transparent scroll-smooth">
            <h2 className="font-bold text-3xl md:text-4xl lg:text-6xl text-[#3c2848] text-center tracking-wide uppercase">Our Networks</h2>
            {/*network cards container*/}
            <div className="w-full py-10 px-5 flex flex-wrap items-start justify-evenly gap-5">
                {/*----------network cards--------*/}
                {/*card 1*/}
                <div className="bg-[#3c2848] rounded-md text-white flex flex-col items-start justify-around p-3 w-[80%] md:max-w-[30vw] lg:max-w-[20vw]">
                    <img src={injective} alt="A logo of Injective" className='w-[10vw]' />
                    <div className="p-2">
                        <h5 className="text-2xl font-extrabold py-2">Injective</h5>
                        <p className="text-base">Injective is an open and interoperable blockchain built to for DeFi applications with time to finality nearing 1 second.</p>
                    </div>
                </div>

                {/*card 2*/}
                <div className="bg-[#3c2848] rounded-md text-white flex flex-col items-start justify-around p-3 w-[80%] md:max-w-[30vw] lg:max-w-[20vw]">
                    <img src={evmos} alt="A logo of Injective" className='w-[10vw]' />
                    <div className="p-2">
                        <h5 className="text-2xl font-extrabold py-2">Evmos</h5>
                        <p className="text-base">Evmos is bringing the world of Ethereum-based applications and assets to the interoperable networks of the Cosmos ecosystem.</p>
                    </div>
                </div>

                {/*card 3*/}
                <div className="bg-[#3c2848] rounded-md text-white flex flex-col items-start justify-around p-3 w-[80%] md:max-w-[30vw] lg:max-w-[20vw]">
                    <img src={juno} alt="A logo of Injective" className='w-[10vw]' />
                    <div className="p-2">
                        <h5 className="text-2xl font-extrabold py-2">Juno</h5>
                        <p className="text-base">The first permissionless smart-contract platform in the Cosmos. Juno is community owned and governed through SubDAO`&apos`s on DAODAO.</p>
                    </div>
                </div>

                {/*card 4*/}
                <div className="bg-[#3c2848] rounded-md text-white flex flex-col items-start justify-around p-3 w-[80%] md:max-w-[30vw] lg:max-w-[20vw]">
                    <img src={stargaze} alt="A logo of Injective" className='w-[10vw]' />
                    <div className="p-2">
                        <h5 className="text-2xl font-extrabold py-2">Stargaze</h5>
                        <p className="text-base">The go-to NFT platform in the Cosmos. Open, Permissionless and the home of Bad Kids the world over.</p>
                    </div>
                </div>

                {/*card 5*/}
                <div className="bg-[#3c2848] rounded-md text-white flex flex-col items-start justify-around p-3 w-[80%] md:max-w-[30vw] lg:max-w-[20vw]">
                    <img src={omniflix} alt="A logo of Injective" className='w-[10vw]' />
                    <div className="p-2">
                        <h5 className="text-2xl font-extrabold py-2">Omniflixhub</h5>
                        <p className="text-base">Mint, manage & distribute media assets, across multiple chains powered by NFTs, with extensible rights for fractionalization of ownership and increased distribution.</p>
                    </div>
                </div>

                {/*card 6*/}
                <div className="bg-[#3c2848] rounded-md text-white flex flex-col items-start justify-around p-3 w-[80%] md:max-w-[30vw] lg:max-w-[20vw]">
                    <img src={firmachain} alt="A logo of Injective" className='w-[10vw]' />
                    <div className="p-2">
                        <h5 className="text-2xl font-extrabold py-2">Firmachain</h5>
                        <p className="text-base">A multipurpose cosmos-sdk smart-contract enabled blockchain. Firmachain is targeted towards businesses wanting to build blockchain based products.</p>
                    </div>
                </div>

                {/*card 7*/}
                <div className="bg-[#3c2848] rounded-md text-white flex flex-col items-start justify-around p-3 w-[80%] md:max-w-[30vw] lg:max-w-[20vw]">
                    <img src={ki} alt="A logo of Injective" className='w-[10vw]' />
                    <div className="p-2">
                        <h5 className="text-2xl font-extrabold py-2">Ki Chain</h5>
                        <p className="text-base">Ki aims to bridge DeFi and CeFi with its Klub investor platform.</p>
                    </div>
                </div>

                {/*card 8*/}
                <div className="bg-[#3c2848] rounded-md text-white flex flex-col items-start justify-around p-3 w-[80%] md:max-w-[30vw] lg:max-w-[20vw]">
                    <img src={chihuahua} alt="A logo of Injective" className='w-[10vw]' />
                    <div className="p-2">
                        <h5 className="text-2xl font-extrabold py-2">Chihuahua</h5>
                        <p className="text-base">Chihuahua is the first interoperable layer-1 meme coin in the Cosmos, and supercharged with smart-contracts.</p>
                    </div>
                </div>

                {/*card 9*/}
                <div className="bg-[#3c2848] rounded-md text-white flex flex-col items-start justify-around p-3 w-[80%] md:max-w-[30vw] lg:max-w-[20vw]">
                    <img src={nois} alt="A logo of Injective" className='w-[10vw]' />
                    <div className="p-2">
                        <h5 className="text-2xl font-extrabold py-2">Nois</h5>
                        <p className="text-base">Nois protocol is a public good chain that provides reliable randomness to blockchain developers, derived from the drand beacon provided by the league of entropy.</p>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Networks;