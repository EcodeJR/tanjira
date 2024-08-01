const Contact = () => {
    return ( 
        <section id="contact" className="p-5 py-10 bg-transparent flex items-center justify-center">
            <div className="mx-auto text-white w-[80%] md:w-[60vw]">
                <h2 className="font-extrabold text-5xl md:text-7xl lg:text-9xl py-3 tracking-wide">GET <br /> IN <span className="p-2 md:p-3 bg-white text-orange-500 font-extrabold rounded">TOUCH</span></h2>
                <p className="text-gray-400 text-sm md:text-base text-start w-[60vw] md:w-[40vw] py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium eius atque nemo, molestiae sapiente rem.</p>
                <ul className="px-4 py-2 list-disc">
                    <li className="text-gray-100 text-base text-start py-1">Email: <a href="mailto: me@gmail.com">tanjiro@gmail.com</a></li>
                    <li className="text-gray-100 text-base text-start py-1">Email: <a href="call: 07051242451">+2347051242451</a></li>
                </ul>
                <div className="gap-2 flex flex-wrap">
                    <span className="p-3 mx-2 cursor-pointer bg-white text-orange-500 font-bold rounded">F</span>
                    <span className="p-3 mx-2 cursor-pointer bg-white text-orange-500 font-bold rounded">T</span>
                    <span className="p-3 mx-2 cursor-pointer bg-white text-orange-500 font-bold rounded">W</span>
                    <span className="p-3 mx-2 cursor-pointer bg-white text-orange-500 font-bold rounded">D</span>
                    <span className="p-3 mx-2 cursor-pointer bg-white text-orange-500 font-bold rounded">T</span>
                </div>
            </div>
            
        </section>
     );
}
 
export default Contact;