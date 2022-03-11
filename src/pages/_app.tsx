import { AppProps } from 'next/app';
import '@/styles/global.scss';
import { createGlobalStyle } from 'styled-components';
import Head from 'next/head';

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
  }
  html, body {
    height: 100%;
  }
  body {
    line-height: 1.5;
    font-family: 'Poppins', sans-serif;
    background: #101010;
    color: #e5e5e5;
    -webkit-font-smoothing: antialiased;
  }
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  input, button, textarea, select {
    font: inherit;
  }
  a {
  color: inherit;
  text-decoration: none;
  }
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  #root, #__next {
    isolation: isolate;
  }
`;

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Frontend Cardio 💪</title>
        <meta
          name="description"
          content="Kola's catalogue of projects, challenges & experiments"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#101010" />
        <meta name="msapplication-TileColor" content="#101010" />
        <meta name="theme-color" content="#ffffff" />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://frontendcardio.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Frontend Cardio 💪" />
        <meta
          property="og:description"
          content="Kola's catalogue of projects, challenges & experiments"
        />
        <meta
          property="og:image"
          content="https://ucarecdn.com/802399d8-ae9d-4f26-a00a-fa99a1bdbc2b/Group59.png"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:domain"
          content="https://frontendcardio.vercel.app/"
        />
        <meta
          property="twitter:url"
          content="https://frontendcardio.vercel.app/"
        />
        <meta name="twitter:title" content="Frontend Cardio 💪" />
        <meta
          name="twitter:description"
          content="Kola's catalogue of projects, challenges & experiments"
        />
        <meta
          name="twitter:image"
          content="https://ucarecdn.com/802399d8-ae9d-4f26-a00a-fa99a1bdbc2b/Group59.png"
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
