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
      <div className='loader'>
        {loading.map((char, index) => (
          <span
            key={index}
            className='text-transparent bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text'
          >
            {char}
          </span>
        ))}
      </div>
      {isMobile && (
        <div className='suggestion'>
          For the best experience, please use a PC or laptop.
        </div>
      )}
    </div>
  );
};

export default Loading;
