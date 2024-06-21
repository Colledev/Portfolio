import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Project, projects } from "@/data/Projects";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

export function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(
        null
    );

    return (
        <div className="relative flex justify-center mb-16">
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 py-16"
            >
                <div className="flex justify-center mb-8 xl:mb-20 text-xl sm:text-6xl">
                    <h1>Projects</h1>
                </div>
                <CarouselContent>
                    {projects.map((project, index) => (
                        <CarouselItem key={index} className="md:basis-1/2">
                            <div>
                                <Card className="bg-[#232329] rounded-xl border-none flex flex-col flex-wrap">
                                    <div>
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full rounded-t-xl object-cover object-center h-[200px] xl:h-[250px]"
                                        />
                                    </div>
                                    <CardContent className="flex flex-col justify-between flex-grow p-6 h-[250px] lg:h-[300px] xl:h-[350px]">
                                        <div>
                                            <span className="text-2xl xl:text-4xl font-semibold mb-2 text-white">
                                                {project.title}
                                            </span>
                                        </div>
                                        <div className="mb-4 mt-2 flex-grow">
                                            <p className="text-xs xl:text-sm text-white/80 overflow-hidden">
                                                {project.description}
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-between mt-12">
                                            <p className="text-xs xl:text-sm text-white/80">
                                                {project.status}
                                            </p>
                                            <div className="flex items-center justify-end gap-2 xl:gap-4">
                                                <Link to={project.repository}>
                                                    <FaGithub
                                                        size={32}
                                                        className="w-10 h-10 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                                                    />
                                                </Link>
                                                <Button
                                                    onClick={() =>
                                                        setSelectedProject(
                                                            project
                                                        )
                                                    }
                                                >
                                                    <span>More Info</span>
                                                </Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

            {selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="relative p-8 rounded-lg w-3/4 max-w-4xl">
                        <div className="p-1">
                            <ScrollArea className="h-[700px]">
                                <Card className="bg-white border-none ">
                                    <CardContent className="flex flex-col items-center justify-center p-8">
                                        <img
                                            src={selectedProject.image}
                                            alt={selectedProject.title}
                                            className="mb-4"
                                            style={{
                                                maxWidth: "100%",
                                                height: "auto",
                                            }}
                                        />
                                        <span className="text-2xl font-semibold mb-2">
                                            {selectedProject.title}
                                        </span>
                                        <p className="text-sm text-gray-600 mb-4">
                                            {selectedProject.description}
                                        </p>
                                        <p className="text-lg font-bold  mb-4">
                                            Technologies:
                                        </p>
                                        <p className="text-sm text-gray-600 mb-4">
                                            {selectedProject.technologies}
                                        </p>
                                        <p className="text-lg font-bold mb-4">
                                            Features:
                                        </p>
                                        <p className="text-sm text-gray-600 mb-4">
                                            {selectedProject.moreInfo}
                                        </p>
                                        <div className="flex justify-center mt-4">
                                            <Button
                                                onClick={() =>
                                                    setSelectedProject(null)
                                                }
                                            >
                                                <span>Close</span>
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </ScrollArea>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Projects;
