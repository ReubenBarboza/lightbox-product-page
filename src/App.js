import Navbar from "./components/Navbar";
import { useState } from "react";
import classNames from "classnames";
import Main from "./components/Main";

function App() {
  const [overlay, setoverlay] = useState(false);

  return (
    <div
      className={classNames(
        "App font-['Kumbh_Sans',sans-serif] min-h-screen relative",
        {
          "bg-[rgba(0,0,0,0.6)]": overlay,
        }
      )}
    >
      <Navbar overlay={overlay} setoverlay={setoverlay} />
      <Main overlay={overlay} setoverlay={setoverlay} />
    </div>
  );
}

export default App;
