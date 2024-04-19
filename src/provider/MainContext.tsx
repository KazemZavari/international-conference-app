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
  stickyClass: string;
  setStickyClass: React.Dispatch<SetStateAction<string>>;
  fixedSearchbox: string;
  setFixedSearchbox: React.Dispatch<SetStateAction<string>>;
};

type MainContextProviderProps = {
  children: ReactNode;
};

export const mainContext = createContext({} as MainContextProps);

const MainContextProvider = ({ children }: MainContextProviderProps) => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [visible, setvisible] = useState<boolean>(false);
  const [stickyClass, setStickyClass] = useState("relative ");
  const [fixedSearchbox, setFixedSearchbox] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll" , stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 120
        ? setStickyClass("fixed top-1 left-0 z-[999999]   ")
        : setStickyClass("relative");
      windowHeight > 130
        ? setFixedSearchbox(
            "fixed top-5 right-12 md:mr-16 md:w-[14rem] bg-black/80 z-[999]  "
          )
        : setFixedSearchbox("");
    }
  };

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
        stickyClass,
        setStickyClass,
        fixedSearchbox,
        setFixedSearchbox,
      }}
    >
      {children}
    </mainContext.Provider>
  );
};

export default MainContextProvider;
