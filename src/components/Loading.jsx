import { useEffect, useState } from 'react';

const Loading = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/android/i.test(userAgent) || /iPad|iPhone|iPod/.test(userAgent)) {
      setIsMobile(true);
    }
  }, []);
  const loading = '{Loading}'.split('');

  return (
    <div id='loading-screen'>
      <div className='loader text-[10vw] xs:text-[10vh]'>
        {loading.map((char, index) => (
          <span
            key={index}
            className='bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent'
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Loading;
