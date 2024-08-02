import { MdMarkEmailRead } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
const Contact = () => {
    return ( 
        <section id="contact" className="p-5 py-10 bg-transparent flex items-center justify-center scroll-smooth">
            <div className="mx-auto text-[#3c2848] w-[80%] md:w-[60vw]">
                <h2 className="font-extrabold text-5xl md:text-7xl lg:text-9xl py-3 tracking-wide">GET <br /> IN <span className="px-2 py-0 md:px-2 md:py-0 bg-orange-500 text-white font-extrabold rounded">TOUCH</span> WITH US</h2>
                <p className="text-[#3c2848] text-sm md:text-base text-start w-[60vw] md:w-[40vw] py-4">Tanjira are highly active in the communities we operate in. We are available 24/7 and provide free support helping community in ofﬁcial chats</p>
                <ul className="px-4 py-2 list-disc my-4">
                    <li className="text-[#3c2848] text-base text-start py-1 flex items-center justify-start"><MdMarkEmailRead className="text-2xl" /> <a href="mailto: me@gmail.com" className="px-2 text-base md:text-xl font-bold uppercase">tanjiro@gmail.com</a></li>
                    <li className="text-[#3c2848] text-base text-start py-1 flex items-center justify-start"><FaPhoneSquareAlt className="text-2xl" /> <a href="call: 07051242451" className="px-2 text-base md:text-xl font-bold uppercase">+2347051242451</a></li>
                </ul>
                <div className="gap-2 flex flex-wrap">
                    <span className="mx-2 cursor-pointer font-bold">< FaFacebook className="text-3xl" /></span>
                    <span className="mx-2 cursor-pointer font-bold">< FaXTwitter className="text-3xl"  /></span>
                    <span className="mx-2 cursor-pointer font-bold">< FaSquareWhatsapp className="text-3xl"  /></span>
                    <span className="mx-2 cursor-pointer font-bold">< FaDiscord className="text-3xl"  /></span>
                    <span className="mx-2 cursor-pointer font-bold">< FaTelegram className="text-3xl"  /></span>
                </div>
            </div>
            
        </section>
     );
}
 
export default Contact;