"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

function Header() {
  

  return (
    <header className="fixed  left-0 top-0 z-[999]  w-full bg-slate-900 px-8 pb-4 pt-4">
      <nav className="flex flex-row items-center justify-between">
        <div className="flex flex-row">
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
        <Button
          className="transition-colors duration-500 hover:bg-slate-700 sm:invisible"
          size={"icon"}
          onClick={() => alert("Clicou Menu")}
        >
          <Menu color="#ffffff" size={24} />
        </Button>
        <div className="invisible hidden  items-center justify-between  gap-8  sm:visible sm:flex">
          <a href="#">
          <span className="cursor-pointer font-Chakra-Medium text-xl text-bluish-gray transition-colors duration-500 hover:border-b-4 hover:text-custom-red ">
            Inicio
          </span>
          </a>
          <a href="#about">
          <span className="cursor-pointer font-Chakra-Medium text-xl text-bluish-gray transition-colors duration-500 hover:border-b-4 hover:text-custom-red ">
            Sobre
          </span>
          </a>
          <a href="#habilidades">
          <span className="cursor-pointer font-Chakra-Medium text-xl text-bluish-gray transition-colors duration-500 hover:border-b-4 hover:text-custom-red ">
            Habilidades
          </span>
          </a>
          <a href="#projects">
          <span className="cursor-pointer font-Chakra-Medium text-xl text-bluish-gray transition-colors duration-500 hover:border-b-4 hover:text-custom-red ">
            Projetos
          </span>
          </a>
          <a href="#contatos">
          <span className="cursor-pointer font-Chakra-Medium text-xl text-bluish-gray transition-colors duration-500 hover:border-b-4 hover:text-custom-red ">
            Contatos
          </span>
          </a>
        </div>
      </nav>
    </header>
  );
}

export { Header };
