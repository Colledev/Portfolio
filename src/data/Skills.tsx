import React from "react";
import {
    FaNodeJs,
    FaJava,
    FaReact,
    FaCss3Alt,
    FaDocker,
    FaGithub,
    FaHtml5,
    FaLinux,
    FaWindows,
} from "react-icons/fa";
import { SiJavascript, SiCsharp } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";

export interface Skill {
    title: string;
    Icon: React.ElementType;
}

export const skills: Skill[] = [
    {
        title: "JavaScript",
        Icon: SiJavascript,
    },
    {
        title: "Node",
        Icon: FaNodeJs,
    },
    {
        title: "React",
        Icon: FaReact,
    },
    {
        title: "Docker",
        Icon: FaDocker,
    },
    {
        title: "Java",
        Icon: FaJava,
    },
    {
        title: "C#",
        Icon: SiCsharp,
    },
    {
        title: "Tailwind",
        Icon: RiTailwindCssFill,
    },
    {
        title: "Git",
        Icon: FaGitAlt,
    },
    {
        title: "Github",
        Icon: FaGithub,
    },
    {
        title: "HTML",
        Icon: FaHtml5,
    },
    {
        title: "CSS",
        Icon: FaCss3Alt,
    },
    {
        title: "Linux",
        Icon: FaLinux,
    },
    {
        title: "Windows",
        Icon: FaWindows,
    },
];
