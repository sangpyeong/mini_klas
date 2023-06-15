import React from "react";

function BoardDetailPage({ key }) {
  return (
    <div className="flex flex-col justify-evenly w-full items-center  h-screen bg-gradient-to-b from-white to-[#C8D6E8] overflow-y-auto">
      <div className="flex text-[25px] mt-[3%] w-[60%] h-[5%] border-[2px] items-center bg-white rounded-[10px]">
        {key}
      </div>
    </div>
  );
}

export default BoardDetailPage;
