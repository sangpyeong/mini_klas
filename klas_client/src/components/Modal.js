import { useState, useRef } from "react";
import KakaoLoginPage from "../pages/User/KakaoLoginPage";
import { useContext } from "react";
import { ModalContext } from "../contexts/ModalContext";

function Modal() {
  const [modalContent, setModalContent] = useState(0);
  const { modal, setModal } = useContext(ModalContext);
  const ModalBG = useRef();

  return (
    <div className="w-full z-0 fixed text-4xl">
      {modal ? (
        <div
          className="w-full h-screen bg-black bg-opacity-30 flex justify-center items-center"
          ref={ModalBG}
          onClick={(e) => {
            if (ModalBG.current === e.target) {
              setModal(false);
            }
          }}
        >
          <div className="z-25 w-[30%] h-[40%] bg-white fixed  ">
            {modalContent === 0 ? <KakaoLoginPage setModal={setModal} /> : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Modal;
