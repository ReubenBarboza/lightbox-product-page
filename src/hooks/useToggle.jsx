import { useCallback, useState } from "react";

const useToggle = (initialState = false) => {
  const [status, setstatus] = useState(initialState);
  const toggle = useCallback(
    (value) =>
      setstatus((prev) => (typeof value === "boolean" ? value : !prev)),
    []
  );
  return { status, toggle };
};

export default useToggle;
