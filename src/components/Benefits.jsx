import security from '../assets/sec2.png';
import education from '../assets/learn1.png';
import charity from '../assets/comm2.png';
const Benefits = () => {
    return ( 
        <section id="benefits" className="p-5 bg-transparent scroll-smooth">
            <h2 className="font-bold text-3xl md:text-4xl lg:text-6xl text-[#3c2848] text-center tracking-wide uppercase">Our Benefits</h2>
            {/*cards container*/}
            <div className="w-full h-fit gap-10 flex flex-wrap items-center justify-evenly py-10 px-1 text-[#3c2848]">
                {/*card 1*/}
                <div className="w-[90%] md:max-w-[40vw] lg:w-[25vw] h-[80vh] flex flex-col items-center justify-evenly bg-green-500 border-[1px] rounded-md px-4 py-1 overflow-hidden">
                    <div className="flex items-center justify-center py-3">
                        <img src={security} alt="A security shield" className='w-[40vw] lg:w-[30vh]' />
                    </div>
                    <div className="flex items-start justify-between flex-col p-2">
                        <h3 className="text-2xl text-white font-extrabold mb-2">Enhanced Network Security</h3>
                        
                        <ul className="text-justify text-sm list-decimal text-white">
                            <li><p> Our robust validation process ensures the integrity and security of blockchain networks.</p></li>
                            <li><p> By validating transactions and preventing malicious activity, we contribute to a stable and trustworthy ecosystem.</p></li>
                            <li><p> Users can confidently participate, knowing their assets are safeguarded by our commitment to security.</p></li>
                        </ul>
                    </div>
                </div>

                {/*card 2*/}
                <div className="w-[90%] md:max-w-[40vw] lg:w-[25vw] h-[80vh] flex flex-col items-center justify-around bg-yellow-500 border-[1px] rounded-md px-4 py-1 overflow-hidden">
                    <div className="flex items-center justify-center py-3">
                    <img src={education} alt="A book" className='w-[40vw] lg:w-[30vh]' />
                    </div>
                    <div className="flex items-start justify-between flex-col p-2">
                        <h3 className="text-2xl text-white font-extrabold mb-2">Educational Resources & Onboarding</h3>
                        <ul className="text-justify text-sm list-decimal text-white">
                            <li><p> We provide comprehensive tutorials, bootcamps, and expert guidance for users new to blockchain technology.</p></li>
                            <li><p> Whether setting up wallets or understanding consensus mechanisms, our educational content empowers users.</p></li>
                            <li><p> Smooth onboarding ensures a seamless experience for all participants.</p></li>
                        </ul>
                    </div>
                </div>

                {/*card 3*/}
                <div className="w-[90%] md:max-w-[40vw] lg:w-[25vw] h-[80vh] flex flex-col items-center justify-around bg-purple-500 border-[1px] rounded-md px-4 py-1 overflow-hidden">
                    <div className="flex items-center justify-center py-3">
                        <img src={charity} alt="A charity" className='w-[40vw] lg:w-[30vh]' />
                    </div>
                    <div className="flex items-start justify-between flex-col p-2">
                        <h3 className="text-2xl text-white font-extrabold mb-2">Community Engagement & Charitable Impact</h3>
                        <ul className="text-justify list-decimal text-sm text-white">
                            <li><p> Join our active community forums and chats to discuss blockchain topics, share insights, and participate in governance decisions.</p></li>
                            <li><p> As part of our commitment to giving back, a portion of our validator rewards goes to charitable causes.</p></li>
                            <li><p> Transparency in our charitable initiatives reinforces trust and community involvement.</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Benefits;