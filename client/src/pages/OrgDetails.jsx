import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import orgList from "../constants/orgList";
import styles from "../style";
import ProfileGroup from "../components/ProfileGroup";
import { BsBox, BsMailbox, BsFacebook, BsTwitter, BsDiscord, BsInstagram, BsGlobe } from "react-icons/bs";

export default function OrgDetails() {
  const { id } = useParams();
  const [orgData, setOrgData] = useState(null);

  useEffect(() => {
    const data = orgList.filter((org) => org.id === id);
    setOrgData(data[0]);
  }, []);

  return (
    <div className={`${styles.boxWidth} mx-auto md:container flex flex-col`}>
      {orgData ? (
        <div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-10 px-10 my-10">
            <div className="text-white flex flex-col gap-3 font-poppins">
              <h1 className="text-white text-[2rem] xs:text-[3rem] md:text-[4rem] lg:text-[5rem] uppercase font-bold text-gradient">
                {orgData.name}
              </h1>
              <p className="text-[0.8rem] xs:text-[1rem]">{orgData.bio}</p>
            </div>
            <img
              src={orgData.image}
              alt=""
              className="xs:w-1/2 rounded-full border-4 border-t-0 border-l-0 border-blue-300 p-2"
            />
          </div>
          <div className="px-4">
            {/* members */}
            <ProfileGroup data={orgData.members} title="members" />
            {/* sponsors */}
            <ProfileGroup data={orgData.sponsors} title="sponsors" />
          </div>

          {/* events */}
          {/* add the events list component */}
          <div className="text-2xl text-white flex flex-row gap-5 items-center font-bold font-poppins uppercase my-10">
            <BsBox /> <span>Socials</span>
          </div>
          <div className="socials flex flex-col text-3xl gap-3 mb-10">
              <BsDiscord color="skyblue"/>
              <BsFacebook color="blue"/>
              <BsInstagram color="red"/>
              <BsMailbox color="white"/>
              <BsTwitter color="blue"/>
              <BsGlobe color="grey"/>
          </div>
        </div>
      ) : (
        <div className="text-3xl text-center text-white">
          No organization data exist
        </div>
      )}
    </div>
  );
}
