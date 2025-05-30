import React, { useState } from "react";

export default function SeeMoreBoxes() {
  const [isShowMore, setIsShowMore] = useState(false);

  const handleMore = () => {
    setIsShowMore(true);
    setTimeout(() => {
      setIsShowMore(false);
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center pb-5 pt-5 ">

        
      <div onClick={() => handleMore()} className="w-48 gap-2 cursor-pointer text-white bg-green-600 rounded-[4px] flex justify-center items-center pt-2 pb-2 pl-6 pr-6">
        {isShowMore ? (
          <svg className="w-6 h-6 animate-spin animate-reverse">
            <use href="#refresh"></use>
          </svg>
        ) : (
          ""
        )}

        <span >مشاهده بیشتر</span>
      </div>
    </div>

  );
}
