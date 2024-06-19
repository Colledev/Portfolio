import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const navVariants = {
    hidden: {
        opacity: 0,
        y: -50,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 25,
        },
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 80,
            delay: 0.5,
        },
    },
};

const Transition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={location.pathname}
                variants={navVariants}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="py-8 relative"
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default Transition;
