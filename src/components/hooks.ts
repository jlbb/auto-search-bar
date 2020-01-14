import { useState, useEffect } from "react";

export const useDebounce = (value: any, timeout: number = 1000) => {
  const [state, setState] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setState(value), timeout);

    return () => clearTimeout(handler);
  }, [value]);

  return state;
};
