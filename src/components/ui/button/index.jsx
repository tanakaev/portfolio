import styles from "../../../assets/styles/Button.module.css";

function Button({ type, title, onClick, key, disabled }) {
  return (
    <button
      type={type}
      className={styles.button}
      onClick={onClick}
      key={key}
      disabled={disabled}
    >
      {title}
    </button>
  );
}

export default Button;
