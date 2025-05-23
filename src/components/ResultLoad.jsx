import Result_load1 from "../assets/Result_load1.svg"; // 또는 .svg, .png 등
import Result_load2 from "../assets/Result_load2.svg";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { useScore } from "./ScoreContext";

const ResultLoad = () => {
  const navigate = useNavigate();
  const { scores } = useScore();

  useEffect(() => {
    const timer = setTimeout(() => {
      const values = Object.values(scores);
      const maxScore = Math.max(...values);

      // maxScore를 가진 키 배열 (동률 대비)
      const winners = Object.entries(scores)
        .filter(([, value]) => value === maxScore)
        .map(([key]) => key);

      if (winners.length > 1) {
        // 동률이면 Result6으로 이동
        navigate("/result6");
      } else {
        // 점수에 따라 이동
        switch (winners[0]) {
          case "active":
            navigate("/result1");
            break;
          case "know":
            navigate("/result2");
            break;
          case "emp":
            navigate("/result3");
            break;
          case "cre":
            navigate("/result4");
            break;
          case "prac":
            navigate("/result5");
            break;
          default:
            navigate("/result6"); // 예외 처리
        }
      }
    }, 3000); // 3초 후 이동

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, [navigate, scores]);

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
      <div
        style={{
          backgroundColor: "tan",
          minHeight: "100vh",
          position: "relative",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {" "}
        <Header />
        {/* 위쪽 50% 배경 */}
        <div style={{ height: "50%" }}>
          <img
            src={Result_load1}
            alt="상단 이미지"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        {/* 아래쪽 50% 배경 */}
        <div style={{ height: "50%" }}>
          <img
            src={Result_load2}
            alt="하단 이미지"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        {/* 텍스트 오버레이 */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "kombu green",
            fontSize: "22px",
            fontWeight: "bold",
            textShadow: "1px 1px 4px rgba(0, 0, 0, 0)", // 텍스트 가독성 확보
          }}
        >
          나의 봉사 성향은...?
        </div>
      </div>
    </div>
  );
};

export default ResultLoad;
