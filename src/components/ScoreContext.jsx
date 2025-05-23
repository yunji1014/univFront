import { createContext, useContext, useState } from "react";

const ScoreContext = createContext();

export const ScoreProvider = ({ children }) => {
  const [scores, setScores] = useState({
    active: 0,
    know: 0,
    emp: 0,
    cre: 0,
    prac: 0,
  });

  const [participantCount, setParticipantCount] = useState(0);

  const [userInfo, setUserInfo] = useState({
    name: "",
    university: "",
    part: "",
  });

  const updateUserInfo = (info) => {
    setUserInfo(info); //userInfo.name로 이름 불러오기
  };

  const addScore = (key) => {
    setScores((prev) => ({ ...prev, [key]: prev[key] + 1 }));
  };

  // eslint-disable-next-line no-unused-vars
  const resetScores = () => {
    setScores({ active: 0, know: 0, emp: 0, cre: 0, prac: 0 });
  };

  const incrementParticipantCount = () => {
    setParticipantCount((prev) => {
      const newCount = prev + 1;
      localStorage.setItem("lastParticipantDate", new Date().toDateString());
      return newCount;
    });
  };

  const resetParticipantCount = () => {
    setParticipantCount(0); //participantCount로 사람 수 불러오기
  };

  return (
    <ScoreContext.Provider
      value={{
        scores,
        addScore,
        resetScores,
        participantCount,
        incrementParticipantCount,
        resetParticipantCount,
        updateUserInfo,
        userInfo,
      }}
    >
      {children}
    </ScoreContext.Provider>
  );
};

export const useScore = () => useContext(ScoreContext);
