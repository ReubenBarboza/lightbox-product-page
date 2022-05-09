import Navbar from "./components/Navbar";
import { useState } from "react";
import classNames from "classnames";

function App() {
  const [overlay, setoverlay] = useState(false);
  return (
    <div
      className={classNames("App font-['Kumbh_Sans',sans-serif] min-h-screen", {
        "bg-[rgba(0,0,0,0.35)]": overlay,
      })}
    >
      <Navbar overlay={overlay} setoverlay={setoverlay} />
    </div>
  );
}

export default App;
