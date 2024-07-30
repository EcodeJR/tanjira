import homesvg from '../assets/head1_svg.svg'
import { FaStarOfLife } from "react-icons/fa";
import Services from '../components/Services';
const Home = () => {
    return ( 
        <section className="w-full h-fit scroll-smooth">
            <div className="w-full h-fit py-10">
                <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-white text-center tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-500 via-[20%] to-white">
                    Web3 Block<br /> <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Validation</span> 
                </h1>
            </div>
            <div className="w-full h-fit flex flex-col-reverse md:flex-wrap md:flex-row items-center justify-around p-3">
                <div className="flex flex-col items-center justify-center">
                    <div className="h-[150px] w-[200px] rounded-md border-[1px] border-white/5 bg-gradient-to-r from-gray-200/5 to-gray-400/20 my-3"></div>
                    <div className="h-[150px] w-[200px] rounded-md border-[1px] border-white/5 bg-gradient-to-r from-gray-400/20 to-gray-200/5"></div>
                </div>
                <div className='flex items-center justify-center my-4 md:my-0'>
                    <img src={homesvg} alt="An NFT statue" className='w-[80%] md:w-[40vw]' />
                </div>
                <div className='flex flex-col items-center justify-center md:w-[20vw]'>
                    <p className='text-sm text-gray-400 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum id corporis, nisi est esse explicabo placeat possimus quisquam asperiores ducimus dicta sapiente earum.</p>
                    <span className='bg-white p-3 rounded-3xl cursor-pointer text-center text-base my-2 text-black'>Get Started</span>
                </div>
            </div>

            <div className="pointer-events-none relative flex gap-10 overflow-hidden bg-white/10 py-2 my-20 h-[10vh] lg:h-[15vh] -skew-y-6">
                <div className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-10 text-white font-bold">
                <h3 className='text-2xl'>BLOCKCHAIN</h3>
                <FaStarOfLife className='font-bold text-3xl text-orange-600 px-3 w-10' />
                <h3 className='text-2xl'>WEB3</h3>
                <FaStarOfLife className='font-bold text-3xl text-orange-600 px-3 w-10' />
                <h3 className='text-2xl'>dPoS</h3>
                <FaStarOfLife className='font-bold text-3xl text-orange-600 px-3 w-10' />
                <h3 className='text-2xl'>VERIFICATION</h3>
                <FaStarOfLife className='font-bold text-3xl text-orange-600 px-3 w-10' />
                <h3 className='text-2xl'>LEARNING</h3>
                <FaStarOfLife className='font-bold text-3xl text-orange-600 px-3 w-10' />
                <h3 className='text-2xl'>EARNING</h3>
                </div>
            </div>
            <Services />
        </section>
     );
}
 
export default Home;