import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contuct from "./pages/Contuct";
import Home from "./pages/Home";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contuct" element={<Contuct />} />
      </Routes>
    </div>
  );
};

export default App;
