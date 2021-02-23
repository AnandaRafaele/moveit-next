{
  /**
    Este arquivo carregará uma única vez em uma visita do usuário na aplicação.
    Então, independente de quanto o usuário navegue em nossa aplicação, este arquivo carregará somente uma vez. O contrário do app.tsx

    Tudo o que é estático fica aqui
*/
}

import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        {/**
         * Tudo o que for colocado na tag Head, o next.js colocará na tag <header></header> do HTML
         *  */}
        <Head>
          <link rel="shortcut icon" href="favicon.png" type="image/png" />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
