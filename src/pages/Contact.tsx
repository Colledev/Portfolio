import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="mt-2 sm:mt-2 xl:mt-16 mb-16 flex flex-col items-center gap-2 w-full">
            <div className="flex justify-center mb-8 xl:mb-8 text-5xl sm:text-6xl">
                <h1>Contact</h1>
            </div>
            <div className="flex flex-col items-start gap-4">
                <a
                    className="flex gap-4 items-center w-max"
                    href="https://wa.me/5544998331350"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="bg-[#232329] p-3 inline-block rounded-xl">
                        <IoLogoWhatsapp className="w-14 h-14 flex justify-center items-center text-accent text-base" />
                    </div>
                    <div>
                        <h1 className="text-white/80 text-sm">Phone</h1>
                        <h1 className="text-base sm:text-xl">
                            +55 (44) 99833-1350
                        </h1>
                    </div>
                </a>
                <a
                    className="flex gap-4 items-center w-max"
                    href="mailto:gabriel.colle.dev@gmail.com"
                >
                    <div className="bg-[#232329] p-3 inline-block rounded-xl">
                        <MdEmail className="w-14 h-14 flex justify-center items-center text-accent text-base" />
                    </div>
                    <div>
                        <h1 className="text-white/80 text-sm">Email</h1>
                        <h1 className="text-base sm:text-xl">
                            gabriel.colle.dev@gmail.com
                        </h1>
                    </div>
                </a>
                <a
                    className="flex gap-4 items-center w-max"
                    href="https://github.com/Colledev"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="bg-[#232329] p-3 inline-block rounded-xl">
                        <FaGithub className="w-14 h-14 flex justify-center items-center text-accent text-base" />
                    </div>
                    <div>
                        <h1 className="text-white/80 text-sm">Github</h1>
                        <h1 className="text-base sm:text-xl">Colledev</h1>
                    </div>
                </a>
                <a
                    className="flex gap-4 items-center w-max"
                    href="https://www.linkedin.com/in/gabriel-colle-169134259/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="bg-[#232329] p-3 inline-block rounded-xl">
                        <FaLinkedin className="w-14 h-14 flex justify-center items-center text-accent text-base" />
                    </div>
                    <div>
                        <h1 className="text-white/80 text-sm">LinkedIn</h1>
                        <h1 className="text-base sm:text-xl">Gabriel Colle</h1>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Contact;
