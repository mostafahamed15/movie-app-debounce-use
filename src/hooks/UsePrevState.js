import { useEffect, useRef } from 'react';

export default function usePrevState(curentState) {
  const ref = useRef();
  useEffect(() => {
    ref.current = curentState;
  }, [curentState]);

  return ref.current;
}
