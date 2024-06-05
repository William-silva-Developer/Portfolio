import * as React from "react";

import { Card } from "./ui/card";

import Image from "next/image";

interface ICustomCardProps {
  title: string;
  url: string;
  alt: string;
}

function CustomCardSkills({ title = "", url, alt = "" }: ICustomCardProps) {
  return (
    <Card className="flex h-[150px] w-[300px]  flex-col  items-center justify-center bg-transparent hover:animate-pulse hover:border-custom-red">
      <Image alt={alt} src={url} width={80} height={80} quality={100} />
      <span className="mt-1 font-Chakra-SemiBold text-xl text-bluish-gray">
        {title}
      </span>
    </Card>
  );
}

export { CustomCardSkills };
