import { createContext, ReactNode } from "react";

interface ProgressContextProviderProps {
  children: ReactNode;
}

interface ProgressContextDefault {
  lastTime: string;
  status: string;
}

let date = new Date();

const progressDefault = {
  lastTime: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
  status: "In Progress",
};

export const ProgressContext =
  createContext<ProgressContextDefault>(progressDefault);

const ProgressContextProvider = ({
  children,
}: ProgressContextProviderProps) => {
  return (
    <ProgressContext.Provider value={progressDefault}>
      {children}
    </ProgressContext.Provider>
  );
};

export default ProgressContextProvider;
