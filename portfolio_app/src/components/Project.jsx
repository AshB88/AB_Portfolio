import React from 'react';
import { VscGithubInverted } from "react-icons/vsc";

const Project = ({ title, link, gitHubLink }) => {
  return (
    <div className="project">
      <div>
        <h3>{title}</h3>
      </div>
      {/*<a href={link}></a>*/}
      {<a href={gitHubLink}><VscGithubInverted /></a>}
    </div>
  );
};

export default Project;