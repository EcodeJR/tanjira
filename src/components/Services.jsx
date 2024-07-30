import block from '../assets/block_val.jpeg';
import edu_onboard from '../assets/edu_onboard.jpeg';
import community from '../assets/community.jpeg';
import charity from '../assets/charity.jpeg';
const Services = () => {
    return ( 
        <section id='services' className="p-5 bg-transparent">
            <h2 className="font-bold text-3xl md:text-4xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 text-center tracking-wide uppercase">Our Services</h2>
            <div className="flex flex-col items-center justify-around py-5">

                {/* Blockchain Validation section */}
                <div className='flex flex-col md:flex-row items-center justify-between py-10'>
                    <img className='w-[70%] md:w-[30%] mx-auto' src={block} alt="A representation of blocks on the blockchain" />
                    <div className='text-white w-full md:w-[50%] flex items-start justify-center flex-col my-5 md:my-0 mx-auto'>
                        <h3 className="text-3xl md:text-3xl lg:text-5xl font-bold text-center md:text-start mx-auto md:mx-0">Blockchain <br /> Validation</h3>
                        <details className='w-[90vw] md:w-[40vw] h-fit bg-white/10 p-3 my-2'>
                            <summary className='text-xl font-bold'>More Information</summary>
                            <p className='pl-5 text-base text-gray-400'>This is the additional content that can be toggled.</p>
                        </details>
                        <details className='w-[90vw] md:w-[40vw] h-fit bg-white/10 p-3 my-2'>
                            <summary className='text-xl font-bold'>More Information</summary>
                            <p className='pl-5 text-base text-gray-400'>This is the additional content that can be toggled.</p>
                        </details>
                        <details className='w-[90vw] md:w-[40vw] h-fit bg-white/10 p-3 my-2'>
                            <summary className='text-xl font-bold'>More Information</summary>
                            <p className='pl-5 text-base text-gray-400'>This is the additional content that can be toggled.</p>
                        </details>
                    </div>
                </div>

                {/* Education and Onboarding section */}
                <div className='flex flex-col-reverse md:flex-row items-center justify-between py-10'>
                    
                    <div className='text-white w-full md:w-[50%] flex items-start justify-center flex-col my-5 md:my-0 mx-auto'>
                        <h3 className="text-3xl md:text-3xl lg:text-5xl font-bold text-center md:text-start mx-auto md:mx-0">Education <br /> & Onboarding</h3>
                        <details className='w-[90vw] md:w-[40vw] h-fit bg-white/10 p-3 my-2'>
                            <summary className='text-xl font-bold'>More Information</summary>
                            <p className='pl-5 text-base text-gray-400'>This is the additional content that can be toggled.</p>
                        </details>
                        <details className='w-[90vw] md:w-[40vw] h-fit bg-white/10 p-3 my-2'>
                            <summary className='text-xl font-bold'>More Information</summary>
                            <p className='pl-5 text-base text-gray-400'>This is the additional content that can be toggled.</p>
                        </details>
                        <details className='w-[90vw] md:w-[40vw] h-fit bg-white/10 p-3 my-2'>
                            <summary className='text-xl font-bold'>More Information</summary>
                            <p className='pl-5 text-base text-gray-400'>This is the additional content that can be toggled.</p>
                        </details>
                    </div>

                    <img className='w-[70%] md:w-[30%] mx-auto' src={edu_onboard} alt="A representation of blockchain education." />
                </div>


                {/* Community section */}
                <div className='flex flex-col md:flex-row items-center justify-between py-10'>
                    <img className='w-[70%] md:w-[30%] mx-auto' src={community} alt="A representation of blockchain education." />

                    <div className='text-white w-full md:w-[50%] flex items-start justify-center flex-col my-5 md:my-0 mx-auto'>
                        <h3 className="text-3xl md:text-3xl lg:text-5xl font-bold text-center md:text-start mx-auto md:mx-0">Community</h3>
                        <details className='w-[90vw] md:w-[40vw] h-fit bg-white/10 p-3 my-2'>
                            <summary className='text-xl font-bold'>More Information</summary>
                            <p className='pl-5 text-base text-gray-400'>This is the additional content that can be toggled.</p>
                        </details>
                        <details className='w-[90vw] md:w-[40vw] h-fit bg-white/10 p-3 my-2'>
                            <summary className='text-xl font-bold'>More Information</summary>
                            <p className='pl-5 text-base text-gray-400'>This is the additional content that can be toggled.</p>
                        </details>
                        <details className='w-[90vw] md:w-[40vw] h-fit bg-white/10 p-3 my-2'>
                            <summary className='text-xl font-bold'>More Information</summary>
                            <p className='pl-5 text-base text-gray-400'>This is the additional content that can be toggled.</p>
                        </details>
                    </div>
                </div>


                {/* Charity section */}
                <div className='flex flex-col-reverse md:flex-row items-center justify-between py-10'>

                    <div className='text-white w-full md:w-[50%] flex items-start justify-center flex-col my-5 md:my-0 mx-auto'>
                        <h3 className="text-3xl md:text-3xl lg:text-5xl font-bold text-center md:text-start mx-auto md:mx-0">Charity</h3>
                        <details className='w-[90vw] md:w-[40vw] h-fit bg-white/10 p-3 my-2'>
                            <summary className='text-xl font-bold'>More Information</summary>
                            <p className='pl-5 text-base text-gray-400'>This is the additional content that can be toggled.</p>
                        </details>
                        <details className='w-[90vw] md:w-[40vw] h-fit bg-white/10 p-3 my-2'>
                            <summary className='text-xl font-bold'>More Information</summary>
                            <p className='pl-5 text-base text-gray-400'>This is the additional content that can be toggled.</p>
                        </details>
                        <details className='w-[90vw] md:w-[40vw] h-fit bg-white/10 p-3 my-2'>
                            <summary className='text-xl font-bold'>More Information</summary>
                            <p className='pl-5 text-base text-gray-400'>This is the additional content that can be toggled.</p>
                        </details>
                    </div>

                    <img className='w-[70%] md:w-[40%] mx-auto' src={charity} alt="A representation of blockchain education." />
                </div>



            </div>
        </section>
     );
}
 
export default Services;