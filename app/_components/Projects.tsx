import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";

import Image from "next/image";

const projects = [
  {
    title: "Barber Pro",
    description:
      "Landing Page desenvolvido em uma das live do Sujeito Programador. Nele usamos: HTML, CSS e JavaScript",
    link: "https://barber-hair.vercel.app/",
    image: require("@/public/barber.png"),
  },
  {
    title: "Projeto 2",
    description: "Descrição do Projeto 2.",
    link: "#",
    image: require("@/public/barber.png"),
  },
  {
    title: "Projeto 3",
    description: "Descrição do Projeto 2.",
    link: "#",
    image: require("@/public/barber.png"),
  },
  {
    title: "Projeto 4",
    description: "Descrição do Projeto 2.",
    link: "#",
    image: require("@/public/barber.png"),
  },
  {
    title: "Projeto 5",
    description: "Descrição do Projeto 2.",
    link: "#",
    image: require("@/public/barber.png"),
  },
];

function Projects() {
  return (
    <section id="projects" className="mt-32 flex flex-col items-center gap-4">
      <h2 className="mb-10 font-Chakra-SemiBold text-5xl text-bluish-gray">
        Projetos
      </h2>

      {projects.map((project, index) => (
        <Card
          key={index}
          className=" flex flex-col-reverse overflow-hidden bg-transparent sm:min-h-[200px] sm:min-w-full sm:flex-row md:min-h-[260px]"
        >
          {/*DIV DA DESCRIÇÃO DO PROJETO */}
          <div className="flex w-full flex-col justify-center px-4 pt-2 text-left">
            <h2 className="font-Chakra-Bold text-4xl text-bluish-gray ">
              {project?.title}
            </h2>
            <span className="font-Chakra-Regular text-2xl text-zinc-400">
              {project?.description}
            </span>
            {/* {project.tags.map((tag) =>(<div>{tag}</div>))} */}
            <div className="gap- mt-2 flex flex-row gap-2">
              <div className="cursor-default rounded-lg border-2 bg-zinc-200 px-2 transition-colors duration-500 hover:border-2  hover:bg-zinc-400">
                <span className="text-md  font-Chakra-Regular">Typescript</span>
              </div>
              <div className="cursor-default rounded-lg border-2 bg-zinc-200 px-2 transition-colors duration-500 hover:border-2  hover:bg-zinc-400">
                <span className="text-md  font-Chakra-Regular">Javascript</span>
              </div>
              <div className="cursor-default rounded-lg border-2 bg-zinc-200 px-2 transition-colors duration-500 hover:border-2  hover:bg-zinc-400">
                <span className="text-md  font-Chakra-Regular">React</span>
              </div>
              <div className="cursor-default rounded-lg border-2 bg-zinc-200 px-2 transition-colors duration-500 hover:border-2  hover:bg-zinc-400">
                <span className="text-md  font-Chakra-Regular">Nextjs</span>
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
          {/*DIV DA IMAGEM */}
          <div className="flex min-h-full w-full bg-slate-200 ">
            <div className=" flex h-full w-full object-cover">
              <Image
                alt="Imagem do projeto"
                layout="responsive"
                sizes="100%"
                src={project?.image}
                quality={100}
              />
            </div>
          </div>
        </Card>
      ))}
    </section>
  );
}

export default Projects;
