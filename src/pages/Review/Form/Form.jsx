import { useNavigate } from "react-router-dom";
import { CustomButton } from "../../../_shared/Button/Button";
import styles from "./Form.module.css";
import { paths } from "../../../helpers/path";

export const Form = ({ setFormData, onClickBack, data }) => {
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    let v = value;

    if (name === "area") {
      v = v
        .replace(/\n{2,}/g, "")
        .replace(/\s{2,}/g, " ")
        .substring(0, 500);
    } else if (name === "email") {
      v = v.replace(/[^a-zA-Z0-9@.-_]/g, "").substring(0, 255);
    } else {
      v = v.trim();
    }

    setFormData((prevFormData) => ({ ...prevFormData, [name]: v }));
  };

  const handleSubmit = () => {
    if (!data.email && !data.name) {
      alert("Заполните поля email и имя");
      return;
    }
    navigate(paths.RESPONSE);
  };

  return (
    <div className={styles.content}>
      <div className={styles.form}>
        <div className={styles.fields}>
          <div className={styles.inputs}>
            <input
              onChange={handleChange}
              placeholder="Ваша почта"
              type="text"
              name="email"
              value={data.email}
            />
            <input
              onChange={handleChange}
              placeholder="Ваше имя"
              type="text"
              name="name"
              value={data.name}
            />
          </div>
          <textarea
            onChange={handleChange}
            name="area"
            cols="60"
            rows="10"
            placeholder="Ваш отзыв"
            value={data.area}
          ></textarea>
        </div>
        <div className={styles.buttons}>
          <CustomButton onClick={handleSubmit} type="submit">
            Отправить
          </CustomButton>
          <CustomButton
            type={"button"}
            onClick={onClickBack}
            style={{
              marginLeft: 20 + "px",
              background: "white",
              color: "#3b82f6",
              border: "1px solid #3b82f6",
            }}
          >
            Назад
          </CustomButton>
        </div>
      </div>
    </div>
  );
};
