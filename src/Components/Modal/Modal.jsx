import React, { useState } from "react";
import "./modal.scss";
function Modal({ children, className }) {
  return (
    <>
      <div className={`overlay ${className}`}>
        <div className="modal__window ">{children}</div>
      </div>
    </>
  );
}

export default Modal;
