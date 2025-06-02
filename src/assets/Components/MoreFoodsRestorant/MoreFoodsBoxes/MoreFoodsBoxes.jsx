// ایمپورت کتابخانه‌های مورد نیاز
import React, { useEffect, useRef, useState } from "react";
import { useCartContext } from "../../Context/Context";

// تعریف کامپوننت MoreFoodsBoxes
const MoreFoodsBoxes = ({ menu, addToBasketUser, idProductInBasket }) => {
  // تعداد فعلی محصول در سبد خرید (صرفاً برای نمایش داخلی، البته خیلی استفاده نشده)
  const [count, setCount] = useState(0);

  // وضعیت لودر برای دکمه "افزودن به سبد خرید"
  const [isStyleLoader, setIsStyleLoader] = useState(false);

  // سبد خرید که از localStorage بارگذاری میشه (اولین بار)
  const [arrayUserBasket, setArrayUserBasket] = useState(() => {
    const stored = localStorage.getItem("basket");
    return stored ? JSON.parse(stored) : [];
  });

  // ارجاع‌ها (برای دسترسی مستقیم به DOM در صورت نیاز، اینجا فعلاً استفاده زیادی نداره)
  const svgUserBasket = useRef();
  const loaderAddTobasket = useRef();
  const minusIcon = useRef();
  const btnAddToBasket = useRef();

  // آپدیت کردن سبد خرید هم در localStorage و هم در state
  const updateLocalStorage = (basket) => {
    localStorage.setItem("basket", JSON.stringify(basket));
    setArrayUserBasket(basket);
  };

  // اضافه کردن محصول به سبد خرید و فعال کردن لودر به مدت ۱ ثانیه
  const handleAddToBasketAndStyle = (menuItem) => {
    const updatedBasket = [...arrayUserBasket];
    const existingItem = updatedBasket.find((item) => item.id === menuItem.id);

    setTimeout(() => {
      
      if (existingItem) {
        
        existingItem.count++; // اگر قبلاً بود، فقط تعداد رو زیاد کن
      } else {
        updatedBasket.push({ ...menuItem, count: 1 }); // اگر نبود، اضافه کن با تعداد ۱
        addToBasketUser(menuItem);
      }
    }, 1100);

    updateLocalStorage(updatedBasket); // ذخیره در لوکال استوریج و state
    setIsStyleLoader(true); // نمایش لودر
    setTimeout(() => setIsStyleLoader(false), 1000); // مخفی کردن لودر بعد ۱ ثانیه
  };

  // افزایش تعداد یک محصول خاص در سبد خرید
  const increaseCount = (product) => {
    const updatedBasket = [...arrayUserBasket];
    const item = updatedBasket.find((i) => i.id === product.id);
    if (item) {
      item.count++;
      updateLocalStorage(updatedBasket);
      addToBasketUser(product);
    } else {
      alert("این کالا در سبد خرید وجود ندارد 🙄");
    }
  };

  // کاهش تعداد یک محصول خاص در سبد خرید (یا حذف کامل اگه تعداد بشه ۰)
  const decreaseCount = (product) => {
    const updatedBasket = [...arrayUserBasket];
    const index = updatedBasket.findIndex((i) => i.id === product.id);

    if (index !== -1) {
      if (updatedBasket[index].count > 1) {
        updatedBasket[index].count--; // کاهش یک عدد
      } else {
        const confirmDelete = window.confirm(
          "آیا مطمئنی که می‌خوای این آیتم رو حذف کنی؟"
        );
        if (confirmDelete) {
          updatedBasket.splice(index, 1); // حذف کامل محصول از سبد
          window.location.reload()
        }
      }
      updateLocalStorage(updatedBasket);
    } else {
      alert("این کالا در سبد خرید وجود ندارد 🙄");
    }
  };

  // پیدا کردن محصول فعلی در سبد خرید برای نمایش تعداد فعلی
  const currentProduct = arrayUserBasket.find((p) => p.id === menu.id);
  const currentCount = currentProduct ? currentProduct.count : 0;

  // خروجی رندر کامپوننت

  //  ================== Clear Count ===========================

  const getProductCount = (id) => {
    const item = arrayUserBasket.find((p) => p.id == id);
    return item ? item.count : 0;
  };

  // ============================================================
  return (
    <div className="flex justify-around 2xs:flex-row text-center 2xs:text-right items-center gap-2 bg-white pt-3 pl-5 2xs:pl-0 pb-3 pr-3 rounded-2xl">
      {/* بخش تصویر و دکمه افزودن */}
      <div className="flex justify-between flex-col">
        <img
          className="w-29 h-24 2xs:w-40 rounded-2xl"
          src={menu.image_url}
          alt=""
        />

        {/* دکمه‌های موبایل (فقط در موبایل یا نمایش کوچیک دیده میشه) */}
        <div className="flex 2xs:hidden justify-center gap-1 items-center pt-2">
          {currentCount > 0 ? (
            // اگر محصول در سبد بود، دکمه‌های + و - رو نشون بده
            <div className="flex items-center gap-1">
              <svg
                onClick={() => decreaseCount(menu)}
                ref={minusIcon}
                className="cursor-pointer text-[#ef4123] w-6 h-6"
              >
                <use href="#minus-circle" />
              </svg>
              <span>{getProductCount(menu.id)}</span>
              <svg
                ref={svgUserBasket}
                onClick={() => increaseCount(menu)}
                className="cursor-pointer text-[#ef4123] w-6 h-6"
              >
                <use href="#plus-circle" />
              </svg>
            </div>
          ) : (
            // اگر محصول در سبد نبود، دکمه افزودن نشون داده میشه
            <div className="hover:bg-[#ef5c4d] w-28 flex justify-center hover:text-white text-[#ef5c4d] border border-[#ef5c4d] rounded-xl pt-1 pb-1 px-2">
              <div
                ref={loaderAddTobasket}
                className={`${
                  isStyleLoader ? "block" : "hidden"
                } loader-addBasket`}
              ></div>
              {!isStyleLoader && (
                <button
                  ref={btnAddToBasket}
                  type="button"
                  onClick={() => handleAddToBasketAndStyle(menu)}
                  className="text-x cursor-pointer"
                >
                  افزودن به سبد خرید
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* بخش اطلاعات محصول: عنوان، توضیح، قیمت */}
      <div className="flex 2xs:pl-5 2xs:pr-2 justify-between h-[8rem] 2xs:h-[6rem] flex-col gap-2 2xs:items-start">
        <div className="flex gap-1 flex-col">
          <span className="text-sm 2xs:text-md text-right font-bold">
            {menu.name}
          </span>
          <span className="text-xs text-right w-[130px] 2xs:w-full text-[#888993]">
            سینه مرغ گریل شده، قارچ، ذرت، فلفل دلمه
          </span>
        </div>
        <div className="text-[#ef4123] text-xs flex gap-[2px]">
          <span>قیمت از</span>
          <span>{menu.price}</span>
          <span>تومان</span>
        </div>
      </div>
    </div>
  );
};

export default MoreFoodsBoxes;
