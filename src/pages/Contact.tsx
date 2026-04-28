import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="mt-2 sm:mt-2 xl:mt-16 mb-16 flex flex-col items-center gap-2 w-full px-4">
      <div className="flex justify-center mb-8 xl:mb-8 text-5xl sm:text-6xl">
        <h1>Contact</h1>
      </div>
      <div className="flex w-full max-w-2xl flex-col items-start gap-4">
        <a
          className="flex w-full items-start gap-3 rounded-xl border border-white/10 bg-[#171a1f] p-3 sm:items-center sm:gap-4 sm:p-4"
          href="https://wa.me/5544998331350"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="shrink-0 rounded-xl bg-[#22252b] p-2.5 sm:p-3">
            <IoLogoWhatsapp className="flex h-8 w-8 items-center justify-center text-accent sm:h-14 sm:w-14" />
          </div>
          <div className="min-w-0 flex-1">
            <h1 className="text-white/80 text-sm">Phone</h1>
            <h1 className="text-base sm:text-xl break-words">
              +55 (44) 99833-1350
            </h1>
          </div>
        </a>
        <a
          className="flex w-full items-start gap-3 rounded-xl border border-white/10 bg-[#171a1f] p-3 sm:items-center sm:gap-4 sm:p-4"
          href="mailto:gabriel.colle.dev@gmail.com"
        >
          <div className="shrink-0 rounded-xl bg-[#22252b] p-2.5 sm:p-3">
            <MdEmail className="flex h-8 w-8 items-center justify-center text-accent sm:h-14 sm:w-14" />
          </div>
          <div className="min-w-0 flex-1">
            <h1 className="text-white/80 text-sm">Email</h1>
            <h1 className="text-base sm:text-xl break-all">
              gabriel.colle.dev@gmail.com
            </h1>
          </div>
        </a>
        <a
          className="flex w-full items-start gap-3 rounded-xl border border-white/10 bg-[#171a1f] p-3 sm:items-center sm:gap-4 sm:p-4"
          href="https://github.com/Colledev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="shrink-0 rounded-xl bg-[#22252b] p-2.5 sm:p-3">
            <FaGithub className="flex h-8 w-8 items-center justify-center text-accent sm:h-14 sm:w-14" />
          </div>
          <div className="min-w-0 flex-1">
            <h1 className="text-white/80 text-sm">Github</h1>
            <h1 className="text-base sm:text-xl break-words">Colledev</h1>
          </div>
        </a>
        <a
          className="flex w-full items-start gap-3 rounded-xl border border-white/10 bg-[#171a1f] p-3 sm:items-center sm:gap-4 sm:p-4"
          href="https://www.linkedin.com/in/gabriel-colle-169134259/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="shrink-0 rounded-xl bg-[#22252b] p-2.5 sm:p-3">
            <FaLinkedin className="flex h-8 w-8 items-center justify-center text-accent sm:h-14 sm:w-14" />
          </div>
          <div className="min-w-0 flex-1">
            <h1 className="text-white/80 text-sm">LinkedIn</h1>
            <h1 className="text-base sm:text-xl break-words">Gabriel Colle</h1>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Contact;
