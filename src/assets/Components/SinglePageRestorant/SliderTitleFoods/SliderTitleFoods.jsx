import React, { useState } from "react";

export default function SliderTitleFoods({
  mainCategury,
  setMainCategury,
  item,
}) {
  return (
    <div
      onClick={(e) => setMainCategury(item.title)}
      className={`flex cursor-pointer  ${
        mainCategury == item.title
          ? " border-b-3  border-b-red-500 border-solid"
          : null
      } gap-2  items-center justify-center flex-col`}
    >
      <img className="w-16 h-16 hidden sm:block" src={item.img} alt="" />
      <span className="text-center min-w-[120px] text-xs">{item.title}</span>
      <span></span>
    </div>
  );
}
