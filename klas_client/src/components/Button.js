import React from "react";
import { Link } from "react-router-dom";

function Button({ text, onClick }) {
  return (
    <div>
      <button
        class="w-[100px] border-[5px] rounded-[10px] bg-white"
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
