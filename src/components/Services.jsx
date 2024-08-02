import block from '../assets/block_val.jpeg';
import edu_onboard from '../assets/edu_onboard.jpeg';
import community from '../assets/community.jpeg';
import charity from '../assets/charity.jpeg';
const Services = () => {
    return ( 
        <section id='services' className="bg-transparent scroll-smooth">
            <h2 className="font-bold text-3xl md:text-4xl lg:text-6xl bg-clip-text text-[#3c2848] text-center tracking-wide uppercase">Our Services</h2>
            <div className="flex flex-col items-center justify-around py-5">

                {/* Blockchain Validation section */}
                <div className='flex flex-col md:flex-row items-center justify-between py-10'>
                    <img className='w-[100%] md:w-[30%] mx-0 md:mx-auto' src={block} alt="A representation of blocks on the blockchain" />
                    <div className='text-[#3c2848] w-full md:w-[50%] flex items-start justify-center flex-col my-5 md:my-0 mx-auto px-5'>
                        <h3 className="text-3xl md:text-3xl lg:text-5xl font-bold text-center md:text-start mx-auto md:mx-0">Blockchain <br /> Validation</h3>
                        <p className='pr-3 text-center md:text-left w-[100%] md:w-[80%] text-base text-gray-600 py-2'>Blockchain validation is the process of ensuring the integrity and security of a blockchain network. As a validator, your commitment is crucial for maintaining the network`&apos`s stability.</p>
                        <details className='w-[90vw] md:w-[40vw] h-fit bg-black/10 p-3 my-2'>
                            <summary className='text-xl font-bold'>Security</summary>
                            <p className='pl-5 text-base text-gray-600'>Emphasize how your validation process enhances the network`&apos`s security by verifying transactions and preventing malicious activity.</p>
                        </details>
                        <details className='w-[90vw] md:w-[40vw] h-fit bg-black/10 p-3 my-2'>
                            <summary className='text-xl font-bold'>Consensus Mechanism</summary>
                            <p className='pl-5 text-base text-gray-600'>Explain the consensus mechanism you use (e.g., proof of stake, proof of work) and how it contributes to network trust.</p>
                        </details>
                        <details className='w-[90vw] md:w-[40vw] h-fit bg-black/10 p-3 my-2'>
                            <summary className='text-xl font-bold'>Infrastructure</summary>
                            <p className='pl-5 text-base text-gray-600'>Highlight your robust infrastructure, including server locations, redundancy, and failover mechanisms.</p>
                        </details>
                        <details className='w-[90vw] md:w-[40vw] h-fit bg-black/10 p-3 my-2'>
                            <summary className='text-xl font-bold'>Staking Rewards</summary>
                            <p className='pl-5 text-base text-gray-600'>Mention the rewards users can earn by staking their tokens with your validator.</p>
                        </details>
                    </div>
                </div>

                {/* Education and Onboarding section */}
                <div className='flex flex-col-reverse md:flex-row items-center justify-between py-10'>
                    
                    <div className='text-[#3c2848] w-full md:w-[50%] flex items-start justify-center flex-col my-5 md:my-0 mx-auto px-5'>
                        <h3 className="text-3xl md:text-3xl lg:text-5xl font-bold text-center md:text-start mx-auto md:mx-0">Education <br /> & Onboarding</h3>
                        <p className='pr-3 text-center md:text-left w-[100%] md:w-[80%] text-base text-gray-600 py-2'>Educating users and providing onboarding resources are essential for a thriving community.</p>
                        <details className='w-[90vw] md:w-[40vw] h-fit bg-black/10 p-3 my-2'>
                            <summary className='text-xl font-bold'>Tutorials</summary>
                            <p className='pl-5 text-base text-gray-600'>Create step-by-step guides on setting up wallets, staking, and participating in governance.</p>
                        </details>
                        <details className='w-[90vw] md:w-[40vw] h-fit bg-black/10 p-3 my-2'>
                            <summary className='text-xl font-bold'>Bootcamps</summary>
                            <p className='pl-5 text-base text-gray-600'>Host virtual bootcamps or workshops where users can learn about blockchain technology, consensus algorithms, and best practices.</p>
                        </details>
                        <details className='w-[90vw] md:w-[40vw] h-fit bg-black/10 p-3 my-2'>
                            <summary className='text-xl font-bold'>Expert Guidance</summary>
                            <p className='pl-5 text-base text-gray-600'>Offer personalized assistance to new users, helping them navigate the complexities of blockchain networks.</p>
                        </details>
                    </div>

                    <img className='w-[100%] md:w-[30%] mx-0 md:mx-auto' src={edu_onboard} alt="A representation of blockchain education." />
                </div>


                {/* Community section */}
                <div className='flex flex-col md:flex-row items-center justify-between py-10'>
                    <img className='w-[100%] md:w-[30%] mx-0 md:mx-auto' src={community} alt="A representation of blockchain education." />

                    <div className='text-[#3c2848] w-full md:w-[50%] flex items-start justify-center flex-col my-5 md:my-0 mx-auto px-5'>
                        <h3 className="text-3xl md:text-3xl lg:text-5xl font-bold text-center md:text-start mx-auto md:mx-0">Community</h3>
                        <p className='pr-3 text-base text-center md:text-left w-[100%] text-gray-600 py-2'>Community Engagement.</p>
                        <details className='w-[90vw] md:w-[40vw] h-fit bg-black/10 p-3 my-2'>
                            <summary className='text-xl font-bold'>Forums and Chats</summary>
                            <p className='pl-5 text-base text-gray-600'>Set up community forums or chat channels where users can discuss blockchain-related topics, share insights, and ask questions.</p>
                        </details>
                        <details className='w-[90vw] md:w-[40vw] h-fit bg-black/10 p-3 my-2'>
                            <summary className='text-xl font-bold'>Governance Participation</summary>
                            <p className='pl-5 text-base text-gray-600'>Encourage users to participate in network governance decisions, reinforcing a sense of ownership.</p>
                        </details>
                    </div>
                </div>


                {/* Charity section */}
                <div className='flex flex-col-reverse md:flex-row items-center justify-between py-10'>

                    <div className='text-[#3c2848] w-full md:w-[50%] flex items-start justify-center flex-col my-5 md:my-0 mx-auto px-5'>
                        <h3 className="text-3xl md:text-3xl lg:text-5xl font-bold text-center md:text-start mx-auto md:mx-0">Charity</h3>
                        <p className='pr-3 text-base text-center md:text-left w-[100%] text-gray-600 py-2'>Charitable Initiatives.</p>
                        <details className='w-[90vw] md:w-[40vw] h-fit bg-black/10 p-3 my-2'>
                            <summary className='text-xl font-bold'>Donate a Portion</summary>
                            <p className='pl-5 text-base text-gray-600'>Allocate a percentage of your validator rewards to charitable causes. Explain which causes you support (e.g., education, environmental conservation).</p>
                        </details>
                        <details className='w-[90vw] md:w-[40vw] h-fit bg-black/10 p-3 my-2'>
                            <summary className='text-xl font-bold'>Transparency</summary>
                            <p className='pl-5 text-base text-gray-600'>Be transparent about your charitable contributions, sharing updates and impact reports.</p>
                        </details>
                    </div>

                    <img className='w-[100%] md:w-[40%] mx-0 md:mx-auto' src={charity} alt="A representation of blockchain education." />
                </div>
            </div>
        </section>
     );
}
 
export default Services;