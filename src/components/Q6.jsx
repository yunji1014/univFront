import Question6 from "../assets/Question6.svg";
import gauge6 from "../assets/gauge6.svg";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { useScore } from "./ScoreContext";

const Q6 = () => {
  const navigate = useNavigate();
  const { addScore } = useScore();

  const handleAnswer = (key) => {
    addScore(key); // 변수 a or b 에 +1
    navigate("/q7"); // 다음 페이지로 이동
  };

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
            backgroundColor: "tan", // 전체 배경은 흰색 또는 기본값
            minHeight: "100vh",
          }}
        >
          <div
            style={{
              height: "10vh", // 화면 전체 높이
              display: "flex", // Flexbox 사용
              justifyContent: "center", // 가로 가운데
              alignItems: "center", // 세로 가운데
            }}
          >
            <img
              src={gauge6}
              alt="Frame 14"
              style={{
                width: "367px",
                height: "20px",
                paddingTop: "10px",
                paddingRight: "9px",
                paddingBottom: "10px",
                paddingLeft: "9px",
                top: "63px",
                left: "4px",
              }}
            />
          </div>
          <div
            style={{
              height: "50vh", // 화면 전체 높이
              display: "flex", // Flexbox 사용
              justifyContent: "center", // 가로 가운데
              alignItems: "center", // 세로 가운데
            }}
          >
            <img
              src={Question6}
              alt="Frame 7"
              style={{
                width: "327px",
                height: "224px",
                borderRadius: "10px",
                border: "1px solid transparent",
                paddingTop: "19px",
                paddingRight: "70px",
                paddingBottom: "19px",
                paddingLeft: "70px",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <button
              onClick={() => handleAnswer("emp")}
              style={{
                width: "327px",
                padding: "12px 24px",
                fontSize: "15px",
                border: "none",
                borderRadius: "999px", // 타원 모양 핵심
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              실화를 바탕으로 한 감동적인 자서전 스토리
            </button>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <button
              onClick={() => handleAnswer("know")}
              style={{
                width: "327px",
                padding: "12px 24px",
                fontSize: "16px",
                border: "none",
                borderRadius: "999px", // 타원 모양 핵심
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              사회 문제나 트렌드를 분석한 책
            </button>
          </div>
        </main>
      </div>
    </>
  );
};

export default Q6;
