import axios from "axios";
import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { USER_API_ENDPOINT } from "../utils/constant";
import toast from "react-hot-toast";
import { setUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import { setToggle } from "../redux/movieSlice";
import { useTranslation } from "react-i18next";
import { CiSearch } from "react-icons/ci";
import { FaRegUser, FaHome } from "react-icons/fa";
function Header() {
  const { t, i18n } = useTranslation();
  const user = useSelector((state) => state.user.user);
  const toggle = useSelector((state) => state.movie.toggle);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await axios.get(`${USER_API_ENDPOINT}/logout`);
      if (res.data.success) {
        dispatch(setUser(null));
        toast.success(res.data.message);
        navigate("/");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const toggleHandler = () => {
    dispatch(setToggle());
  };

  const changeLanguage = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div className="fixed flex w-[100%] items-center justify-between bg-gradient-to-b from-black from-70% px-5 md:px-10 z-50 ">
      <img
        className="h-20 w-40"
        src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png"
        alt=""
      />
      {user && 
        <div className="hidden items-center gap-5 md:flex">
          <IoIosArrowDropdown />
          <h6 className="text-md text-white font-bold">{user.name}</h6>
          <button
            className="bg-red-600 text-white py-1 px-2 text-sm lg:text-lg font-bold"
            onClick={handleLogout}
          >
            {t('header.Logout')}
          </button>
          <button
            className="bg-red-600 text-white px-4 py-2 font-bold cursor-pointer"
            onClick={toggleHandler}
          >
            {toggle ? t('header.Home') : t('header.Search Movie')}
          </button>
        </div>
      }

      {user && 
        <div className="flex items-center gap-2 sm:block md:hidden">
          <IoIosArrowDropdown />
          <h6 className="bg-transparent text-red-600 px-4 py-2 font-bold cursor-pointer text-2xl">
            <FaRegUser />
          </h6>
          <button
            className="bg-red-600 text-white px-2 py-1 md:px-4 md:py-2 text-sm font-normal"
            onClick={handleLogout}
          >
            {t('header.Logout')}
          </button>
          <button
            className={`bg-transparent text-red-600 px-4 py-2 font-bold cursor-pointer text-2xl`}
            onClick={toggleHandler}
          >
            {toggle ? <FaHome /> : <CiSearch />}
          </button>
        </div>
      }

      <div>
        <select
          onChange={changeLanguage}
          className="bg-transparent border border-gray-300 border-3 cursor-pointer text-md font-bold text-white px-3 py-2 rounded-md"
          defaultValue={i18n.language}
        >
          <option className="text-black" value="en">
            {t('header.English')}
          </option>
          <option className="text-black" value="hi">
            {t('header.Hindi')}
          </option>
        </select>
      </div>
    </div>
  );
}

export default Header;
