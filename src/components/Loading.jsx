const Loading = () => {
  const loading = '{Loading}'.split('');

  return (
    <div id='loading-screen'>
      <div className='loader'>
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
