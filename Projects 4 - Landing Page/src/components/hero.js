import React, { useState } from "react";
import Main from "./main";
import Sun from "./icons/sun";
import Moon from "./icons/moon";
import cssVars from "../index.css";
import Links from "./links";

function Hero() {
  const [dark, setDark] = useState(false);
  const [icon, setIcon] = useState(<Moon />);
  const [menuOpen, setMenuOpen] = useState(false);

  function changeDark() {
    setDark((prev) => {
      return !prev;
    });
    changeIcon();
    changeStyle();
  }
  function changeIcon() {
    setIcon(() => {
      return dark ? <Moon /> : <Sun />;
    });
  }
  function changeStyle() {
    return dark
      ? { backgroundColor: "var(--color--light)", color: "var(--color--dark)" }
      : { backgroundColor: "var(--color--dark)", color: "var(--color--light)" };
  }

  function addMenu(e) {
    setMenuOpen((prevMen) => {
      return !prevMen;
    });
    toggleMenu(e.target.children[0]);
  }

  function toggleMenu(tar) {
    const menu = document.querySelector(".list-nav");
    menuOpen ? menu.classList.add("active") : menu.classList.remove("active");
    menuOpen ? tar.classList.add("open") : tar.classList.remove("open");
    console.log(tar);
  }

  return (
    <div className="background">
      <nav style={changeStyle()}>
        <div>
          <h1 style={{ textTransform: "none" }} className="title">
            {" "}
            <span
              style={{
                color: "var(--color--primary)",
              }}
            >
              A
            </span>
            lice
          </h1>
        </div>
        <div onClick={addMenu} className="burger">
          <div className="other-burger"></div>
        </div>
        <ul style={changeStyle()} className="list-nav">
          <li>
            <a className="link" style={changeStyle()} href="#">
              Home
            </a>
          </li>
          <li>
            <a className="link" style={changeStyle()} href="#">
              About
            </a>
          </li>
          <li>
            <a className="link" style={changeStyle()} href="#">
              Skills
            </a>
          </li>
          <li>
            <a className="link" style={changeStyle()} href="#">
              Services
            </a>
          </li>
          <li>
            <a className="link" style={changeStyle()} href="#">
              Portfolio
            </a>
          </li>
          <li>
            <a className="link" style={changeStyle()} href="#">
              Contacts
            </a>
          </li>
          <li>
            <a onClick={changeDark}>{icon}</a>
          </li>
        </ul>
      </nav>
      <Main bool={dark} styles={changeStyle()} />
      <Links bool={dark} styles={changeStyle()} />
    </div>
  );
}

export default Hero;
