import React, { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = (props) => {
  const [modal, setModal] = useState(0);
  return (
    <ModalContext.Provider value={{ modal, setModal }}>
      {props.children}
    </ModalContext.Provider>
  );
};
