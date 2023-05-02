import { useState } from 'react';

const useHook = () => {
  const [counter, setCounter] = useState(0);

  const add = () => setCounter((previous) => previous + 1);
  const substract = () => setCounter((previous) => previous - 1);

  return { counter, add, substract };
};

export default useHook;
