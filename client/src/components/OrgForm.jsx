import { Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import { FaImage } from "react-icons/fa";

export default function OrgForm({ addOrg }) {
  const [orgData, setOrgData] = useState({
    name: "",
    college: "",
    email: "",
    password: "",
    location: "",
    image: "",
    bio: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setOrgData({ ...orgData, [e.target.name]: e.target.value });
  };

  const addImage = (img) => {
    setLoading(true);
    if (img.type === "image/jpeg" || img.type === "image/png") {
      const data = new FormData();
      data.append("file", img);
      data.append("upload_preset", "Garuda");
      data.append("cloud_name", "di5gni2uz");
      fetch("http://api.cloudinary.com/v1_1/di5gni2uz/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setOrgData({ ...orgData, image: data.url.toString() });
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        });
    } else {
      setLoading(false);
    }
  };
  return (
    <form className="flex flex-col p-10 m-0 bg-slate-800" onSubmit={addOrg}>
      <div className="container mx-auto flex gap-2 flex-col md:w-[40%]">
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          value={orgData.name}
          onChange={handleChange}
          className="p-2 border outline-none rounded-2xl text-lg"
        />
        <input
          type="text"
          placeholder="Enter College Name"
          name="college"
          value={orgData.college}
          onChange={handleChange}
          className="p-2 border outline-none rounded-2xl text-lg"
        />
        <input
          type="email"
          placeholder="Enter email"
          name="email"
          value={orgData.email}
          onChange={handleChange}
          className="p-2 border outline-none rounded-2xl text-lg"
        />
        <input
          type="text"
          placeholder="Enter location"
          name="location"
          value={orgData.location}
          onChange={handleChange}
          className="p-2 border outline-none rounded-2xl text-lg"
        />
        <textarea
          cols="30"
          rows="5"
          name="bio"
          placeholder="About organization"
          className="p-2 border outline-none rounded-2xl text-lg"
          value={orgData.bio}
          onChange={handleChange}
        ></textarea>
        <label
          htmlFor="imageFile"
          className="text-white text-xl flex gap-2 items-center"
        >
          <FaImage /> Add an image :{" "}
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => addImage(e.target.files[0])}
          className="text-white"
        />
        <Button variant="contained">{loading ? "loading..." : "Create"}</Button>
      </div>
    </form>
  );
}
