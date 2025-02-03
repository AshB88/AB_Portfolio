import React from 'react';
import { VscGithubInverted } from "react-icons/vsc";
import { IoGlobeOutline } from "react-icons/io5"


const Project = ({ title, link, gitHubLink }) => {
  return (
    <div className="project">
      <div>
        <h3>{title}</h3>
      </div>
      {<a href={link}>Website <IoGlobeOutline /></a>}
      {<a href={gitHubLink}>GitHub <VscGithubInverted /></a>}
    </div>
  );
};

export default Project;