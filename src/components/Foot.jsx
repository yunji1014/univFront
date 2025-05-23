import { useNavigate } from "react-router-dom";
import { FaRedo } from "react-icons/fa";
import { useState } from "react";

const Foot = () => {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleReset = () => {
    navigate("/");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#D2BA97",
        padding: "20px",
        gap: "12px",
      }}
    >
      <button
        onClick={handleShare}
        style={{
          border: "2px solid #5B4328",
          backgroundColor: "white",
          color: "#5B4328",
          borderRadius: "999px",
          padding: "10px 24px",
          fontSize: "14px",
          fontWeight: "bold",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "300px",
        }}
      >
        {copied ? "URL이 복사되었습니다!" : "테스트 공유하기"}
      </button>

      <button
        onClick={() => handleReset()}
        style={{
          border: "2px solid #5B4328",
          backgroundColor: "white",
          color: "#5B4328",
          borderRadius: "999px",
          padding: "10px 16px",
          fontSize: "16px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FaRedo />
      </button>
    </div>
  );
};

export default Foot;
