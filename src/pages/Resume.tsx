import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { experiences } from "@/data/Experience";
import { educations } from "@/data/Education";
import { skills } from "@/data/Skills";

const Resume = () => {
    return (
        <div className="mt-16 lg:mt-24">
            <motion.div>
                <div className="container mx-auto">
                    <Tabs
                        defaultValue="experience"
                        className="flex flex-col xl:flex-row gap-[60px]"
                    >
                        <TabsList className="flex flex-col w-full maw-w-[380px] mx-auto xl:mx-0 gap-6 text-xl">
                            <TabsTrigger value="experience">
                                Experience
                            </TabsTrigger>
                            <TabsTrigger value="education">
                                Education
                            </TabsTrigger>
                            <TabsTrigger value="skills">Skills</TabsTrigger>
                            <TabsTrigger value="aboutme">About me</TabsTrigger>
                        </TabsList>
                        <TabsContent value="experience" className="w-full">
                            <ScrollArea className="h-[350px]">
                                <div className="flex flex-col gap-7 text-center xl:text-left">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
                                        {experiences.map(
                                            (experience, index) => (
                                                <div
                                                    key={index}
                                                    className="bg-[#232329] h-[150px] py-6 px-10 rounded-xl flex flex-col justify-center gap-1"
                                                >
                                                    <div className="flex flex-col items-center xl:items-start">
                                                        <span className="text-xs text-center xl:text-left">
                                                            {experience.period}
                                                        </span>
                                                        <h3 className="text-lg font-semibold text-center xl:text-left">
                                                            {experience.title}
                                                        </h3>
                                                        <p className="text-white/80 text-xs mt-2 text-center xl:text-left">
                                                            {
                                                                experience.location
                                                            }
                                                        </p>
                                                    </div>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                            </ScrollArea>
                        </TabsContent>
                        <TabsContent value="education" className="w-full">
                            <ScrollArea className="h-[370px]">
                                <div className="flex flex-col gap-7 text-center xl:text-left">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
                                        {educations.map((education, index) => (
                                            <div
                                                key={index}
                                                className="bg-[#232329] h-[150px] py-6 px-10 rounded-xl flex flex-col justify-center gap-1"
                                            >
                                                <div className="flex flex-col items-center xl:items-start">
                                                    <span className="text-xs text-center xl:text-left">
                                                        {education.period}
                                                    </span>
                                                    <h3 className="text-lg font-semibold text-center xl:text-left">
                                                        {education.title}
                                                    </h3>
                                                    <p className="text-white/80 text-xs mt-2 text-center xl:text-left">
                                                        {education.location}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </ScrollArea>
                        </TabsContent>
                        <TabsContent value="skills" className="w-full">
                            <ScrollArea className="h-[370px]">
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 text-center xl:text-left justify-items-center">
                                    {skills.map((skill, index) => (
                                        <div
                                            key={index}
                                            className="bg-[#232329] h-[150px] w-[150px] py-6 px-10 rounded-xl flex flex-col justify-center items-center gap-1"
                                        >
                                            <div className="flex flex-col items-center">
                                                <skill.Icon className="text-4xl mb-2 text-white" />
                                                <h3 className="text-lg font-semibold text-white">
                                                    {skill.title}
                                                </h3>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </ScrollArea>
                        </TabsContent>
                        <TabsContent value="aboutme" className="w-full">
                            <ScrollArea className="h-[370px]">
                                <div className="bg-[#232329] h-full py-10 px-10 rounded-xl flex flex-col justify-center items-center gap-4 text-white">
                                    <div className="flex flex-col gap-4 ">
                                        <p>
                                            <strong>Name:</strong> Gabriel Colle
                                        </p>
                                        <p>
                                            <strong>Phone:</strong> +55 (44)
                                            99833-1350
                                        </p>
                                        <p>
                                            <strong>Email:</strong>{" "}
                                            gabriel.colle.dev@gmail.com
                                        </p>
                                        <p>
                                            <strong>Nationality:</strong>{" "}
                                            Brazilian
                                        </p>
                                        <p>
                                            <strong>Languages:</strong> English,
                                            Portuguese, Deutsch
                                        </p>
                                        <p>
                                            <strong>Job:</strong> Available
                                        </p>
                                    </div>
                                </div>
                            </ScrollArea>
                        </TabsContent>
                    </Tabs>
                </div>
            </motion.div>
        </div>
    );
};

export default Resume;
