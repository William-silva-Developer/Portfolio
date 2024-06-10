import { ReactNode } from "react";
import { CustomLineShadow } from "./Custom-line-shadow";

type ContainerProps = {
  children: ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="min-h-screen max-w-screen-2xl  bg-slate-950">
      {children}
    </div>
  );
};

export { Container };
