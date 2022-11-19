import React from "react";
import { ThumbnailCard, Button } from "./Styles";
import { Link } from "react-router-dom";
import { FaUser, FaMailBulk, FaInternetExplorer } from "react-icons/fa";

function UserThumbnail({ prop }) {
  return (
    <ThumbnailCard>
      <h2>
        <Link to={"/profiles/" + prop.id}>
          {" "}
          <FaUser className="icon" />
        </Link>{" "}
        {prop.name}
      </h2>
      <p style={{ margin: "10px 0px" }}>
        <FaMailBulk
          onClick={() => alert("e-mail does not exist")}
          className="icon"
        />{" "}
        {prop.email}
      </p>
      <h1>
        {" "}
        <FaInternetExplorer
          onClick={() => alert("page does not exist")}
          className="icon"
        />{" "}
        {prop.website}
      </h1>
      <Link to={"/profiles/" + prop.id}>
        <Button>See Profile</Button>
      </Link>
    </ThumbnailCard>
  );
}

export default UserThumbnail;
