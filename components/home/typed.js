import React from "react";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

const TypedTex = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Development and implementation ERP systems",
        "Development of web applications",
        "User interface, User experience design",
        "Optimization IT consalting and infrastructures",
      ],
      startDelay: 400,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: "!",
    });

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
