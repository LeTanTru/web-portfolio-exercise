import { useEffect, useState } from 'react';

const useWaveText = (text, delay = 0.1) => {
  const [animatedText, setAnimatedText] = useState([]);

  useEffect(() => {
    const characters = text.split('');
    const animatedChars = characters.map((char, index) => ({
      char,
      style: { animationDelay: `${index * delay}s` }
    }));
    setAnimatedText(animatedChars);
  }, [text, delay]);

  return animatedText;
};

export default useWaveText;
