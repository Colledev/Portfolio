import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel } from "@/components/ui/carousel";
import { Project, projectsFullStack, projectsBackend } from "@/data/Projects";
import FullStackProjects from "@/components/FullStackProjects";
import BackendProjects from "@/components/BackendProjects";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ExternalLink, X } from "lucide-react";

const getParagraphs = (text: string) =>
  text
    .split("\n\n")
    .map((part) => part.trim())
    .filter(Boolean);

const getFeatureLines = (text: string) =>
  text
    .split("\n")
    .map((line) => line.trim())
    .filter(
      (line) =>
        Boolean(line) &&
        line.toLowerCase() !== "implemented features" &&
        line.toLowerCase() !== "features",
    );

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-1 sm:p-4 lg:p-6"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative flex h-[96vh] w-[98vw] max-w-6xl flex-col overflow-hidden rounded-xl border border-white/10 bg-[#171a1f] shadow-2xl sm:h-[92vh] sm:w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-20 flex items-center justify-between border-b border-white/10 bg-[#171a1f]/95 px-4 py-3 backdrop-blur sm:px-6">
              <h2 className="pr-3 text-base font-semibold text-white sm:text-lg">
                {selectedProject.title}
              </h2>
              <button
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1 text-sm text-white/80 hover:text-white"
                onClick={() => setSelectedProject(null)}
              >
                <X size={16} />
                Close
              </button>
            </div>

            <ScrollArea className="flex-1">
              <Card className="border-none bg-transparent">
                <CardContent className="flex flex-col p-4 sm:p-6 lg:p-8">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="mb-6 h-[220px] w-full rounded-lg border border-white/10 object-cover sm:h-[300px] lg:h-[380px]"
                  />

                  <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                    <span className="text-xl font-semibold sm:text-2xl text-white">
                      {selectedProject.title}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.site && (
                        <a
                          href={selectedProject.site}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-accent/50 px-4 py-2 text-sm text-accent hover:bg-accent hover:text-primary"
                        >
                          Live Project
                          <ExternalLink size={16} />
                        </a>
                      )}
                      <a
                        href={selectedProject.repository}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 hover:border-white/40 hover:text-white"
                      >
                        Repository
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    <section className="rounded-lg border border-white/10 bg-[#1d2128] p-4 lg:col-span-2">
                      <h3 className="mb-2 text-base font-semibold text-white sm:text-lg">
                        Overview
                      </h3>
                      <p className="text-sm leading-7 text-white/80 sm:text-base">
                        {selectedProject.description}
                      </p>
                    </section>

                    <section className="rounded-lg border border-white/10 bg-[#1d2128] p-4">
                      <h3 className="mb-2 text-base font-semibold text-white sm:text-lg">
                        Technologies
                      </h3>
                      <div className="space-y-4">
                        {getParagraphs(selectedProject.technologies).map(
                          (paragraph, index) => (
                            <p
                              key={index}
                              className="text-sm leading-7 text-white/80 sm:text-base"
                            >
                              {paragraph}
                            </p>
                          ),
                        )}
                      </div>
                    </section>

                    <section className="rounded-lg border border-white/10 bg-[#1d2128] p-4">
                      <h3 className="mb-2 text-base font-semibold text-white sm:text-lg">
                        Features
                      </h3>
                      <div className="space-y-3">
                        {getFeatureLines(selectedProject.moreInfo).map(
                          (line, index) => {
                            const [label, ...contentParts] = line.split(":");
                            const hasLabel =
                              contentParts.length > 0 && label.length > 0;
                            const content = contentParts.join(":").trim();

                            return (
                              <p
                                key={index}
                                className="text-sm leading-7 text-white/80 sm:text-base"
                              >
                                {hasLabel ? (
                                  <>
                                    <span className="font-semibold text-white/95">
                                      {label}:
                                    </span>{" "}
                                    {content}
                                  </>
                                ) : (
                                  line
                                )}
                              </p>
                            );
                          },
                        )}
                      </div>
                    </section>
                  </div>
                </CardContent>
              </Card>
            </ScrollArea>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
