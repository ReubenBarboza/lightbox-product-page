import { useCallback, useState } from "react";

const useToggle = (initialState = false) => {
  const [status, setstatus] = useState(initialState);
  const toggle = useCallback(() => setstatus((prev) => !prev), []);
  return { status, toggle };
};

export default useToggle;
