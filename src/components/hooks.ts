import { useState, useEffect } from "react";

// https://nick.scialli.me/writing-a-custom-react-usedebounce-hook-with-typescript/
export const useDebounce = <T>(
  initialValue: T,
  timeout: number = 1000
): [T, T, React.Dispatch<T>] => {
  const [value, setValue] = useState<T>(initialValue);
  const [debouncedValue, setDebouncedValue] = useState<T>(initialValue);

  useEffect(() => {
    const debounce = setTimeout(() => {
      setDebouncedValue(value);
    }, timeout);
    return () => {
      clearTimeout(debounce);
    };
  }, [value, timeout]);

  return [debouncedValue, value, setValue];
};

// https://stackoverflow.com/a/42234988/1186541
export const useOutsideNotifier = (ref: any, callback: any) => {
  // Execute the callback if clicked on outside of element
  function handleClickOutside(event: any) {
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
};
