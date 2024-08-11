'use client';

import { NextPage } from 'next';
import { useEffect, useRef } from 'react';

interface AppearsTextProps
  extends React.ComponentPropsWithoutRef<'p'> {
  text: string;
}

const AppearsText: NextPage<AppearsTextProps> = ({ text }) => {
  const textWords = text.split(' ');
  const wordsRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    wordsRef.current.forEach((word) => {
      const callback: IntersectionObserverCallback = (
        entries,
        _observer
      ) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLSpanElement;
          if (entry.isIntersecting) {
            element.dataset.visible = 'true';
          } else {
            element.dataset.visible = 'false';
          }
        });
      };

      const options: IntersectionObserverInit = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      };

      const observer = new IntersectionObserver(callback, options);
      observer.observe(word);
    });
  }, []);
  return (
    <p className="font-semibold text-3xl md:text-5xl lg:text-7xl text-center w-full mx-auto max-w-5xl leading-tight lg:leading-tight flex flex-wrap gap-3 justify-center">
      {textWords.map((word, index) => (
        <span
          key={word + index}
          ref={(el) => {
            el && (wordsRef.current[index] = el);
          }}
          className={`word bg-clip-text text-transparent white_gradient opacity-40 transition-all duration-500 data-[visible=true]:opacity-100 delay-[${
            index * 100
          }ms]`}
        >
          {word}
        </span>
      ))}
    </p>
  );
};

export default AppearsText;
