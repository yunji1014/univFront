import { useEffect } from "react";

function KakaoMap() {
  useEffect(() => {
    if (window.kakao && window.kakao.maps) {
      loadMap();
    } else {
      const script = document.createElement("script");
      script.src = "2bb177a0a1ad204de157a03a24528870";
      script.async = true;
      script.onload = () => window.kakao.maps.load(loadMap);
      document.head.appendChild(script);
    }

    function loadMap() {
      const container = document.getElementById("map");
      const options = {
        center: new window.kakao.maps.LatLng(37.5665, 126.978),
        level: 3,
      };
      const map = new window.kakao.maps.Map(container, options);

      const markerPosition = new window.kakao.maps.LatLng(37.5665, 126.978);
      const marker = new window.kakao.maps.Marker({
        position: markerPosition,
      });
      marker.setMap(map);
    }
  }, []);

  return (
    <div>
      <h2>🗺️ 카카오 지도</h2>
      <div
        id="map"
        style={{
          width: "100%",
          height: "400px",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
      ></div>
    </div>
  );
}

export default KakaoMap;
