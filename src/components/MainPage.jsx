import { useNavigate } from "react-router-dom";
import HeaderSub from "./HeaderSub";
import MainLogo from "../assets/MainLogo.svg";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function MainPage() {
  const navigate = useNavigate();
  const [userCount, setUserCount] = useState(null);

  const handleStartClick = () => {
    navigate("/signup");
  };

  useEffect(() => {
    // API 호출하여 참여자 수 가져오기
    const fetchUserCount = async () => {
      try {
        const response = await axios.get(
          "http://3.35.217.248:8080/api/users/count"
        );
        console.log(response.data);
        setUserCount(response.data.count); // 가져온 참여자 수를 상태에 저장
      } catch (error) {
        console.error("참여자 수를 가져오는 데 실패했습니다:", error);
        setUserCount(null); // 에러 발생 시 null로 설정
      }
    };

    fetchUserCount();
  }, []);

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
      <HeaderSub />

      <div
        style={{
          width: "380px",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        {/* Main Logo */}
        <img
          src={MainLogo}
          alt="Main Logo"
          style={{
            width: "200px",
            marginBottom: "40px",
          }}
        />

        {/* Title */}
        <h1
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "60px",
          }}
        >
          봉사활동 성향 테스트
        </h1>

        {/* Start Button */}
        <button
          onClick={handleStartClick}
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
            marginBottom: "40px",
          }}
        >
          시작하기
        </button>

        {/* Participant Count */}

        {userCount !== null ? (
          <p style={{ fontSize: "16px", textAlign: "center", color: "#333" }}>
            지금까지 {userCount}명이 참여했어요.
          </p>
        ) : (
          <p style={{ fontSize: "16px", textAlign: "center", color: "#333" }}>
            로딩 중...
          </p>
        )}
      </div>
    </div>
  );
}
