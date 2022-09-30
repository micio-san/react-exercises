import React, { useState } from "react";
import ModalOpen from "./components/modal-open";

function App() {
  const [modal, setModal] = useState(false);

  function handleModal() {
    setModal((prev) => {
      return !prev;
    });
    modalState();
  }

  function modalState() {
    return !modal ? (
      <button onClick={handleModal} className="btn">
        Open modal
      </button>
    ) : (
      <ModalOpen handleClick={handleModal} />
    );
  }

  return <div className="background">{modalState()}</div>;
}

export default App;
