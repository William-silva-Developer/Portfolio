import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card } from "./ui/card";
import Image from "next/image";

export function CarouselSpacing() {
  const imageLoader = () => {
    return "https://static.vecteezy.com/ti/fotos-gratis/p1/5496279-homem-mao-tocando-tela-virtual-para-um-tela-virtual-painel-com-gerenciamento-de-projetos-com-icones-de-agendamento-orcamento-comunicacao-foto.jpg";
  };
  return (
    <Carousel
      className="max-h-10 max-w-[340px]"
      opts={{
        loop: true,
        align: "start",
        duration: 10000,
      }}
      plugins={[
        Autoplay({
          delay: 10000,
        }),
      ]}
    >
      <CarouselContent className="-ml-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <Card className="rounded-lg bg-none p-1">
              <Image
                className="rounded-lg"
                loader={imageLoader}
                src="me.jpg"
                alt="images de projetos"
                width={340}
                height={40}
                objectFit="contain"
                quality={100}
              />
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
