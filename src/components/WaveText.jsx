import useWaveText from '../hooks/useWaveText';

const WaveText = ({ text, delay = 0.1 }) => {
  const animatedText = useWaveText(text, delay);

  return (
    <span className='bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent'>
      {animatedText.map((item, index) => (
        <span key={index} className='wave-text' style={item.style}>
          {item.char === ' ' ? '\u00A0' : item.char}
        </span>
      ))}
    </span>
  );
};

export default WaveText;
