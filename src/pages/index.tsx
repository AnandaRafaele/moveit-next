import Head from "next/head";

import styles from "../styles/pages/Login.module.css";
import React, { useEffect, useState } from "react";
import { UserProvider } from "../contexts/UserContext";
import { useRouter } from "next/router";
interface LoginProps {
  username: string;
}

export default function Home(props: LoginProps) {
  const router = useRouter();

  //PROVISÓRIO
  const [username, setUsername] = useState("");

  useEffect(() => {
    console.log(router);
  }, []);

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
            <input
              placeholder="Digite seu username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <button
              style={
                username ? { background: "#4CD62B" } : { background: "#4953b8" }
              }
              onClick={() => router.push("/Home")}
            >
              <img src="/icons/arrow-right.svg" width="24" height="24" />
            </button>
          </div>
        </section>
      </div>
    </UserProvider>
  );
}
