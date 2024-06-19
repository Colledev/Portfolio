import { motion } from "framer-motion";

const Photo = () => {
    return (
        <div className="w-full h-full relative">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 2, duration: 0.4, ease: "easeInOut" },
                }}
            >
                <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] flex items-center justify-center ">
                    <div className="w-[300px] h-[300px] xl:w-[400px] xl:h-[400px] rounded-full overflow-hidden bg-accent-hover border-4 border-accent ">
                        <img
                            src="/Eu.png"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Photo;
