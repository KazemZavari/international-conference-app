import React, {
  ReactNode,
  SetStateAction,
  createContext,
  useState,
  useEffect,
} from "react";

type MainContextProps = {
  visible: boolean;
  darkMode: boolean;
  setvisible: React.Dispatch<SetStateAction<boolean>>;
  setDarkMode: React.Dispatch<SetStateAction<boolean>>;
  toggleDarkMode: React.ReactEventHandler;
  handleVisible: React.ReactEventHandler;
};

type MainContextProviderProps = {
  children: ReactNode;
};

export const mainContext = createContext({} as MainContextProps);

const MainContextProvider = ({ children }: MainContextProviderProps) => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [visible, setvisible] = useState<boolean>(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);

    document.documentElement.classList.toggle("dark", isDarkMode);
  }, []);

  const handleVisible = () => {
    setvisible((visible) => !visible);
  };
  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);

    localStorage.setItem("darkMode", (!darkMode).toString());

    document.documentElement.classList.toggle("dark");
  };

  return (
    <mainContext.Provider
      value={{
        darkMode,
        setDarkMode,
        toggleDarkMode,
        visible,
        setvisible,
        handleVisible,
      }}
    >
      {children}
    </mainContext.Provider>
  );
};

export default MainContextProvider;
