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
    tags: [{tecno:"HTML"},{tecno:"CSS"},{tecno:"Javascript"}]
  },
  {
    title: "Web Carros",
    description: "Sitema de vendas de carros novos e usados similar ao Web Motos. A home lista todos os carros cadastrados de todos os usuários. Para cadastrar um carro ou moto a venda o usuário deve se cadastrar ou fazer login para acessar seu dashboard pessoal",
    link: "https://web-car-git-main-williamsilvadevelopers-projects.vercel.app/",
    image: require("@/public/web_Car.png"),
    tags: [{tecno:"Typescript"},{tecno:"Javascript"},{tecno:"Reactjs"},{tecno:"Nextjs"},{tecno:"Firebase"}]
  },
  {
    title: "Projeto 3",
    description: "Descrição do Projeto 2.",
    link: "#",
    image: require("@/public/barber.png"),
    tags: [{tecno:"Typescript"},{tecno:"Javascript"},{tecno:"Reactjs"},{tecno:"Nextjs"}]
  },
  {
    title: "Projeto 4",
    description: "Descrição do Projeto 2.",
    link: "#",
    image: require("@/public/barber.png"),
    tags: [{tecno:"Typescript"},{tecno:"Javascript"},{tecno:"Reactjs"},{tecno:"Nextjs"}]
  },
  {
    title: "Projeto 5",
    description: "Descrição do Projeto 2.",
    link: "#",
    image: require("@/public/barber.png"),
    tags: [{tecno:"Typescript"},{tecno:"Javascript"},{tecno:"Reactjs"},{tecno:"Nextjs"}]
  },
];

function Projects() {
  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };
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
            
            <div className="gap- mt-2 flex flex-row gap-3">
              {project.tags.map((item,index)=>(
              <div 
              key={index}
              className="cursor-default rounded-lg border-2 flex flex-row transition-colors duration-500 hover:border-2  hover:bg-zinc-400">
                
                
                <span   
                className="text-md font-Chakra-Regular bg-zinc-200 px-2">
                {item?.tecno}
                </span>
              </div>
              ))}
              
            </div>

            <Button
              onClick={() => handleClick(project.link)}
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
