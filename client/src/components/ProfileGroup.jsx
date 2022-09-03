import React from "react";
import { BsBox } from "react-icons/bs";
import {Button} from '@mui/material'

export default function ProfileGroup({ data, title, toggleDrawer }) {
  return (
    <div>
      <div className="text-xl sm:text-2xl text-white flex flex-row items-center justify-between font-bold font-poppins uppercase">
        <div className="flex flex-row gap-2 items-center">
          <BsBox /> <span>{title}</span>
        </div>
        <Button variant="contained" onClick={toggleDrawer}>Add New</Button>
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
