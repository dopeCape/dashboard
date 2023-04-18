import "./App.css";
import Middlesection from "./Components/MiddleSectin/Middlesection";
import RightSection from "./Components/RightSection/RightSection";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <div className="main__app">
      <Sidebar />

      <Middlesection />
      <RightSection />
    </div>
  );
}

export default App;
