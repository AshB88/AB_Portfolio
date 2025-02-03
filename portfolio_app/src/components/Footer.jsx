import React from 'react';
import { VscGithubInverted } from "react-icons/vsc";
import { IoLogoStackoverflow } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="https://github.com/AshB88"><VscGithubInverted /></a>
      <a href="https://www.linkedin.com/in/ashleigh-brown-42981834a/"><FaLinkedin /></a>
      <a href="https://stackoverflow.com/users/27512658/ashleigh-brown"><IoLogoStackoverflow /></a>
    </footer>
  );
};

export default Footer;