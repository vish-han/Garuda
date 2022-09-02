import React from "react";
import { BsBox } from "react-icons/bs";

export default function ProfileGroup({ data, title }) {
  return (
    <div>
      <div className="text-2xl text-white flex flex-row gap-5 items-center font-bold font-poppins uppercase">
        <BsBox /> <span>{title}</span>
      </div>
      {data ? (
        <div className="flex flex-row overflow-scroll gap-5 my-5">
          {data.map((item) => (
            <img
              src={item.img}
              alt=""
              className="w-32 sm:w-48 rounded-full cursor-pointer"
            />
          ))}
        </div>
      ) : (
        <h1 className="text-white my-5 text-2xl">No active members...</h1>
      )}
    </div>
  );
}
