import "../styles/globals.css";
import "../styles/style.css";
import "../styles/animate.css";
import "../styles/modalformcookie.css";

import Head from "next/head";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ModalCookies from "../components/ModalCookie";
import AppContext from "../Context/AppContext";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [show, setShow] = useState(false);
  const [cancel, setCancel] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const router = useRouter();
  const [sectionName, setSectionName] = useState("home");

  useEffect(() => {
    return () => import("tw-elements");
  }, []);

  return (
    <motion.div
      className="overflow-x-hidden relative"
      key={router.route}
      initial={{
        opacity: 0.1,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
        ease: "easeIn",
      }}>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload" id="analitycs">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
    `}
      </Script>
      <Head>
        {/* <meta name="viewport" content="user-scalable=no, width=device-width" /> */}
        <meta charSet="utf-8" />
      </Head>
      <ModalCookies
        show={show}
        setShow={setShow}
        cancel={cancel}
        setCancel={setCancel}
      />
      <button
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
        className={`${
          scrollPosition > 300 ? " fixed " : " hidden "
        } bottom-10 right-5 bg-blue-1 shadow-lg shadow-yellow-1 p-2 rounded-full`}>
        <svg
          width="28px"
          height="28px"
          viewBox="0 0 30 30"
          xmlns="http://www.w3.org/2000/svg"
          fill="#fff">
          <path d="M 16 6.59375 L 15.28125 7.28125 L 2.78125 19.78125 L 4.21875 21.21875 L 16 9.4375 L 27.78125 21.21875 L 29.21875 19.78125 L 16.71875 7.28125 Z" />
        </svg>
      </button>
      <AppContext.Provider
        value={{ sectionName: sectionName, setSectionName: setSectionName }}>
        <Component {...pageProps} />
      </AppContext.Provider>
    </motion.div>
  );
}

export default MyApp;
