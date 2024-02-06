import styles from "./Response.module.css";
import { CustomButton } from "../../../_shared/Button/Button";

export const Response = ({ data, onClickBack }) => {
  return (
    <div className={styles.response}>
      <div className={styles.content}>
        <h2>Введенные данные</h2>
        <div className={styles.data}>
          <p>Ваш email: {data.email}</p>
          <p>Ваше имя: {data.name}</p>
          <p>Отзыв: {data.area}</p>
        </div>
        <CustomButton
          type={"button"}
          onClick={onClickBack}
          style={{
            background: "white",
            color: "#3b82f6",
            border: "1px solid #3b82f6",
          }}
        >
          Назад
        </CustomButton>
      </div>
    </div>
  );
};
