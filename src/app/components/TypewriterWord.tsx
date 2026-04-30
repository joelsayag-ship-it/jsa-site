'use client';

import { useEffect, useState } from 'react';

const WORDS = [
  'freelances',
  'consultants',
  'agences',
  'indépendants',
];

const VISIBLE_MS = 3000;
const FADE_MS = 500;

export default function TypewriterWord() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % WORDS.length);
        setVisible(true);
      }, FADE_MS);
    }, VISIBLE_MS + FADE_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="tw-word">
      <span className="tw-ghost" aria-hidden="true">indépendants</span>
      <span
        className="tw-live tw-text"
        style={{
          opacity: visible ? 1 : 0,
          transition: `opacity ${FADE_MS}ms ease-in-out`,
        }}
      >
        {WORDS[index]}
      </span>
    </span>
  );
}
