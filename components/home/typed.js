import React from "react";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { useTranslation } from "next-i18next";

const TypedTex = () => {
  const { t } = useTranslation();
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(
      el.current,
      {
        strings: [
          t("typed.text1"),
          t("typed.text2"),
          t("typed.text3"),
          t("typed.text4"),
        ],
        startDelay: 400,
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 100,
        smartBackspace: true,
        loop: true,
        showCursor: true,
        cursorChar: "!",
      },
      [t]
    );

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <span ref={el}></span>
    </div>
  );
};

export default TypedTex;
