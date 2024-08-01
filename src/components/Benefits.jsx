const Benefits = () => {
    return ( 
        <section id="benefits" className="p-5 bg-transparent">
            <h2 className="font-bold text-3xl md:text-4xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 text-center tracking-wide uppercase">Our Benefits</h2>
            {/*cards container*/}
            <div className="w-full h-fit gap-10 flex flex-wrap items-center justify-evenly py-10 px-3 text-white">
                {/*card 1*/}
                <div className="w-[90%] md:max-w-[40vw] lg:w-[20vw] h-fit flex flex-col items-center justify-around bg-white/5 border-white/20 border-[1px] rounded-md p-4">
                    <div className="flex items-center justify-center w-60 h-60 text-4xl py-3">
                        image
                    </div>
                    <div className="flex items-start justify-between flex-col p-2">
                        <h3 className="text-3xl text-orange-600 font-bold">Security</h3>
                        <p className="text-base text-gray-400 text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor pariatur perspiciatis dolore atque cumque ab. At, est doloremque mollitia incidunt omnis blanditiis. Molestias, illum quaerat minima doloremque blanditiis molestiae minus.</p>
                    </div>
                </div>

                {/*card 2*/}
                <div className="w-[90%] md:max-w-[40vw] lg:w-[20vw] h-fit flex flex-col items-center justify-around bg-white/5 border-white/20 border-[1px] rounded-md p-4">
                    <div className="flex items-center justify-center w-60 h-60 text-4xl py-3">
                        image
                    </div>
                    <div className="flex items-start justify-between flex-col p-2">
                        <h3 className="text-3xl text-orange-600 font-bold">Reliability</h3>
                        <p className="text-base text-gray-400 text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor pariatur perspiciatis dolore atque cumque ab. At, est doloremque mollitia incidunt omnis blanditiis. Molestias, illum quaerat minima doloremque blanditiis molestiae minus.</p>
                    </div>
                </div>

                {/*card 3*/}
                <div className="w-[90%] md:max-w-[40vw] lg:w-[20vw] h-fit flex flex-col items-center justify-around bg-white/5 border-white/20 border-[1px] rounded-md p-4">
                    <div className="flex items-center justify-center w-60 h-60 text-4xl py-3">
                        image
                    </div>
                    <div className="flex items-start justify-between flex-col p-2">
                        <h3 className="text-3xl text-orange-600 font-bold">Trustworthy</h3>
                        <p className="text-base text-gray-400 text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor pariatur perspiciatis dolore atque cumque ab. At, est doloremque mollitia incidunt omnis blanditiis. Molestias, illum quaerat minima doloremque blanditiis molestiae minus.</p>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Benefits;