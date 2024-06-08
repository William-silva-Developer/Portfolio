import React from "react";
import { ImageAvatar } from "./Avatar";

function About() {
  return (
    <section id="about" className=" flex flex-col items-center gap-6 pt-20">
      {/* <div className="flex h-full flex-row items-center gap-16">
        <div className="flex h-full items-center justify-center text-justify">
          
        </div>
        <ImageAvatar />
      </div> */}
      <h2 className="mb-4  font-Chakra-Bold text-6xl font-bold text-bluish-gray">
        William silva
      </h2>
      <p className="text-justify font-Chakra-Regular text-2xl text-zinc-300">
        Olá, sou um desenvolvedor frontend com experiência em criar interfaces
        de usuário atraentes e funcionais.
        <br /> Tenho paixão por aprender novas tecnologias e aprimorar minhas
        habilidades. Lorem, ipsum dolor sit amet
        <br /> consectetur adipisicing elit. Consequuntur odio obcaecati
        eligendi asperiores. Voluptatem autem aliquam
        <br /> ducimus nesciunt facere ipsum beatae id esse exercitationem rem,
        eaque repellendus minus dolores quasi!
      </p>
    </section>
  );
}

export { About };
