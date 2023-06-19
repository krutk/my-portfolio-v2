import { useState, useEffect } from 'react';

const TypingAnimation = ({ words, speed }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState('');

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, speed);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const word = words[currentWordIndex];
    const wordLength = word.length;
    let currentLength = 0;
    let wordInterval;

    const typing = () => {
      setCurrentWord(word.substring(0, currentLength));
      currentLength++;

      if (currentLength > wordLength) {
        clearInterval(wordInterval);
      }
    };

    wordInterval = setInterval(typing, speed);

    return () => clearInterval(wordInterval);
  }, [currentWordIndex]);

  return (
    <span className="typing-animation">
      {currentWord}
      <span className="border-b-2 border-black">|</span>
    </span>
  );
};

export default TypingAnimation;
