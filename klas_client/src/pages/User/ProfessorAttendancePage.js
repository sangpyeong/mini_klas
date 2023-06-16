import React from "react";
import Table from "../../components/Table";
import { useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useState } from "react";
import Button from "../../components/Button";

function ProfessorAttendancePage() {
  const header = ["주차", "1", "2"];
  const { userId } = useContext(UserContext);
  const [attendance, setAttendance] = useState([]);
  const [student, setStudent] = useState();
  const [studentList, setStudentList] = useState(["홍길동", "이길동"]);
  const [lecture, setLecture] = useState();
  const [lectureList, setLectureList] = useState([
    "소프트웨어공학",
    "운영체제",
  ]);
  const [data, setData] = useState([
    {
      studentName: "홍길동",
      lectureName: "소프트웨어공학",
      attendance: [
        ["O", "X"],
        ["O", "O"],
        ["O", "O"],
        ["O", "O"],
        ["O", "O"],
        ["O", "X"],
        ["O", "X"],
        ["O", "X"],
        ["O", "X"],
        ["O", "O"],
        ["O", "O"],
        ["O", "O"],
        ["O", "X"],
        ["O", "X"],
        ["O", "X"],
      ],
    },
    {
      studentName: "홍길동",
      lectureName: "운영체제",
      attendance: [
        ["O", "X"],
        ["O", "X"],
        ["O", "X"],
        ["O", "X"],
        ["O", "O"],
        ["O", "O"],
        ["O", "O"],
        ["O", "X"],
        ["O", "X"],
        ["O", "X"],
        ["O", "X"],
        ["O", "O"],
        ["O", "O"],
        ["O", "O"],
        ["O", "O"],
      ],
    },
    {
      studentName: "이길동",
      lectureName: "운영체제",
      attendance: [
        ["O", "O"],
        ["O", "X"],
        ["O", "X"],
        ["O", "X"],
        ["O", "X"],
        ["O", "O"],
        ["O", "O"],
        ["X", "O"],
        ["O", "O"],
        ["O", "X"],
        ["O", "X"],
        ["O", "X"],
        ["O", "X"],
        ["O", "O"],
        ["O", "O"],
      ],
    },
  ]);
  useEffect(() => {
    axios
      .post("http://localhost:8080/users/attendance", {
        user: { userId: userId },
      })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        let SList = [];
        res.data.map((e) => SList.push(e.studentName));
        let LList = [];
        res.data.map((e) => LList.push(e.lectureList));
        const resultSL = [...new Set(SList)];
        const resultLL = [...new Set(LList)];
        setStudentList(resultSL);
        setLectureList(resultLL);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  const handleAttendance = () => {
    const foundObj = data.find((obj) => {
      return obj.studentName === student && obj.lectureName === lecture;
    });

    if (foundObj) {
      console.log(foundObj);
    } else {
      console.log("일치하는 객체를 찾을 수 없습니다.");
    }

    const targetList = foundObj.attendance;
    // 주차 정보 배열 생성
    const weeks = Array.from(
      { length: targetList.length },
      (_, index) => `${index + 1}주차`
    );
    // 1열에 주차 정보 추가
    const result = targetList.map((row, index) => [weeks[index], ...row]);
    setAttendance(result);
  };
  return (
    <div className="flex flex-col justify-start items-center  h-screen bg-gradient-to-b from-white to-[#C8D6E8] ">
      <div className="flex flex-col justify-evenly items-center h-[80%] w-[60%]">
        <div className="flex text-[25px] mt-[3%] w-[100%] h-[5%] border-[2px] items-center bg-white rounded-[10px]">
          <div className="ml-4">출석체크 입력</div>
        </div>
        <select
          className="border-[2px]"
          name="student"
          onChange={(e) => {
            setStudent(e.target.value);
          }}
        >
          <option value="">학생을 선택해주세요</option>
          {studentList.map((e) => (
            <option value={e}>{e}</option>
          ))}
        </select>
        <select
          className="border-[2px]"
          name="lecture"
          onChange={(e) => {
            setLecture(e.target.value);
          }}
        >
          <option value="">강의를 선택해주세요</option>
          {lectureList.map((e) => (
            <option value={e}>{e}</option>
          ))}
        </select>
        <Button text={"선택 완료"} onClick={handleAttendance} />
        <div className="inline-block h-[80%] ">
          <Table header={header} data={attendance} />
        </div>
      </div>
    </div>
  );
}

export default ProfessorAttendancePage;
