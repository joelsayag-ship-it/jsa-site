'use client';

import { useEffect, useRef } from 'react';

const WORDS = [
  'freelances',
  'consultants',
  'agences',
  'indépendants',
  'professions libérales',
];

const TYPING_SPEED  = 60;
const ERASING_SPEED = 35;
const PAUSE_AFTER   = 2000;
const PAUSE_BEFORE  = 350;

export default function TypewriterWord() {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const textEl = textRef.current;
    if (!textEl) return;

    let cancelled = false;
    let wordIndex = 0;
    const text = textEl;

    function typeWord(word: string, callback: () => void) {
      let i = 0;
      function next() {
        if (cancelled) return;
        if (i <= word.length) {
          text.textContent = word.slice(0, i);
          i++;
          setTimeout(next, TYPING_SPEED + Math.random() * 25);
        } else {
          setTimeout(callback, PAUSE_AFTER);
        }
      }
      next();
    }

    function eraseWord(word: string, callback: () => void) {
      let i = word.length;
      function next() {
        if (cancelled) return;
        if (i >= 0) {
          text.textContent = word.slice(0, i);
          i--;
          setTimeout(next, ERASING_SPEED);
        } else {
          setTimeout(callback, PAUSE_BEFORE);
        }
      }
      next();
    }

    function loop() {
      if (cancelled) return;
      const word = WORDS[wordIndex % WORDS.length];
      typeWord(word, () => {
        eraseWord(word, () => {
          wordIndex++;
          loop();
        });
      });
    }

    loop();

    return () => { cancelled = true; };
  }, []);

  return (
    <span className="tw-word">
      <span ref={textRef} className="tw-text" />
      <span className="tw-cursor" />
    </span>
  );
}
