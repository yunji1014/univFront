import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ScoreProvider } from "./components/ScoreContext";
import Q1 from "./components/Q1";
import Q2 from "./components/Q2";
import Q3 from "./components/Q3";
import Q4 from "./components/Q4";
import Q5 from "./components/Q5";
import Q6 from "./components/Q6";
import Q7 from "./components/Q7";
import ResultLoad from "./components/ResultLoad";
import Result1 from "./components/Result1";
import Result2 from "./components/Result2";
import Result3 from "./components/Result3";
import Result4 from "./components/Result4";
import Result5 from "./components/Result5";
import Result6 from "./components/Result6";
import SignUp from "./components/SignUp";
import MainPage from "./components/MainPage.jsx";
import KakaoMap from "./components/KakaoMap";

function App() {
  return (
    <ScoreProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/q1" element={<Q1 />} />
          <Route path="/q2" element={<Q2 />} />
          <Route path="/q3" element={<Q3 />} />
          <Route path="/q4" element={<Q4 />} />
          <Route path="/q5" element={<Q5 />} />
          <Route path="/q6" element={<Q6 />} />
          <Route path="/q7" element={<Q7 />} />
          <Route path="/resultLoad" element={<ResultLoad />} />
          <Route path="/result1" element={<Result1 />} />
          <Route path="/result2" element={<Result2 />} />
          <Route path="/result3" element={<Result3 />} />
          <Route path="/result4" element={<Result4 />} />
          <Route path="/result5" element={<Result5 />} />
          <Route path="/result6" element={<Result6 />} />
          <Route path="/kakaomap" element={<KakaoMap />} />
        </Routes>
      </Router>
    </ScoreProvider>
  );
}

export default App;
