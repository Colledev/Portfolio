import { Card, CardContent } from "@/components/ui/card";
import { CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Project } from "@/data/Projects";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const FullStackProjects = ({
  projectsFullStack,
  setSelectedProject,
}: {
  projectsFullStack: Project[];
  setSelectedProject: (project: Project) => void;
}) => (
  <div>
    <div className="flex justify-center mb-6 xl:mb-12 text-lg sm:text-3xl font-bold">
      <h1>Projects FullStack</h1>
    </div>
    <CarouselContent>
      {projectsFullStack.map((project, index) => (
        <CarouselItem key={index} className="md:basis-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: index * 0.08 }}
            whileHover={{ y: -6 }}
            className="h-full"
          >
            <Card
              role="button"
              tabIndex={0}
              onClick={() => setSelectedProject(project)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedProject(project);
                }
              }}
              className="group cursor-pointer bg-[#171a1f] rounded-xl border border-white/10 flex flex-col flex-wrap overflow-hidden transition-all duration-300 hover:border-white/30 hover:shadow-[0_10px_28px_rgba(0,0,0,0.35)]"
            >
              <div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full rounded-t-xl object-cover object-center h-[200px] xl:h-[250px] transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <CardContent className="flex flex-col justify-between flex-grow p-5 sm:p-6 min-h-[240px] lg:min-h-[300px]">
                <div>
                  <span className="text-2xl xl:text-3xl font-semibold mb-2 text-white">
                    {project.title}
                  </span>
                </div>
                <div className="mb-4 mt-2 flex-grow">
                  <p className="text-xs xl:text-sm text-white/80 overflow-hidden">
                    {project.description}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-8 gap-4 flex-wrap">
                  <p className="text-xs xl:text-sm text-white/80">
                    {project.status}
                  </p>
                  <div className="flex items-center justify-end gap-2 xl:gap-4">
                    <a
                      href={project.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaGithub
                        size={32}
                        className="w-10 h-10 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                      />
                    </a>
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                    >
                      <span>More Info</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </CarouselItem>
      ))}
    </CarouselContent>
  </div>
);

export default FullStackProjects;
