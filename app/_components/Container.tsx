import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">{children}</div>
  );
};

export { Container };
