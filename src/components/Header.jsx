import Back from "../assets/Back.svg";
import Logo from "../assets/Logo.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "60px",
        padding: "0 16px",
        position: "relative",
        backgroundColor: "rgba(245, 236, 213, 1)",
      }}
    >
      {/* Back 아이콘 */}
      <img
        src={Back}
        alt="Back"
        onClick={() => navigate(-1)}
        style={{
          width: "24px",
          height: "24px",
        }}
      />

      {/* 가운데 로고 (absolute로 중앙 고정) */}
      <img
        src={Logo}
        alt="Logo"
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          height: "28px",
        }}
      />

      {/* 오른쪽 공간 비우기 (정렬용) */}
      <div style={{ width: "24px" }}></div>
    </header>
  );
};

export default Header;
