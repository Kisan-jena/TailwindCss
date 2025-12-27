import {cn} from "../lib/utils"

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className}: ContainerProps) => {
  return <div className={cn("max-w-5xl mx-auto w-full px-1 py-2.5 relative z-10",className)}>
    {children}
  </div>;
};

export default Container;
