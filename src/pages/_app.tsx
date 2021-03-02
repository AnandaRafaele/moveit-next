import React from "react";
import { ChallengesProvider } from "../contexts/ChallengesContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
