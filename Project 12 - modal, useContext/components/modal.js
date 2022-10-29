import React, { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { ModalContext } from "./modal-context";

function Modal() {
  const { modal, setModal } = useContext(ModalContext);

  return (
    <div className="modal-container">
      <button
        onClick={() => {
          setModal(false);
        }}
        className="sidebar-btn"
      >
        <FaTimes />
      </button>
      <h1>modal</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quasi
        repellendus impedit recusandae unde modi exercitationem veritatis, quam,
        doloremque, incidunt distinctio dignissimos veniam in delectus fugit
        fugiat sint temporibus molestiae sequi pariatur. Laborum placeat,
        architecto sapiente consequatur in repudiandae! In amet alias rerum
        beatae iste quae mollitia excepturi provident aspernatur.
      </p>
    </div>
  );
}

export default Modal;
