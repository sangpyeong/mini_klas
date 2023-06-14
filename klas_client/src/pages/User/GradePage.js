import React, { useEffect, useState } from "react";
import Table from "../../components/Table";

function GradePage() {
  const [grade, setGrade] = useState([
    [
      "H020-4-3680-01",
      "소프트웨어프로젝트1",
      "컴퓨터정보공학부",
      "전선",
      "3",
      "B+",
    ],
    ["H020-3-8994-01", "컴퓨터구조실험", "컴퓨터정보공학부", "전선", "1", "A+"],
    ["H020-4-3680-01", "컴퓨터구조실험", "컴퓨터정보공학부", "전선", "1", "A+"],
  ]);
  useEffect(() => {}, []);
  let header = ["학정번호", "과목명", "개설학과", "이수구분", "학점", "성적"];
  return (
    <div class="flex flex-col justify-start items-center  h-screen bg-gradient-to-b from-white to-[#C8D6E8] ">
      <div class="flex flex-row mt-[3%] border-collapse h-[30%] w-[60%] ">
        <Table header={header} data={grade}></Table>
      </div>
    </div>
  );
}

export default GradePage;
