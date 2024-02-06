import styles from "./InterestingToYear.module.css";
import { CustomButton } from "../../_shared/Button/Button";
import { useNavigate } from "react-router-dom";
import { paths } from "../../helpers/path";

export const InterestingToYear = ({ onClick }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.interesting}>
      <ul className={styles.list}>
        <li className={styles.item}>ВСЕМИРНЫЙ ФЕСТИВАЛЬ МОЛОДЕЖИ</li>
        <li className={styles.item}>
          НАЧАЛО СОЗДАНИЯ РОССИЙСКОЙ ОРБИТАЛЬНОЙ СТАНЦИИ
        </li>
        <li className={styles.item}>
          ПЕРВЫЙ ПОЛЕТ МС-21 НА РОССИЙСКИХ СИСТЕМАХ
        </li>
        <li className={styles.item}>ВСЕМИРНЫЕ ИГРЫ ДРУЖБЫ</li>
        <li className={styles.item}>ИГРЫ БУДУЩЕГО В КАЗАНИ</li>
        <li className={styles.item}>ПОЯВЛЕНИЕ ГОСТА ШКОЛЬНОЙ ФОРМЫ</li>
        <li className={styles.item}>ЗАПУСК ЭЛЕКТРОННЫХ ПАСПОРТОВ ЗДОРОВЬЯ</li>
        <li className={styles.item}>ПОЯВЛЕНИЕ НОВЫХ ОТЕЛЬНЫХ БРЕНДОВ</li>
        <li className={styles.item}>ВОЗВРАЩЕНИЕ СЕРЕБРЯНЫХ МЕДАЛЕЙ В ШКОЛЕ</li>
        <li className={styles.item}>ЛЕТНИЕ ОЛИМПИЙСКИЕ ИГРЫ В ПАРИЖЕ</li>
      </ul>
      <div className={styles.buttons}>
        <CustomButton
          type={"button"}
          onClick={onClick}
          style={{
            marginRight: 20 + "px",
          }}
        >
          НАЗАД
        </CustomButton>
        <CustomButton
          type={"button"}
          style={{
            background: "white",
            color: "#3b82f6",
            border: "1px solid #3b82f6",
          }}
          onClick={navigate.bind(null, paths.REVIEW)}
        >
          Отзыв
        </CustomButton>
      </div>
    </div>
  );
};
