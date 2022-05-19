import React, { createContext, useContext } from "react";
import useToggle from "../hooks/useToggle";

const OverlayContext = createContext();
// const OverlayToggleContext = createContext();

const OverlayProvider = ({ children }) => {
  // const [overlay, setoverlay] = useState(false);

  // function toggleOverlay() {
  //   setoverlay((prev) => !prev);
  // }
  const { status: overlay, toggle: toggleOverlay } = useToggle(false);
  const { status: isLightBoxOn, toggle: toggleLightBox } = useToggle(false);

  return (
    <OverlayContext.Provider
      value={{ overlay, toggleOverlay, isLightBoxOn, toggleLightBox }}
    >
      {children}
    </OverlayContext.Provider>
  );
};

const useOverlay = () => {
  return useContext(OverlayContext);
};

// const useOverlayToggle = () => {
//   return useContext(OverlayToggleContext);
// };

export { OverlayProvider, useOverlay };
