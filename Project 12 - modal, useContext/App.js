import React, { useState, useContext } from "react";
import "./style.scss";
import { FaBars, FaTimes } from "react-icons/fa";
import Sidebar from "./components/sidebar";
import Modal from "./components/modal";
import { ModalContext } from "./components/modal-context";

function App() {
  const [sidebarState, setSidebarState] = useState(true);
  const { modal, setModal } = useContext(ModalContext);

  function handleSidebar() {
    setSidebarState((prev) => !prev);
  }

  return (
    <div className="container">
      <Sidebar propOne={sidebarState} />
      <button onClick={handleSidebar} className="sidebar-btn">
        {sidebarState ? <FaBars /> : <FaTimes />}
      </button>
      <button
        onClick={() => {
          setModal(true);
          console.log(modal);
        }}
        className="modal-btn"
      >
        Open Modal
      </button>
      {modal && <Modal />}
    </div>
  );
}

export default App;
