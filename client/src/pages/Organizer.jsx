import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import styles from "../style";
import orgList from "../constants/orgList";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function Organizer() {
  const search = useRef(null);

  const [query, setQuery] = useState("");

  const handleKeyPress = (e) => {
    e.preventDefault();
    if (e.key === "Enter") {
      handleDispatch();
    }
  };

  const handleDispatch = () => {
    search.current?.blur();
    setQuery("");
  };

  const handleClick = () => {};

  return (
    <div className={`org p-4 md:px-10 ${styles.boxWidth} mx-auto `}>
      <h1 className="uppercase text-white text-[2rem] xs:text-[4rem] sm:text-[5rem] md:text-[7rem] font-bold text-gradient">
        Organizations
      </h1>
      {/* search and sort section */}
      <div className="special my-7 flex flex-col sm:flex-row justify-between sm:items-center gap-5">
        <div className="search flex">
          <input
            type="text"
            ref={search}
            className="bg-transparent outline-none text-white font-roboto border-b p-2 w-[8rem] md:w-[12rem]"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyUp={handleKeyPress}
          />
          <IconButton color="warning" onClick={handleDispatch}>
            <SearchIcon sx={{ color: "white" }} />
          </IconButton>
        </div>
        <div className="sortButtons">
          <ButtonGroup variant="contained" aria-label="outlined button group">
            <Button>A-Z</Button>
            <Button>Z-A</Button>
            <Button>Latest</Button>
            <Button>Oldest</Button>
          </ButtonGroup>
        </div>
      </div>
      {/* list */}
      <div className="list grid grid-cols-15 gap-7 my-10 items-center justify-center">
        {orgList.map((org) => (
          <div className="grid grid-cols-1 rounded-3xl border border-gradient p-2 text-center hover:scale-105 duration-300">
            <img src={org.image} alt="image" className="rounded-3xl " />
            <h1 className="text-white text-xl md:text-2xl mt-3">{org.name}</h1>
            <p className="text-white">{org.college}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
