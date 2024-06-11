import { ReactNode } from "react";
import { CustomLineShadow } from "./Custom-line-shadow";

type ContainerProps = {
  children: ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="max-w-screen-4xl min-h-screen  bg-slate-950">
      {children}
    </div>
  );
};

export { Container };
