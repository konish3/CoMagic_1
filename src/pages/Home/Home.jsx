import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CustomButton } from "../../_shared/Button/Button";
import { CustomDate } from "../../_shared/Date/Date";
import { getRandomNumber } from "../../helpers/random";
import { paths } from "../../helpers/path";

export const Home = () => {
  const CURRENT_YEAR = new Date().getFullYear();
  const COLOR_LIST = [
    "#2563eb",
    "#4f46e5",
    "#7c3aed",
    "#9333ea",
    "#c026d3",
    "#db2777",
    "#e11d48",
  ];
  const [date, setDate] = useState(CURRENT_YEAR);
  const [color, setColor] = useState(COLOR_LIST[0]);
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate((prevDate) => {
        return prevDate + 1;
      });
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const onClick = () => {
    setDate(CURRENT_YEAR);
    setColor(COLOR_LIST[getRandomNumber(0, COLOR_LIST.length - 1)]);
  };

  return (
    <div className="content">
      <CustomDate className="date">{date}</CustomDate>
      <div className="buttons">
        <CustomButton
          style={{
            background: color,
          }}
          type={"button"}
          onClick={onClick}
        >
          Обновить
        </CustomButton>
        <CustomButton
          type={"button"}
          style={{
            fontSize: "14px",
            background: "white",
            color: "#3b82f6",
            border: "1px solid #3b82f6",
          }}
          onClick={navigate.bind(null, paths.INTERESTING)}
        >
          Интересное в этот год
        </CustomButton>
      </div>
    </div>
  );
};
