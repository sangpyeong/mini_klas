import React from "react";
import { useState } from "react";
import { BsFillPencilFill } from "react-icons/bs";

function BoardPage() {
  const header = [];
  const data = [];
  const [showForm, setShowForm] = useState(false);
  const handleToggleForm = () => {
    setShowForm(!showForm); // 폼의 표시 여부를 반전시킴
  };
  return (
    <div className="flex flex-col justify-evenly items-center  h-screen bg-gradient-to-b from-white to-[#C8D6E8] ">
      <div className="flex text-[25px] mt-[3%] w-[60%] h-[5%] border-[2px] items-center bg-white rounded-[10px]">
        <div className="ml-4">자유게시판</div>
      </div>
      <div
        className="flex text-[15px]  w-[60%] h-[3%] border-[2px] items-center justify-between bg-white rounded-[10px] hover:bg-slate-200 duration-100"
        onClick={handleToggleForm}
      >
        <div className="ml-4">새 글을 작성해주세요!</div>
        <BsFillPencilFill size="20" className="mr-4" />
      </div>
      <div className="flex flex-col  w-[60%] h-[75%] border-[2px] border-gray-400 bg-white rounded-[10px]">
        <div className="flex flex-col w-full pl-4  h-1/6 justify-evenly hover:bg-slate-200 duration-100">
          <div className="font-bold text-[20px]">교수님 죄송합니다.</div>
          <div className=" text-[15px] ">
            근데 교수님도 저한테 죄송하지 않으세요?
          </div>
          <div>익명</div>
        </div>
        <div className="flex border-[1px] border-gray-400"></div>
        <div className="flex flex-col w-full pl-4  h-1/6 justify-evenly hover:bg-slate-200 duration-100">
          <div className="font-bold text-[20px]">교수님 죄송합니다.</div>
          <div className=" text-[15px] ">
            근데 교수님도 저한테 죄송하지 않으세요?
          </div>
          <div>익명</div>
        </div>
        <div className="flex border-[1px] border-gray-400"></div>
        <div className="flex flex-col w-full pl-4  h-1/6 justify-evenly hover:bg-slate-200 duration-100">
          <div className="font-bold text-[20px]">교수님 죄송합니다.</div>
          <div className=" text-[15px] ">
            근데 교수님도 저한테 죄송하지 않으세요?
          </div>
          <div>익명</div>
        </div>
        <div className="flex border-[1px] border-gray-400"></div>
      </div>
    </div>
  );
}
export default BoardPage;
