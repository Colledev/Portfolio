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
                <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] flex items-center justify-center absolute">
                    <div className="w-[200px] h-[250px] xl:w-[350px] xl:h-[420px] rounded-full overflow-hidden mb-16 mr-4 xl:mb-24 xl:mr-4">
                        <img
                            src="/Eu.png"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
            </motion.div>

            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                fill="transparent"
                viewBox="0 0 506 605"
                className="w-[300px] xl:w-[498px] h-[300px] xl:h-[498px]"
            >
                <motion.circle
                    cx="253"
                    cy="253"
                    r="253"
                    stroke="#2c5282"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ strokeDasharray: "24 10 0 0" }}
                    animate={{
                        strokeDasharray: [
                            "15 120 25 25",
                            "16 25 92 72",
                            "4 250 22 22",
                        ],
                        rotate: [120, 360],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                />
            </motion.svg>
        </div>
    );
};

export default Photo;
