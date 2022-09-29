import Git from "./icons/git";
import Linkedin from "./icons/linked";
import Twitter from "./icons/twitter";
import Facebook from "./face";

function Links() {
  return (
    <div className="links-container">
      <ul className="links-list">
        <li>
          <Git />
        </li>
        <li>
          <Linkedin />
        </li>
        <li>
          <Twitter />
        </li>
        <li>
          <Facebook />
        </li>
      </ul>
    </div>
  );
}

export default Links;
