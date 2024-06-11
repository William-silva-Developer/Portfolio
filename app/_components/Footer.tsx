//import { siteConfig } from "@/config/site"

import Image from "next/image";
import { Linkedin } from "lucide-react";
import GitHub from "@/public/GitHub1.svg";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="mt-6 flex h-[200px] w-full flex-col bg-slate-900">
      <div className="flex h-full items-center justify-between bg-transparent px-10">
        <div className="flex">
          <span className="font-Chakra-SemiBold text-lg text-custom-red">
            {"{WS"}
          </span>
          <span className="font-Chakra-SemiBold text-lg text-custom-red">
            {"} "}
          </span>
          <span className=" font-Chakra-SemiBold text-lg text-white">
            William
          </span>
        </div>
        {/*NAVBAR */}
        <div className="invisible mx-4 hidden items-center gap-3 md:visible md:flex">
          <span className="cursor-pointer font-Chakra-Medium text-xl text-bluish-gray transition-colors duration-500 hover:border-b-4 hover:text-custom-red ">
            Inicio
          </span>
          <span className="cursor-pointer font-Chakra-Medium text-xl text-bluish-gray transition-colors duration-500 hover:border-b-4 hover:text-custom-red ">
            Sobre
          </span>
          <span className="cursor-pointer font-Chakra-Medium text-xl text-bluish-gray transition-colors duration-500 hover:border-b-4 hover:text-custom-red ">
            Habilidades
          </span>
          <span className="cursor-pointer font-Chakra-Medium text-xl text-bluish-gray transition-colors duration-500 hover:border-b-4 hover:text-custom-red ">
            Projetos
          </span>
          <span className="cursor-pointer font-Chakra-Medium text-xl text-bluish-gray transition-colors duration-500 hover:border-b-4 hover:text-custom-red ">
            Contatos
          </span>
        </div>
        {/*ICONES */}
        <div className="flex flex-row gap-2 ">
          <a
            className="h-6 w-6 "
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/William-silva-Developer"
          >
            <Image
              alt="Logo do GitHub"
              src={GitHub}
              sizes="100%"
              quality={100}
              objectFit="contain"
              className="cursor-pointer hover:animate-bounce"
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/william-desenvolvedor/"
            className="cursor-pointer hover:animate-bounce"
          >
            <Linkedin size={24} color="#000" />
          </a>
        </div>
      </div>
      <div className="flex h-full items-start justify-center border-t-2 border-t-zinc-400 bg-transparent px-10 pt-4">
        <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          Copyright 2024 |
          <a
            href="https://www.linkedin.com/in/william-desenvolvedor/"
            className="hover:underline"
          >
            William -
          </a>
          Todos os direitos reservados.
        </span>
      </div>
    </footer>
  );
}
