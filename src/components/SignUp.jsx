import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { useScore } from "./ScoreContext";
import axios from "axios";

export default function SignUp() {
  const [name, setName] = useState("");
  const [university, setUniversity] = useState("");
  const [part, setPart] = useState("");
  const navigate = useNavigate();
  const { updateUserInfo } = useScore();

  const handleStart = async () => {
    if (!name || !university || !part) {
      alert("모든 항목을 입력해주세요!");
      return;
    }

    const userInfo = { name, university, part }; // 예시로 participantCount를 1로 설정

    try {
      await axios.post("http://3.35.217.248:8080/api/users/signup", userInfo); // Spring Boot가 8080에서 실행된다고 가정
      updateUserInfo({ name, university, part }); // context 저장
      navigate("/q1");
    } catch (error) {
      console.error("서버 전송 실패:", error);
      alert("서버와 통신 중 오류가 발생했습니다.");
    }
  };

  return (
    <div
      style={{
        width: "380px",
        backgroundColor: "tan",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
      }}
    >
      <Header />

      <div
        style={{
          width: "380px",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          margin: "0 auto",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div style={{ marginTop: "12vh", width: "100%" }}>
          <div style={{ marginBottom: "60px", width: "100%" }}>
            <label
              style={{
                display: "block",
                fontWeight: "bold",
                marginBottom: "8px",
                textAlign: "center",
              }}
            >
              이름
            </label>
            <input
              type="text"
              placeholder="이름(별명)을 입력해주세요"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                width: "335px",
                height: "50px",
                padding: "10px",
                border: "1px solid #000",
                textAlign: "center",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div style={{ marginBottom: "60px", width: "100%" }}>
            <label
              style={{
                display: "block",
                fontWeight: "bold",
                marginBottom: "8px",
                textAlign: "center",
              }}
            >
              소속 대학
            </label>
            <select
              value={university}
              onChange={(e) => setUniversity(e.target.value)}
              style={{
                width: "335px",
                height: "50px",
                padding: "10px",
                border: "1px solid #000",
                textAlign: "center",
                backgroundColor: "#fff",
                boxSizing: "border-box",
              }}
            >
              <option value=""></option>
              <option value="가천대학교">가천대학교</option>
              <option value="건국대학교">건국대학교</option>
              <option value="광운대학교">광운대학교</option>
              <option value="국립강릉원주대학교">국립강릉원주대학교</option>
              <option value="덕성여자대학교">덕성여자대학교</option>
              <option value="서울과학기술대학교">서울과학기술대학교</option>
              <option value="서울시립대학교">서울시립대학교</option>
              <option value="서울여자대학교">서울여자대학교</option>
              <option value="인하공업전문대학">인하공업전문대학</option>
              <option value="한림대학교">한림대학교</option>
              <option value="한양대학교">한양대학교</option>
              <option value="한국외국어대학교">한국외국어대학교</option>
              <option value="한국예술종합학교">한국예술종합학교</option>
            </select>
          </div>

          <div style={{ marginBottom: "40px", width: "100%" }}>
            <label
              style={{
                display: "block",
                fontWeight: "bold",
                marginBottom: "8px",
                textAlign: "center",
              }}
            >
              파트
            </label>
            <select
              value={part}
              onChange={(e) => setPart(e.target.value)}
              style={{
                width: "335px",
                height: "50px",
                padding: "10px",
                border: "1px solid #000",
                textAlign: "center",
                backgroundColor: "#fff",
                boxSizing: "border-box",
              }}
            >
              <option value=""></option>
              <option value="BACKEND">BACKEND</option>
              <option value="FRONTEND">FRONTEND</option>
              <option value="DESIGN">DESIGN</option>
              <option value="PLANNING">PLANNING</option>
            </select>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <button
            onClick={handleStart}
            style={{
              width: "317px",
              height: "70px",
              padding: "12px 50px",
              fontSize: "20px",
              border: "none",
              borderRadius: "999px",
              cursor: "pointer",
              fontWeight: "bold",
              backgroundColor: "#fff",
              boxShadow: "0 2px 5px rgba(0,0,0,0.15)",
            }}
          >
            시작하기
          </button>
        </div>
      </div>
    </div>
  );
}
