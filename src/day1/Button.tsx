import styles from "../components/button.module.css";

type Props = {
  label: string;
  disabled?: boolean;
  onClick: () => void;
};

export function Button({ label, onClick, disabled }: Props) {
  return (
    <button
      className={
        styles.buttonCommon +
        ` ${disabled ? styles.buttonDisabled : styles.buttonActive}`
      }
      disabled={disabled}
      onClick={onClick}
    >
      <p>{label}</p>
    </button>
  );
}
