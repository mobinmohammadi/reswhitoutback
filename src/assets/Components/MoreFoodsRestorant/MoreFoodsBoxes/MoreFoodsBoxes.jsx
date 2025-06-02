import React, { useRef, useState } from "react";
import { useCartContext } from "../../Context/Context";

const MoreFoodsBoxes = ({
  arrayUserBasket,
  menu,
  setArrayUserBasket,
  addToBasketUser,
}) => {
  const [count, setCount] = useState(0);
  const [allCountProducts, setAllCountProducts] = useState({});
  const [resultAllCount, setResultAllCount] = useState();

  let svgUserBasket = useRef();
  let loaderAddTobasket = useRef();
  let minusIcon = useRef();
  const btnAddToBasket = useRef();

  const handelAddToBasketAndStyle = (menu) => {
    addToBasketUser(menu);
    setResultAllCount((prev) => prev + 1);
  };

  const increaseInNumberProducts = (products) => {
    const findProductInUserBasketForIncrease = arrayUserBasket.find(
      (product) => product.id == products.id
    );
    if (!findProductInUserBasketForIncrease) {
      alert("این کالا در سیبد خرید وجود ندارد 🙄");
    } else {
      const countAfterIncreaseProduct =
        findProductInUserBasketForIncrease.count++;
      setResultAllCount(countAfterIncreaseProduct);
    }
  };

  const reduceTheNumber = (products) => {
    const findProductInUserBasketForIncrease = arrayUserBasket.find(
      (product) => product.id == products.id
    );

    if (!findProductInUserBasketForIncrease) {
      alert("این کالا در سیبد خرید وجود ندارد 🙄");
    } else {
      const countAfterIncreaseProduct =
        findProductInUserBasketForIncrease.count--;
      setResultAllCount(countAfterIncreaseProduct);
    }
  };

  return (
    <>
      <svg className="hidden">
        <symbol
          id="minus-circle"
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
            d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </symbol>

        <symbol
          id="plus-circle"
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
            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </symbol>
      </svg>
      <div className="">
        <div className="flex  2xs:flex-row text-center 2xs:text-right items-center   gap-2 bg-white pt-3 pl-5 2xs:pl-0   pb-3 pr-3 rounded-2xl">
          <div className="flex justify-between flex-col ">
            <img
              className="w-29 h-24 2xs:w-40 rounded-2xl "
              src={menu.image_url}
              alt=""
            />
            <div className="flex  2xs:hidden justify-center gap-1 items-center pt-2 ">
              {resultAllCount < 1 ? null : (
                <div className="flex items-center gap-1">
                  <svg
                    onClick={() => reduceTheNumber(menu)}
                    ref={minusIcon}
                    className={`${
                      resultAllCount > 1 ? "block" : "hidden"
                    } text-[#ef4123] w-6 h-6`}
                  >
                    <use href="#minus-circle"></use>
                  </svg>
                  <span>{resultAllCount}</span>
                  <svg
                    ref={svgUserBasket}
                    onClick={() => increaseInNumberProducts(menu)}
                    className="  text-[#ef4123] w-6 h-6"
                  >
                    <use href="#plus-circle"></use>
                  </svg>
                </div>
              )}
              <div className="hover:bg-[#ef5c4d] w-28 flex justify-center hover:text-white hover:transition-colors text-[#ef5c4d] border-1 border-[#ef5c4d] rounded-xl pt-1 pb-1 pr-2 pl-2">
                <div
                  ref={loaderAddTobasket}
                  className="hidden loader-addBasket"
                ></div>

                <button
                  ref={btnAddToBasket}
                  type="button"
                  onClick={() => {
                    handelAddToBasketAndStyle(menu);
                  }}
                  className="text-x cursor-pointer"
                >
                  افزودن به سبد خرید
                </button>
              </div>
            </div>
          </div>
          <div className="flex 2xs:pl-5 2xs:pr-2 justify-between h-[8rem] 2xs:h-[6rem] flex-col gap-2   2xs:items-start">
            <div className="flex gap-1 flex-col">
              <span className="text-sm  2xs:text-md font-bold">
                {menu.name}
              </span>
              <span className="text-xs flex items-center justify-center w-[130px] 2xs:w-full text-[#888993]">
                سینه مرغ گریل شده، قارچ، ذرت، فلفل دلمه
              </span>
              {/* <div className="bg-[#ef4123] text-white text-xs w-[6rem] font-bold pt-1 pb-1 pr-2 pl-2 flex justify-center rounded-2xl">
              <span>20</span>
              <span>درصد تخفیف</span>
            </div> */}
            </div>
            <div className="flex gap-2 2xs:gap-5 flex-col 2xs:flex-row items-center">
              <div className="text-[#ef4123] text-xs flex gap-[2px] ">
                <span>قیمت از</span>
                <span>{menu.price}</span>
                <span>تومان</span>
              </div>
              <div className="hidden 2xs:flex cursor-pointer  gap-1  items-center">
                {count >= 1 ? (
                  <>
                    <svg
                      onClick={() => minusToUserBasket()}
                      ref={minusIcon}
                      className="hidden text-[#ef4123] w-6 h-6"
                    >
                      <use href="#minus-circle"></use>
                    </svg>
                    <span>{count}</span>
                    <svg
                      ref={svgUserBasket}
                      onClick={() => addToUserBasketHandler(menu.id)}
                      className="  text-[#ef4123] w-6 h-6"
                    >
                      <use href="#plus-circle"></use>
                    </svg>
                  </>
                ) : null}
                {count < 1 ? (
                  <>
                    <div className="hover:bg-[#ef5c4d] w-28 flex justify-center hover:text-white hover:transition-colors text-[#ef5c4d] border-1 border-[#ef5c4d] rounded-xl pt-1 pb-1 pr-2 pl-2">
                      <div
                        ref={loaderAddTobasket}
                        className="hidden loader-addBasket"
                      ></div>
                      <button
                        ref={btnAddToBasket}
                        onClick={() => addToBasketUser(menu)}
                        className=" text-x text-center leading-5 cursor-pointer "
                      >
                        افزودن به سبد خرید
                      </button>
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoreFoodsBoxes;
