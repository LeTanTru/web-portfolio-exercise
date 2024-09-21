const Loading = () => {
  return (
    <div id='loading-screen'>
      <div className='loader relative h-[100px] w-[100px] text-[10vw] xs:text-[10vh]'>
        <div
          className='loader-item absolute h-full w-full rounded-full border-b-[6px] border-[#f13a8f]'
          style={{ transform: 'rotateX(35deg) rotateY(-45deg)' }}
        ></div>
        <div
          className='loader-item absolute h-full w-full rounded-full border-r-[6px] border-[#4bc8eb]'
          style={{ transform: 'rotateX(50deg) rotateY(10deg)' }}
        ></div>
        <div
          className='loader-item absolute h-full w-full rounded-full border-t-[6px] border-[#dabe32]'
          style={{ transform: 'rotateX(35deg) rotateY(55deg)' }}
        ></div>
      </div>
    </div>
  );
};

export default Loading;
