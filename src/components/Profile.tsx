import styles from "../styles/components/Profile.module.css";

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img
        src="https://github.com/AnandaRafaele.png"
        alt="Desenvolvedora Ananda Rafaele"
      />
      <div>
        <strong>Ananda Rafaele</strong>
        <p>
          <img src="icons/level.svg" />
          Level 01
        </p>
      </div>
    </div>
  );
}
