import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

interface SocialProps {
    iconStyles?: string; // Definindo iconStyles como uma propriedade opcional
}

const Social: React.FC<SocialProps> = ({ iconStyles }) => {
    return (
        <div className="flex gap-8">
            <Link to="https://github.com/Colledev" className={iconStyles}>
                <FaGithub size={32} />
            </Link>
            <Link
                to="https://www.linkedin.com/in/gabriel-colle-169134259/"
                className={iconStyles}
            >
                <FaLinkedinIn size={32} />
            </Link>
        </div>
    );
};

export default Social;
