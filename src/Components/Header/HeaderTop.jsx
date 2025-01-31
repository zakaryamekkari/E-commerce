/* eslint-disable react/prop-types */
import { Brightness4, Brightness7 } from "@mui/icons-material";
import SocialLinks from "./SocialLinks";
import LanguageSwitcher from "./LanguageSwitcher";

const HeaderTop = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <header className="  px-10 py-4 shadow-md bg-white dark:bg-gray-800">
      <div className="container flex justify-between items-center">
        <div className="flex items-center ">
          <span className="uppercase bg-red-700 block font-[500] text-[14px] rounded-md p-[4px] mr-4 ">
            Hot
          </span>
          <span className=" block font-[200]  ">Free Express Shipping</span>
        </div>
        <div className="flex items-center gap-2">
        
          <div onClick={toggleDarkMode} className="cursor-pointer">
            {isDarkMode ? <Brightness4 /> : <Brightness7 />}
          </div>
          <LanguageSwitcher/>
          <SocialLinks />
        </div>
      </div>
    </header>
  );
};

export default HeaderTop;
