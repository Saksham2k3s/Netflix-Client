import React, { useState } from "react";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API_ENDPOINT } from "../utils/constant";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";
import { useTranslation } from "react-i18next";

function Login() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, setLogin] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const toggleLogin = () => {
    setLogin(!login);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (login) {
      try {
        const res = await axios.post(
          `${USER_API_ENDPOINT}/login`,
          { email, password },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        if (res?.data.success) {
          toast.success(res.data.message);
          dispatch(setUser(res.data.user));
          navigate("/browse");
        }
      } catch (error) {
        toast.error(error.response.data.message);
        setLogin(true);
      } finally {
        setIsLoading(false);
      }
    } else {
      try {
        const res = await axios.post(
          `${USER_API_ENDPOINT}/register`,
          { name, email, password },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        if (res?.data.success) {
          toast.success(res.data.message);
          setLogin(true);
        }
      } catch (error) {
        toast.error(error.response.data.message);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-hero-image ">
        <div className="bg-opacity-90 bg-black w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-6 py-12 flex flex-col items-center justify-center rounded-md">
          <h4 className="font-bold text-4xl text-white mb-8">
            {login ? t("login.Sign In") : t("login.Sign Up")}
          </h4>
          <form onSubmit={handleSubmit} className="w-full">
            {!login && (
              <input
                type="text"
                className="h-10 px-3 mt-5 rounded w-full bg-transparent border border-gray-400 text-white focus:outline-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t("login.Name")}
              />
            )}
            <input
              type="email"
              className="h-10 px-3 mt-5 rounded w-full bg-transparent border border-gray-400 text-white focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("login.Email")}
            />
            <input
              type="password"
              className="h-10 mt-5 px-3 rounded w-full bg-transparent border border-gray-400 text-white focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={t("login.Password")}
            />
            <button
              className="bg-red-600 text-white px-4 py-2 font-bold w-full text-center mt-5 rounded"
              disabled={isLoading}
            >
              {isLoading ? t("login.Loading...") : login ? t("login.Sign In") : t("login.Sign Up")}
            </button>
          </form>
          <div className="text-white mt-5 text-start">
            {login ? (
              <>
                {t("login.New to Netflix?")}{" "}
                <Link onClick={toggleLogin}>
                  {t("login.Sign Up")}
                </Link>
              </>
            ) : (
              <>
                {t("login.Already have an account?")}{" "}
                <Link onClick={toggleLogin}>
                  {t("login.Sign In")}
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
