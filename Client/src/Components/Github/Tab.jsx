import React from "react";
import { FiPackage } from "react-icons/fi";
import { LuBookMarked, LuStar } from "react-icons/lu";
import { PiBookOpenBold, PiNotebook } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { selectName } from "../../Store/changeBody";
function Tab() {
  const dispatch = useDispatch();
  const setBody = (item) => {
    dispatch(selectName(item));
  };
  return (
    <div className="flex items-center gap-3 bgblack dark:text-gray-100 w-100  border-b-2 dark:border-gray-700">
      <a
        onClick={() => {
          setBody(null);
        }}
        rel="noopener noreferrer"
        className="px-2 py-1 flex items-center gap-2  ml-3 border-b-2 dark:border-orange-600 "
      >
        <PiBookOpenBold /> Overview
      </a>
      <a
        rel="noopener noreferrer"
        className="px-2 py-1  flex items-center gap-2  "
      >
        <LuBookMarked />
        Repositories
        <span className=" px-2 rounded-xl dark:bg-gray-800"> 29</span>
      </a>
      <a
        rel="noopener noreferrer"
        className="px-2 py-1   flex items-center gap-2  "
      >
        <PiNotebook /> Projects
      </a>
      <a
        rel="noopener noreferrer"
       
        className="px-2 py-1   flex items-center gap-2  "
      >
        <FiPackage /> Packages
      </a>
      <a
        rel="noopener noreferrer" 
        className="px-2 py-1    flex items-center gap-2 "
      >
        <LuStar /> Stars
      </a>
    </div>
  );
}

export default Tab;
