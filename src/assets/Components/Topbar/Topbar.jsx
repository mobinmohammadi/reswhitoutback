import React, { useRef, useState } from "react";

import EasyAddress from "../EasyAddress/EasyAddress";
import UserBasket from "../UserBasket/UserBasket";
import { Link } from "react-router";

export default function Topbar({ arrayUserBasket }) {
  const [isShowModalLogin, setIsShowModalLogin] = useState(false);
  const [isShowUserBasket, setIsShowUserBasket] = useState(false);
  const [isShowLayer, setIsShowLayer] = useState(false);
  const [isUserLogin, setIsUserLogin] = useState("true");

  const modalLogin = useRef();
  const userInfosBox = useRef();

  const openModalHandler = (e) => {
    modalLogin.current.style.bottom = "0";
    modalLogin.current.style.transition = "all 0.5s ease";
  };

  const closeUserBasket = () => {
    setIsShowUserBasket(false);
    setIsShowLayer(false);
  };

  const navUserInfos = () => {
    userInfosBox.current.style.transition = "all 0.2s ease-in";
    userInfosBox.current.style.display = "block";
    setTimeout(() => {
      setIsShowLayer(true);
      userInfosBox.current.style.top = "100%";
    }, 0.7);
  };

  const closeNavInfosUser = () => {
    userInfosBox.current.style.transition = "all 1s ease-in";
    userInfosBox.current.style.top = "92%";
    setTimeout(() => {
      userInfosBox.current.style.display = "none";
      setIsShowLayer(false);
    }, 0.7);
  };

  return (
    <>
      <svg className="hidden">
        <symbol
          id="user-mini"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z"></path>
        </symbol>
        <symbol
          id="pencil-square"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
          />
        </symbol>
        <symbol
          id="chevron-left"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </symbol>

        <symbol
          id="chevron-down"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </symbol>

        <symbol
          id="shopping-cart"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </symbol>
        <symbol
          id="map-pin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
          />
        </symbol>
        <symbol
          id="chevron-down"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </symbol>
        <symbol
          id="funnel"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
          />
        </symbol>
        <symbol
          id="envelope"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
          />
        </symbol>
        <symbol
          id="credit-card"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
          />
        </symbol>
        <symbol
          id="user"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </symbol>
        <symbol
          id="archive-box-arrow-down"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
          />
        </symbol>
        <symbol
          id="heart"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </symbol>
      </svg>
      <div className="">
        <div className="bg-white relative">
          <div className="flex relative space-y-2 pt-3 justify-between  items-center pr-4 pl-4   ">
            {isUserLogin ? (
              <div
                onClick={() => navUserInfos()}
                className="flex gap-1 cursor-pointer"
              >
                <span className="text-xs">مبین محمدی</span>
                <svg className="w-4 h-4 xs:w-5 xs:h-5 xs:pt-1">
                  <use href="#chevron-left"></use>
                </svg>
              </div>
            ) : (
              <div className="text-2xl & > *:text-sm gap-2 flex items-center justify-center ">
                <a
                  href="#"
                  onClick={openModalHandler}
                  className=" h-8 w-15  rounded-md justify-center transition-all hover:bg-[#ef4123] hover:text-white flex items-center border-1 border-solid border-[#ef4123]"
                >
                  <span className=" inline-block ">ورود</span>
                </a>
                <a href="#" className="hidden sm:flex">
                  ثبت نام
                </a>
              </div>
            )}
            <div
              ref={userInfosBox}
              className=" w-[200px] z-30 pt-3 hidden items-center bg-white  rounded-[8px] absolute top-[92%]   right-5"
            >
              <div className="flex pr-3 pl-3 gap-2 border-b-2 border-[#dddddd] pb-5 items-center ">
                <svg className="w-12 h-12 border-1 border-amber-600 rounded-full p-1">
                  <use href="#user-mini"></use>
                </svg>
                <div className="flex flex-col gap-1 ">
                  <span className="text-sm font-bold">مبین محمدی</span>
                  <div className="flex text-xs gap-1 border-1 border-[#dddddd] pt-1 pb-1 pr-2.5 pl-2.5 rounded-full">
                    <span className="">اعتبار</span>
                    <span className="">0</span>
                    <span className="">تومان</span>
                  </div>
                </div>
              </div>
              <div className="">
                <ul className="z-20 & > *:flex & > *:hover:cursor-pointer & > *:hover:text-green-600  & > *:rounded-sm & > *:pr-2  & > *:pl-2  & > *:hover:bg-slate-300  & > *:hover:transition-all   & > *:justify-between & > *:pt-2 & > *:pb-2 & > *:text-sm  ">
                  <Link to="/sallerpanel/home" className=" ">
                    <span>ثبت رستوران جدید</span>
                    <svg className="w-6 h-6">
                      <use href="#building-storefront"></use>
                    </svg>
                  </Link>
                  <li className="">
                    <Link to="/">پیام ها</Link>
                    <svg className="w-6 h-6">
                      <use href="#envelope"></use>
                    </svg>
                  </li>
                  <li>
                    <Link to="/">کیف پول</Link>
                    <svg className="w-6 h-6">
                      <use href="#credit-card"></use>
                    </svg>
                  </li>
                  <li>
                    <Link to="/">اطلاعات من</Link>
                    <svg className="w-6 h-6">
                      <use href="#user"></use>
                    </svg>
                  </li>
                  <li>
                    <Link to="/">آدرس ها</Link>
                    <svg className="w-6 h-6">
                      <use href="#map-pin"></use>
                    </svg>
                  </li>
                  <li>
                    <Link to="/">سفارشات من</Link>
                    <svg className="w-6 h-6">
                      <use href="#archive-box-arrow-down"></use>
                    </svg>
                  </li>
                  <Link to="/restorant/Signup">
                    <li>ثبت نام</li>
                    <svg className="w-6 h-6">
                      <use href="#heart"></use>
                    </svg>
                  </Link>
                </ul>
              </div>
            </div>

            <div className="hidden sm:flex items-center w-56">
              <img className="w-32" src="./images/topbar-logo.svg" alt="" />
            </div>
            <div className=" sm:hidden items-center w-10">
              <img className="w-20" src="./images/logo.svg" alt="" />
            </div>
            <div
              onClick={() => {
                setIsShowUserBasket(true);
                setIsShowLayer(true);
              }}
            >
              <span className="cursor-pointer">
                <svg className="w-6 h-6 sm:w-8 sm:h-8">
                  <use href="#shopping-cart"></use>
                </svg>
              </span>
            </div>
          </div>
          <span className="w-full  h-[2px] bg-slate-100 inline-block  mt-2"></span>

          <div className=" flex justify-center items-center w-full ">
            <div
              ref={modalLogin}
              className="fixed flex items-center  flex-col p-5 -bottom-[500px] right-0 z-20 bg-white rounded-t-4xl shadow-2xl w-[700px]  max-auto h-[500px]"
            >
              <span className="text-sky-400 text-2xl font-bold">
                ورود به حساب کاربری
              </span>
              <div className="flex flex-col gap-5 pt-7">
                <div className="flex flex-col gap-3 ">
                  <label htmlFor="">ایمیل</label>
                  <input
                    className="bg-sky-100 p-5 rounded-sm focus:outline-0"
                    type="email"
                    name=""
                    id=""
                  />
                </div>
                <div className="flex flex-col gap-3 ">
                  <label htmlFor="">رمز عبور</label>
                  <input
                    className="bg-sky-100 p-5 rounded-sm focus:outline-0"
                    type="password"
                    name=""
                    id=""
                  />
                </div>
                <a href="" className="text-red-300">
                  رمز خو را فراموش کرده اید؟
                </a>
              </div>
              <button
                type="submit"
                className="bg-sky-500 text-white pt-3 pb-3 pl-30 pr-30"
              >
                ورود
              </button>
            </div>
          </div>
        </div>
        <UserBasket
          isShowUserBasket={isShowUserBasket}
          arrayUserBasket={arrayUserBasket}
          cancelAction={closeUserBasket}
        />
        {isShowLayer && (
          <div
            onClick={() => {
              setIsShowUserBasket(false);
              closeNavInfosUser();
            }}
            className="bg-black/50 top-0 fixed left-0 z-20 w-full h-full"
          ></div>
        )}
      </div>
      {/* <div className="fixed top-0 w-full h-full bg-black/50 z-10"></div> */}
    </>
  );
}
