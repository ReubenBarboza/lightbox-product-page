import Navbar from "./components/Navbar/Navbar";

import classNames from "classnames";
import Main from "./components/Main";
import { useOverlay } from "./context/overlay-context";
import { NavbarProvider } from "./context/navbar-context";
import { ImagesProvider } from "./context/images-context";

function App() {
  const { overlay } = useOverlay();
  return (
    <div
      className={classNames(
        "App font-['Kumbh_Sans',sans-serif] min-h-screen relative",
        {
          "bg-[rgba(0,0,0,0.6)]": overlay,
        }
      )}
    >
      <NavbarProvider>
        <Navbar />
      </NavbarProvider>
      <ImagesProvider>
        <Main />
      </ImagesProvider>
    </div>
  );
}

export default App;
