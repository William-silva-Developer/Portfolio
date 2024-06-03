import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";

import Image from "next/image";

import foto from "@/public/project.jpg";

const projects = [
  {
    title: "Projeto 1",
    description: "Descrição do Projeto 1.",
    link: "#",
  },
  {
    title: "Projeto 2",
    description: "Descrição do Projeto 2.",
    link: "#",
  },
  {
    title: "Projeto 3",
    description: "Descrição do Projeto 2.",
    link: "#",
  },
  {
    title: "Projeto 4",
    description: "Descrição do Projeto 2.",
    link: "#",
  },
  {
    title: "Projeto 5",
    description: "Descrição do Projeto 2.",
    link: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="mt-32 w-full  pt-4">
      <div className="fle-row flex items-center justify-center ">
        <h2 className="mb-3 font-serif text-5xl text-bluish-gray ">Projetos</h2>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {projects.map((project, index) => (
          <Card
            key={index}
            className=" flex h-[432px]  border-none bg-transparent"
          >
            <div className="flex w-full flex-col justify-center  border-t-2 px-2  text-left">
              <h2 className="font-Chakra-Bold text-2xl text-bluish-gray ">
                {project.title}
              </h2>
              <span className="font-Chakra-Regular text-lg text-zinc-400">
                {project.description}
              </span>
              {/* {project.tags.map((tag) =>(<div>{tag}</div>))} */}
              <div className="gap- mt-2 flex flex-row gap-2">
                <div className="rounded-lg bg-zinc-200 px-2 ">
                  <span className="text-sm">Typescript</span>
                </div>
                <div className="rounded-lg bg-zinc-200 px-2 ">
                  <span className="text-sm">Javascript</span>
                </div>
                <div className="rounded-lg bg-zinc-200 px-2 ">
                  <span className="text-sm">React</span>
                </div>
                <div className="rounded-lg bg-zinc-200 px-2 ">
                  <span className="text-sm">Nextjs</span>
                </div>
              </div>

              <Button
                onClick={() => alert("Clicou")}
                className="mt-4 w-48 rounded-lg  bg-transparent text-cyan-400 hover:bg-slate-900 "
              >
                Visualizar projeto
                <ChevronRight color="#ffffff" size={28} />
              </Button>
            </div>
            <div className="flex w-full items-center justify-center border-t-2 pt-4">
              <Image
                alt="Imagem do projeto"
                src={foto}
                className="h-full w-full"
                objectFit="contain"
                quality={100}
              />
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Projects;
