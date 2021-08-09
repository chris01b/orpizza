import { useEffect, useRef } from "react";

export function useInterval(callback: Function, delay: number | null) {
  const savedCallback = useRef<Function>();

  // Remember the latest callback
  useEffect(() => {
    savedCallback.current = callback;
  });

  // Set up the interval
  useEffect(() => {
    const tick = () => savedCallback.current();

    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}