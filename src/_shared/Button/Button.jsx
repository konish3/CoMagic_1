import styles from "./Button.module.css";

export const CustomButton = ({
  className,
  children,
  style,
  type = "button",
  isDisabled = false,
  ...props
}) => {
  return (
    <button className={styles.btn} type={type} style={style} {...props}>
      {children}
    </button>
  );
};
