import Head from "next/head";

import styles from "../styles/pages/Login.module.css";
import React from "react";
import { UserProvider } from "../contexts/UserContext";

interface LoginProps {
  username: string;
}

export default function Home(props: LoginProps) {
  return (
    <UserProvider username={props.username}>
      <div className={styles.loginContainer}>
        <Head>
          <title>Login | Move it</title>
        </Head>

        <aside>
          <img src="/icons/symbol.svg" />
        </aside>
        <section>
          <img src="logo-full.svg" />

          <h1>Bem-vindo</h1>
          <div>
            <img src="/icons/github.svg" />
            <p>Faça login com seu Github para começar</p>
          </div>
          <div>
            <input placeholder="Digite seu username" />

            <button style={{ background: "#4953b8" }}>
              <img src="/icons/arrow-right.svg" width="24" height="24" />
            </button>
          </div>
        </section>
      </div>
    </UserProvider>
  );
}
