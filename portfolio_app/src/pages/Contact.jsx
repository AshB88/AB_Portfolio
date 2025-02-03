import '../styles/Contact.css';
import { MdOutlineEmail } from "react-icons/md";
export default function Contact() {
    return (
      <div className="contact">
        <h1>Contact</h1>
        <p>Feel free to contact me via email!</p>
        <a href="mailto:ashleighb.jjd@gmail.com"><MdOutlineEmail /></a>
      </div>
    );
  }