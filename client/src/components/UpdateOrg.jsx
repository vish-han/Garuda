import { Button, TextField } from "@mui/material";
import React from "react";
import { FaImage, FaUser, FaCompass } from "react-icons/fa";
import {
  BsMailbox,
  BsFacebook,
  BsTwitter,
  BsDiscord,
  BsInstagram,
  BsGlobe,
} from "react-icons/bs";

export default function UpdateOrg({ toggleDrawer }) {
  return (
    <form className="flex flex-col p-10 m-0 bg-slate-800">
      <div className="container mx-auto flex gap-2 flex-col md:w-[40%]">
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          className="p-2 border outline-none rounded-2xl text-lg"
        />
        <input
          type="text"
          placeholder="Enter College Name"
          name="college"
          className="p-2 border outline-none rounded-2xl text-lg"
        />
        <input
          type="email"
          placeholder="Enter email"
          name="email"
          className="p-2 border outline-none rounded-2xl text-lg"
        />
        <input
          type="text"
          placeholder="Enter location"
          name="location"
          className="p-2 border outline-none rounded-2xl text-lg"
        />
        <textarea
          cols="30"
          rows="5"
          name="bio"
          placeholder="About organization"
          className="p-2 border outline-none rounded-2xl text-lg"
        ></textarea>
        <label
          htmlFor="imageFile"
          className="text-gradient text-xl flex gap-2 items-center"
        >
          <div className="text-white">
            <FaImage />
          </div>
          Add an image :{" "}
        </label>
        <input type="file" accept="image/*" className="text-white" />
        <div>
          <label
            htmlFor="member"
            className="text-gradient text-xl flex gap-2 items-center mt-4"
          >
            <div className="text-white">
              <FaUser />
            </div>
            Add a member :{" "}
          </label>
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Enter member name"
              name="member"
              className="p-2 border outline-none rounded-2xl text-lg my-2"
            />
            <input type="file" accept="image/*" className="text-white" />
          </div>
        </div>
        <div>
          <label
            htmlFor="sponsor"
            className="text-gradient text-xl flex gap-2 items-center mt-4"
          >
            <div className="text-white">
              <FaCompass />
            </div>
            Add a sponsor :{" "}
          </label>
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Enter sponsor name"
              name="sponsor"
              className="p-2 border outline-none rounded-2xl text-lg my-2"
            />
            <input type="file" accept="image/*" className="text-white" />
          </div>
        </div>
        {/* socials */}
        <div className="socials flex flex-col text-3xl gap-3 my-10">
          <div className="flex items-center">
            <BsDiscord color="skyblue" />
            <input
              type="text"
              placeholder="Enter discord"
              className="p-2 border outline-none rounded-2xl text-lg mx-2 flex-1"
            />
          </div>
          <div className="flex items-center">
            <BsInstagram color="skyblue" />
            <input
              type="text"
              placeholder="Enter instagram"
              className="p-2 border outline-none rounded-2xl text-lg mx-2 flex-1"
            />
          </div>
          <div className="flex items-center">
            <BsGlobe color="skyblue" />
            <input
              type="text"
              placeholder="Enter portal"
              className="p-2 border outline-none rounded-2xl text-lg mx-2 flex-1"
            />
          </div>
          <div className="flex items-center">
            <BsFacebook color="skyblue" />
            <input
              type="text"
              placeholder="Enter facebook"
              className="p-2 border outline-none rounded-2xl text-lg mx-2 flex-1"
            />
          </div>
          <div className="flex items-center">
            <BsMailbox color="skyblue" />
            <input
              type="text"
              placeholder="Enter email"
              className="p-2 border outline-none rounded-2xl text-lg mx-2 flex-1"
            />
          </div>
          <div className="flex items-center">
            <BsTwitter color="skyblue" />
            <input
              type="text"
              placeholder="Enter twitter"
              className="p-2 border outline-none rounded-2xl text-lg mx-2 flex-1"
            />
          </div>
        </div>
        <div></div>
        <Button variant="contained">Update</Button>
        <Button variant="contained" onClick={toggleDrawer}>
          Back
        </Button>
      </div>
    </form>
  );
}
