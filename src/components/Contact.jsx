import { FaXTwitter } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
const socials = [
    {
    icon: <FaXTwitter className="text-xl" />,
        link: 'https://twitter.com/Tanjirapr'
    },
    {
    icon: <FaTelegram className="text-xl" />,
        link: 'https://t.me/tanjira_validator'
    },
]


const Contact = () => {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#0d0d18] px-4 py-24 md:px-8">
      <div className="mx-auto w-full max-w-5xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/5 bg-[#1e1e2d]/70 p-8 text-center backdrop-blur-2xl md:p-14">
          <div className="absolute -left-12 -top-14 h-44 w-44 rounded-full bg-[#ff9157]/15 blur-[70px]" />
          <div className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-[#81ecff]/10 blur-[90px]" />

          <h3 className="relative font-headline text-4xl font-bold tracking-tight text-[#e9e6f7] md:text-5xl">Ready to secure the future?</h3>
          <p className="relative mx-auto mt-5 max-w-2xl text-[#aba9b9]">
            Partner with us for institutional validation services or custom network infrastructure.
          </p>

          <div className="relative mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:tanjiravalidator@gmail.com"
              className="inline-flex w-full items-center justify-center rounded-md bg-[#ff9157] px-8 py-3 font-headline text-sm font-bold uppercase tracking-wide text-[#260f00] transition-all hover:shadow-[0_0_24px_rgba(255,145,87,0.35)] sm:w-auto"
            >
              Get in Touch
            </a>
            <a
              href="mailto:tanjiravalidator@gmail.com"
              className="inline-flex w-full items-center justify-center rounded-md border border-white/20 px-8 py-3 font-headline text-sm font-bold text-[#e9e6f7] transition-all hover:bg-white/5 sm:w-auto"
            >
              tanjiravalidator@gmail.com
            </a>
          </div>

          <div className="relative mt-8 flex items-center justify-center gap-3">
            {socials.map((social, index) => (
              <a
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#0d0d18]/70 text-[#e9e6f7] transition-all hover:border-[#81ecff]/50 hover:text-[#81ecff]"
                href={social.link}
                key={index}
                target="_blank"
                rel="noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
 
export default Contact;