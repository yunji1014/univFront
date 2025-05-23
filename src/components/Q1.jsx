import Question1 from "../assets/Question1.svg";
import gauge1 from "../assets/gauge1.svg";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { useScore } from "./ScoreContext";

const Q1 = () => {
  const navigate = useNavigate();
  const { addScore, participantCount } = useScore();

  const handleAnswer = (key) => {
    addScore(key);
    navigate("/q2");
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
          textAlign: "center",
          marginTop: "10px",
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        현재까지 {participantCount}명이 참여했어요!
      </div>

      {/* 메인 콘텐츠 */}
      <main style={{ flex: 1 }}>
        {/* 게이지 */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "10vh",
          }}
        >
          <img
            src={gauge1}
            alt="Gauge"
            style={{ width: "100%", maxWidth: "367px", height: "20px" }}
          />
        </div>

        {/* 질문 이미지 */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
          }}
        >
          <img
            src={Question1}
            alt="Question"
            style={{
              width: "327px",
              height: "224px",
              borderRadius: "10px",
            }}
          />
        </div>

        {/* 버튼 1 */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <button
            onClick={() => handleAnswer("active")}
            style={{
              width: "327px",
              padding: "12px 24px",
              fontSize: "16px",
              border: "none",
              borderRadius: "999px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            일정을 짜고 장소를 정하는 계획 담당!
          </button>
        </div>

        {/* 버튼 2 */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <button
            onClick={() => handleAnswer("prac")}
            style={{
              width: "327px",
              padding: "12px 24px",
              fontSize: "16px",
              border: "none",
              borderRadius: "999px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            일단 출발! 상황에 맞게 흘러가는대로~
          </button>
        </div>
      </main>
    </div>
  );
};

export default Q1;
