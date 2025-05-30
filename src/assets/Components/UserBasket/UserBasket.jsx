import React, { useRef } from "react";
import "./UserBasket.css";
export default function UserBasket({isShowUserBasket , cancelAction, arrayUserBasket }) {
  const userBasket = useRef();
  
  return (
    <>
      
      
      <div
        className={`userBasket -left-[300px] ${isShowUserBasket ? "opened-UserBasket" : ""} pt-3 transition-all flex flex-col justify-between pr-3 pl-3 pb-2 w-[300px] fixed top-0  z-50 h-[100vh] bg-white`}
      >
        <div>
          <div className="flex border-b-2  pb-[17px] border-[#dddddd] items-center justify-between text-zinc-700">
            <span className="text-sm font-bold">سبد خرید من</span>
            <svg onClick={() => cancelAction()} className="w-5 h-5 close-User__basket cursor-pointer">
              <use href="#x-mark"></use>
            </svg>
          </div>
          <span className="bg-amber-500 text-white text-sm w-full block text-center pt-2 pb-2 rounded-sm mt-2">{arrayUserBasket?.length} عدد غذا در لیست خرید شما موجود است</span>
 
          <div className="flex flex-col mt-3 gap-3">
         
            {arrayUserBasket?.map((item) => (
              <div className="flex gap-2 border-b-1 border-[#dddddd] pb-3">
                <img className="w-30 rounded-sm" src={item[0].image} alt="" />
                <div className="flex justify-between flex-col">
                  <span className="text-xs leading-4">{item[0].name}</span>
                  <div className="text-xs flex gap-1">
                    <span>۲.۵۰۰.۰۰۰</span>
                    <span>تومان</span>
                  </div>
                </div>
              </div>
            ))}
            {/* <div className="flex gap-2 border-b-1 border-[#dddddd] pb-3">
            <img
              className="w-30 rounded-sm"
              src="./images/foods/papular-foods/3.jpg"
              alt=""
            />
            <div className="flex justify-between flex-col">
              <span className="text-xs leading-4">
                پولوشرت مردانه آستین بلند دو خط محتوا
              </span>
              <div className="text-xs flex gap-1">
                <span>۲.۵۰۰.۰۰۰</span>
                <span>تومان</span>
              </div>
            </div>
          </div> */}
          </div>
        </div>
        <div className="flex items-center gap-5 flex-col">
          <div className="flex gap-6">
            <div className="flex gap-1 items-center">
              <svg className="w-5 h-5">
                <use href="#banknotes"></use>
              </svg>
              <span className="text-sm">مجموع هزینه:</span>
            </div>
            <div className="flex text-sm items-center gap-1">
              <span>5,000,000</span>
              <span>میلیون تومان</span>
            </div>
          </div>
          <button className="cursor-pointer bg-[#2EC4B6] text-white flex gap-1 w-full items-center justify-center p-3 rounded-xl">
            <span className="">تسویه حساب</span>
            <svg className="w-5 h-5">
              <use href="#arrow-left"></use>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
