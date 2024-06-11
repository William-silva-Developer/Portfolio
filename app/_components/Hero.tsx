import React from "react";
import { Button } from "./ui/button";
import { CarouselSpacing } from "./Custom-Carousel";
import { ImageAvatar } from "./Avatar";
import Image from "next/image";
import Foto from "@/public/avatar.png";
function Hero() {
  return (
    <main className="m-h-96  flex flex-col gap-10 pt-32 sm:flex-row">
      <div className="flex w-full items-center justify-center">
        <div className="flex flex-col">
          <span className=" sm:2xl 2xl:3xl 3xl:3xl  text-left font-Chakra-Regular text-lg font-bold text-custom-red">
            Desenvolvedor Software
          </span>
          <h1 className=" 3xl:text-8xl 4xl:text-9xl font-Chakra-Bold text-4xl text-bluish-gray sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Estou pronto para dá vida a sua grande nova ideia
          </h1>

          <Button className="text-md mt-4 h-12 px-14 font-Chakra-Medium shadow-md shadow-custom-red hover:text-custom-red  focus:bg-zinc-100 sm:text-lg">
            Saiba mais Sobre mim
          </Button>
        </div>
      </div>
      {/* Parte do slide */}
      <div className="flex   w-full items-center justify-center">
        <div className="relative flex h-32 w-32 rounded-full sm:h-52 sm:w-52 lg:h-72 lg:w-72 xl:h-80 xl:w-80">
          <ImageAvatar />
        </div>
      </div>
    </main>
  );
}

export { Hero };
