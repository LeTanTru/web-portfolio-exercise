import { Html, useProgress } from '@react-three/drei';
const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <p className='ml-[-50%] mt-10 text-[16px] font-extrabold text-[#f1f1f1]'>
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};
export default Loader;
