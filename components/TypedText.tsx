"use client";

import { useEffect, useState } from "react";
import { typedPhrases } from "@/lib/data";

export default function TypedText() {
  const [text, setText] = useState("");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const timer = setTimeout(() => setText(typedPhrases[0]), 0);
      return () => clearTimeout(timer);
    }

    let phraseIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const phrase = typedPhrases[phraseIndex];
      charIndex += deleting ? -1 : 1;
      setText(phrase.slice(0, charIndex));

      let delay = deleting ? 40 : 80;
      if (!deleting && charIndex === phrase.length) {
        delay = 2000;
        deleting = true;
      } else if (deleting && charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % typedPhrases.length;
        delay = 400;
      }
      timer = setTimeout(tick, delay);
    };

    timer = setTimeout(tick, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <span>
      {text}
      <span className="caret ml-1 inline-block h-[1em] w-[3px] translate-y-[0.1em] bg-accent" />
    </span>
  );
}
