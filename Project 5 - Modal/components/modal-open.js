import React from "react";

function ModalOpen(prop) {
  return (
    <div className="container-modal">
      <h1>Modal Content</h1>
      <p>
        33 numquam saepe ea perspiciatis asperiores ea accusamus aperiam est
        praesentium corrupti aut dolores quia a rerum nobis qui distinctio
        corporis. Et aliquid rerum sed natus doloremque non culpa iusto est
        officiis dolor eum consectetur accusantium cum sapiente voluptas et
        pariatur dolores. 33 deleniti dolores aut laboriosam iusto sed amet
        rerum ut cupiditate vero sit optio commodi? Ab itaque sint non voluptate
        mollitia ut molestiae voluptas et alias consequatur cum quaerat esse.
      </p>
      <button onClick={prop.handleClick} className="btn btn-close">
        close modal
      </button>
    </div>
  );
}

export default ModalOpen;
