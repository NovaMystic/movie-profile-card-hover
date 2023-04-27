import { FiFacebook } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import harryPotter from "./images/art-harry-potter.jpg";
import hermione from "./images/art-hermione-granger.jpg";

export default function Cards() {
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="imgBx">
            <img src={harryPotter} />
          </div>
          <div className="content">
            <div className="details">
              <h2>
                Harry Potter
                <br />
                <span>Backend Developer</span>
              </h2>
              <ul className="social_icons">
                <li>
                  <a href="#">
                    <FiFacebook />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <AiOutlineTwitter />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaLinkedinIn />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <AiOutlineInstagram />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="imgBx">
            <img src={hermione} />
          </div>
          <div className="content">
            <div className="details">
              <h2>
                Hermione Granger
                <br />
                <span>Web Developer</span>
              </h2>
              <ul className="social_icons">
                <li>
                  <a href="#">
                    <FiFacebook />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <AiOutlineTwitter />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaLinkedinIn />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <AiOutlineInstagram />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
