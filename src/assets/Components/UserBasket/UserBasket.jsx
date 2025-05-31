import React, { useEffect, useRef, useState } from "react";
import "./UserBasket.css";
export default function UserBasket({
  deleteFoodInUserBasket,
  fainalyAllPriceFoods,
  isShowUserBasket,
  cancelAction,
  arrayUserBasket,
  setArrayUserBasket,
}) {
  const wrapperUserBasket = useRef(null);

  // ===========  Style Wrapper User Basket  ===========================

  function styleWrapperUserBasket() {
    if (arrayUserBasket?.length > 4) {
      wrapperUserBasket.current.classList.add("h-[450px]", "overflow-y-scroll");
    } else {
      wrapperUserBasket.current.classList.remove("h-[450px]");
    }
  }
  useEffect(() => {
    styleWrapperUserBasket();
  }, [arrayUserBasket]);
  // ====================================================================

  return (
    <>
      <div
        className={`userBasket -left-[300px] pb-[5rem] 2xs:pb-0 ${
          isShowUserBasket ? "opened-UserBasket" : ""
        } pt-3 transition-all flex flex-col justify-between pr-3 pl-3 pb-2 w-[300px] fixed top-0  z-50 h-[100vh] bg-white`}
      >
        <div>
          <div className="flex border-b-2  pb-[17px] border-[#dddddd] items-center justify-between text-zinc-700">
            <span className="text-sm font-bold">سبد خرید من</span>
            <svg
              onClick={() => cancelAction()}
              className="w-5 h-5 close-User__basket cursor-pointer"
            >
              <use href="#x-mark"></use>
            </svg>
          </div>
          <div ref={wrapperUserBasket} className="flex flex-col mt-3 gap-3">
            {arrayUserBasket?.length ? (
              <span className="bg-amber-500 text-white text-sm w-full block text-center pt-2 pb-2 rounded-sm mt-2">
                {arrayUserBasket?.length} عدد غذا در لیست خرید شما موجود است
              </span>
            ) : null}
            {arrayUserBasket?.length ? (
              arrayUserBasket?.map((item) => (
                <div className="mt-3 flex gap-2 border-b-1 border-[#dddddd] pb-3">
                  <div key={item.id} className="flex justify-between w-full gap-2">
                    <img
                      className="w-30 h-20 object-cover rounded-sm"
                      src={item.image_url}
                      alt=""
                    />
                      <div className="flex justify-around flex-col">
                        <span className="text-xs leading-4 max-w-[5em]">{item.name}</span>
                        <div className="text-xs flex gap-1">
                          <span>{item.price}</span>
                          <span>تومان</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-around ">
                        <div className="flex gap-0.5">
                          <span className="text-xs text-green-800">
                            {item.count}
                          </span>
                          <span className="text-xs "> عدد</span>
                        </div>
                        <div
                          onClick={() => deleteFoodInUserBasket(item.id)}
                          className=" text-sm pt-1 rounded-sm mb-1 cursor-pointer hover:bg-red-700 transition-all pr-3 pl-3 bg-red-500 pb-1 text-white"
                        >
                          <button className=" w-full cursor-pointer rounded-sm h-full text-white">
                            حذف
                          </button>
                        </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center h-full">
                <img
                  className="w-44 "
                  src="./../images/basket/notF.png"
                  alt=""
                />
                <span>سبد خرید شما خالی میباشد</span>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center gap-5 flex-col">
          {arrayUserBasket?.length ? (
            <>
              <div className="flex gap-6">
                <div className="flex gap-1 items-center">
                  <svg className="w-5 h-5">
                    <use href="#banknotes"></use>
                  </svg>
                  <span className="text-sm">مجموع هزینه:</span>
                </div>
                <div className="flex text-sm items-center gap-1">
                  <span>{fainalyAllPriceFoods}</span>
                  <span>میلیون تومان</span>
                </div>
              </div>
              <button className="cursor-pointer bg-[#2EC4B6] text-white flex gap-1 w-full items-center justify-center p-3 rounded-xl">
                <span className="">تسویه حساب</span>
                <svg className="w-5 h-5">
                  <use href="#arrow-left"></use>
                </svg>
              </button>
            </>
          ) : (
            <>
              <button className="cursor-pointer bg-slate-400 text-white flex gap-1 w-full items-center justify-center p-3 rounded-xl">
                <span className="">سبد خرید خالی 🙄</span>
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
