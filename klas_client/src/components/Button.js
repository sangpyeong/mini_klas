import React from "react";
import { Link } from "react-router-dom";

function Button({ text, onClick }) {
  return (
    <div>
      <button
        class="w-[100px] border-[1px] rounded-[7px] h-[30px] bg-white items-center flex justify-center "
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
