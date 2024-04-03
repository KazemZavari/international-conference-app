import React, {
  ReactNode,
  SetStateAction,
  createContext,
  useState,
  useEffect,
} from "react";

type MainContextProps = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<SetStateAction<boolean>>;
  toggleDarkMode: React.ReactEventHandler;
};

type MainContextProviderProps = {
  children: ReactNode;
};

export const mainContext = createContext({} as MainContextProps);

const MainContextProvider = ({ children }: MainContextProviderProps) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);

    document.documentElement.classList.toggle("dark", isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);

    localStorage.setItem("darkMode", (!darkMode).toString());

    document.documentElement.classList.toggle("dark");
  };

  return (
    <mainContext.Provider value={{ darkMode, setDarkMode, toggleDarkMode }}>
      {children}
    </mainContext.Provider>
  );
};

export default MainContextProvider;
