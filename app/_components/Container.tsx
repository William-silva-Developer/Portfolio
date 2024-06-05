import { ReactNode } from "react";
import { CustomLineShadow } from "./Custom-line-shadow";

type ContainerProps = {
  children: ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="mx-auto min-h-screen w-full  bg-slate-950 px-10 pb-10 pt-4">
      {children}
    </div>
  );
};

export { Container };
