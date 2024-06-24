import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Project, projectsFullStack, projectsBackend } from "@/data/Projects";
import FullStackProjects from "@/components/FullStackProjects";
import BackendProjects from "@/components/BackendProjects";
import { ScrollArea } from "@/components/ui/scroll-area";

export function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(
        null
    );

    return (
        <div className="relative flex flex-col items-center mb-16">
            <div className="mt-2 sm:mt-2 xl:mt-16">
                <div className="flex justify-center mb-8 xl:mb-4 text-5xl sm:text-6xl">
                    <h1>Projects</h1>
                </div>
            </div>
            <div className="w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 py-8">
                <Carousel opts={{ align: "start" }} className="w-full">
                    <FullStackProjects
                        projectsFullStack={projectsFullStack}
                        setSelectedProject={setSelectedProject}
                    />
                </Carousel>
            </div>
            <div className="w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 py-8">
                <Carousel opts={{ align: "start" }} className="w-full">
                    <BackendProjects
                        projectsBackend={projectsBackend}
                        setSelectedProject={setSelectedProject}
                    />
                </Carousel>
            </div>

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
