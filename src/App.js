import "./App.css";
import Middlesection from "./Components/MiddleSectin/Middlesection";
import RightSection from "./Components/RightSection/RightSection";
import anime from "animejs";
import Sidebar from "./Components/Sidebar/Sidebar";
import { useEffect, useRef } from "react";

function App() {
  const sidebar = useRef();
  const middle = useRef();
  const right = useRef();

  useEffect(() => {
    sidebar.current = anime.timeline({
      duration: 1000,
      translateX: 300,
    });
  }, []);

  return (
    <div className="main__app">
      <Sidebar sidebar={sidebar} />

      <Middlesection middle={middle} />
      <RightSection right={right} />
    </div>
  );
}

export default App;
