import { Routes, Route, BrowserRouter } from "react-router-dom";
import Character from "./components/Character";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/character/:id" element={<Character />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
