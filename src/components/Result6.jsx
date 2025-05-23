import R6 from "../assets/R6.svg";
import R12 from "../assets/R12.svg";
import Header from "./Header";
import { useScore } from "./ScoreContext";
import { useEffect } from "react";
import Foot from "./Foot";

// import { useNavigate } from "react-router-dom";

const Result6 = () => {
  // const navigate = useNavigate();
  const { resetScores, incrementParticipantCount } = useScore();

  useEffect(() => {
    incrementParticipantCount();
    resetScores(); // 결과 페이지 진입 시점에 점수 초기화
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
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
        <main
          style={{
            backgroundColor: "tan",
            minHeight: "100vh",
            padding: "20px",
          }}
        >
          {/* 첫 번째 이미지 */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "20px",
              marginTop: "80px",
            }}
          >
            <img
              src={R6}
              alt="Frame 14"
              style={{
                width: "100%", // 가로 너비를 유동적으로 조정
                maxWidth: "367px",
                height: "auto",
              }}
            />
          </div>

          <div
            style={{
              position: "relative",
              width: "367px",
              height: "150px",
              margin: "0 auto 20px",
              overflow: "hidden",
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "0px",
              marginBottom: "40px",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "367px",
                backgroundColor: "rgba(255, 237, 203, 1)", // 어두운 반투명 배경
                color: "black",
                padding: "15px 15px",
                fontSize: "14px",
                lineHeight: "1.6",
                textAlign: "center",
                top: "50%",
                left: "50%",
                transform: "translate(-60%, -50%)",
              }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;당신이
              원하는 봉사를 지금 찾아보세요!
              <br />{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;그
              무엇이든 잘 해낼 거예요
            </div>
          </div>
          {/* 세 번째 이미지 (R12) */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "0",
              marginTop: "-30px",
            }}
          >
            <img
              src={R12}
              alt="Frame 7"
              style={{
                width: "100%",
                maxWidth: "307px",
                height: "auto",
                borderRadius: "10px",
              }}
            />
          </div>

          {/* 버튼 */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <button
              // onClick={() => navigate("/지도페이지")}
              style={{
                width: "100%",
                maxWidth: "327px",
                padding: "18px 24px",
                fontSize: "22px",
                border: "none",
                borderRadius: "999px",
                cursor: "pointer",
                fontWeight: "bold",
                backgroundColor: "white",
                color: "black",
              }}
            >
              주변 봉사 센터 보기
            </button>
          </div>
        </main>
        <Foot />
      </div>
    </>
  );
};

export default Result6;
