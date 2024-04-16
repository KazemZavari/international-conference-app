import React, { ReactEventHandler } from "react";
import { useContext } from "react";
import { mainContext } from "../provider/MainContext";
type SearchboxProps = {
  inputHandler: ReactEventHandler;
};
const Searchbox: React.FC<SearchboxProps> = ({ inputHandler }) => {
  const {  fixedSearchbox } = useContext(mainContext);
  return (
    <div className=" pt-5 flex justify-end mr-24 z-[99999]">
      <input
        type="text"
        onChange={inputHandler}
        placeholder="Search pic by name or id ..."
        className={`bg-black/80 text-white dark:text-gray-900 dark:bg-white/80 w-[17rem] ${fixedSearchbox}
         focus:border-red-500 border-gray-600 dark:border-green-500  border-2  `}
      />
    </div>
  );
};

export default Searchbox;
