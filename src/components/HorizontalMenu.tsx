import styles from "../styles/components/HorizontalMenu.module.css";

import { useRouter } from "next/router";

export function HorizontalMenu() {
  const router = useRouter();

  return (
    <div className={styles.horizontalMenuContainer}>
      <img src="/icons/logo.svg" />

      <div>
        <button onClick={() => router.push("/home")}>
          <img src="/icons/selected-house.svg" />
        </button>
        <button onClick={() => router.push("/award")}>
          <img src="/icons/selected-award.svg" />
        </button>
      </div>
    </div>
  );
}
