import React from "react";
import { FaCat } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Nav, Ul, Li } from "./Styles";

function Navbar() {
  return (
    <Nav>
      <Link to="/">
        <FaCat className="icon" />
      </Link>
    </Nav>
  );
}

export default Navbar;
