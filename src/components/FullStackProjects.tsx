import { Card, CardContent } from "@/components/ui/card";
import { CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Project } from "@/data/Projects";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const FullStackProjects = ({
    projectsFullStack,
    setSelectedProject,
}: {
    projectsFullStack: Project[];
    setSelectedProject: (project: Project) => void;
}) => (
    <div>
        <div className="flex justify-center mb-6 xl:mb-12 text-lg sm:text-3xl">
            <h1>Projects FullStack</h1>
        </div>
        <CarouselContent>
            {projectsFullStack.map((project, index) => (
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
                                                setSelectedProject(project)
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
    </div>
);

export default FullStackProjects;
