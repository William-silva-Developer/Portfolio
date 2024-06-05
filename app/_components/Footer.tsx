//import { siteConfig } from "@/config/site"

import Image from "next/image";
import { Linkedin } from "lucide-react";
import GitHub from "@/public/GitHub1.svg";

export function Footer() {
  return (
    <footer className="flex h-[321px] w-full flex-col bg-slate-800">
      <div className="flex h-full items-center justify-between bg-transparent px-10">
        <div>
          <span className="font-Chakra-SemiBold text-2xl text-custom-red">
            {"{WS"}
          </span>
          <span className="font-Chakra-SemiBold text-2xl text-custom-red">
            {"} "}
          </span>
          <span className=" font-Chakra-SemiBold text-2xl text-white">
            William
          </span>
        </div>

        <div className="flex items-center justify-between md:grid md:grid-cols-2 md:gap-2  lg:flex-row lg:gap-8 xl:flex-row xl:gap-8">
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
        <div className="flex flex-row gap-2 ">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/william-desenvolvedor/"
            className="cursor-pointer hover:animate-bounce hover:rounded-full hover:bg-cyan-700 hover:p-1 "
          >
            <Linkedin size={24} color="#000" />
          </a>
          <a href="https://github.com/William-silva-Developer">
            <Image
              alt="Logo do GitHub"
              src={GitHub}
              width={24}
              height={24}
              quality={100}
              objectFit="contain"
              className="cursor-pointer hover:animate-bounce hover:rounded-full"
            />
          </a>
        </div>
      </div>
      <div className="flex h-full items-start justify-center border-t-2 border-t-zinc-400 bg-transparent px-10 pt-4">
        <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          © 2023{" "}
          <a
            href="https://www.linkedin.com/in/william-desenvolvedor/"
            className="hover:underline"
          >
            William
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
