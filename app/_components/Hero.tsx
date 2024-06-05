import React from "react";
import { Button } from "./ui/button";
import { CarouselSpacing } from "./Custom-Carousel";
import { ImageAvatar } from "./Avatar";

function Hero() {
  return (
    <main className="mb-32 mt-32 flex h-96 sm:flex-col md:flex-col md:gap-8 xl:flex-row">
      <div className="flex w-full items-center justify-center">
        <div className="flex flex-col">
          <span className=" text-left font-serif text-lg font-bold text-custom-red  md:text-xl">
            Desenvolvedor Frontend
          </span>
          <h1 className="text- font-Chakra-Bold text-6xl text-bluish-gray md:text-5xl">
            Estou Pronto para dá Vida a sua Grande Nova ideia
          </h1>

          <Button className="mt-4  h-12 px-14 font-Chakra-Medium text-lg shadow-md shadow-custom-red hover:text-custom-red  focus:bg-zinc-100">
            Saiba mais Sobre mim
          </Button>
        </div>
      </div>
      {/* Parte do slide */}
      <div className="flex w-full items-center justify-center pb-32">
        <ImageAvatar />
      </div>
    </main>
  );
}

export { Hero };
