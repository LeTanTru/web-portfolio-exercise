import { useEffect, useState } from 'react';

const Loading = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/android/i.test(userAgent) || /iPad|iPhone|iPod/.test(userAgent)) {
      setIsMobile(true);
    }
  }, []);

  return (
    <div id='loading-screen'>
      <div className='spinner'></div>
      {isMobile && (
        <div className='suggestion'>
          For the best experience, please use a PC or laptop.
        </div>
      )}
    </div>
  );
};

export default Loading;
