import Question7 from "../assets/Question7.svg";
import gauge7 from "../assets/gauge7.svg";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { useScore } from "./ScoreContext";

const Q7 = () => {
  const navigate = useNavigate();
  const { addScore } = useScore();

  const handleAnswer = (key) => {
    addScore(key); // 변수 a or b 에 +1
    navigate("/resultLoad"); // 다음 페이지로 이동
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
              src={gauge7}
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
              src={Question7}
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
              onClick={() => handleAnswer("active")}
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
              누군가가 헌신하고 노력하는 모습
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
              onClick={() => handleAnswer("emp")}
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
              마음을 알아주고 위로하는 따뜻한 말
            </button>
          </div>
        </main>
      </div>
    </>
  );
};

export default Q7;
