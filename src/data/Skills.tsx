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
import {
  SiJavascript,
  SiSharp,
  SiTypescript,
  SiExpress,
  SiPostgresql,
  SiPrisma,
  SiMongodb,
  SiNestjs,
  SiRedis,
  SiNextdotjs,
} from "react-icons/si";
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
    title: "TypeScript",
    Icon: SiTypescript,
  },
  {
    title: "Node",
    Icon: FaNodeJs,
  },
  {
    title: "Express",
    Icon: SiExpress,
  },
  {
    title: "React",
    Icon: FaReact,
  },
  {
    title: "Next.js",
    Icon: SiNextdotjs,
  },
  {
    title: "Docker",
    Icon: FaDocker,
  },
  {
    title: "PostgreSQL",
    Icon: SiPostgresql,
  },
  {
    title: "Prisma",
    Icon: SiPrisma,
  },
  {
    title: "MongoDB",
    Icon: SiMongodb,
  },
  {
    title: "NestJS",
    Icon: SiNestjs,
  },
  {
    title: "Redis",
    Icon: SiRedis,
  },
  {
    title: "Java",
    Icon: FaJava,
  },
  {
    title: "C#",
    Icon: SiSharp,
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
