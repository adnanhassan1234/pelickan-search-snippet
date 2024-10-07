import React from "react";

function Plus2({ via, showVia }) {
  return (
    <svg
      id="Layer_1"
      version="1.1"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="#f5f5f5"
      className={`${via && "form__plus"}`}
      onClick={() => showVia()}
    >
      <polygon points="448,224 288,224 288,64 224,64 224,224 64,224 64,288 224,288 224,448 288,448 288,288 448,288 " />
    </svg>
  );
}

export default Plus2;
