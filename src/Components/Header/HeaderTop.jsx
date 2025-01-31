/* eslint-disable react/prop-types */
import { Brightness4, Brightness7 } from "@mui/icons-material";


const HeaderTop = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <header className=" flex justify-between items-center p-4 shadow-md bg-white dark:bg-gray-900">
      <h1 className="text-lg font-bold dark:text-white">zaki</h1>
      <div onClick={toggleDarkMode} className="">
        {isDarkMode ? <Brightness7 /> : <Brightness4 />}
      </div>
    </header>
  );
};

export default HeaderTop;
