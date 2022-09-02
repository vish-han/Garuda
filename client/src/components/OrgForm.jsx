import { Button } from "@mui/material";
import React from "react";
import { useState } from "react";

export default function OrgForm({ addOrg }) {
  const [orgData, setOrgData] = useState({
    name: "",
    college: "",
    email: "",
    password: "",
    location: "",
    image: "",
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
          className="p-3 border outline-none rounded-2xl text-lg"
        />
        <input
          type="text"
          placeholder="Enter College Name"
          name="college"
          value={orgData.college}
          onChange={handleChange}
          className="p-3 border outline-none rounded-2xl text-lg"
        />
        <input
          type="email"
          placeholder="Enter email"
          name="email"
          value={orgData.email}
          onChange={handleChange}
          className="p-3 border outline-none rounded-2xl text-lg"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={orgData.password}
          onChange={handleChange}
          className="p-3 border outline-none rounded-2xl text-lg"
        />
        <input
          type="text"
          placeholder="Enter location"
          name="location"
          value={orgData.location}
          onChange={handleChange}
          className="p-3 border outline-none rounded-2xl text-lg"
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => addImage(e.target.files[0])}
          className="text-white"
        />
        <Button variant="contained">{loading ? 'loading...' : 'Create'}</Button>
      </div>
    </form>
  );
}
