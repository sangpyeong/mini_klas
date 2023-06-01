import React from "react";

function Button({ type, onChange, placeholder }) {
  return (
    <div>
      <input
        class="border-[5px]"
        type={type}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Button;
