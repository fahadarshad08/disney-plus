import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";
import './App.css';
import Detail from "./components/Detail";

function App() {
  return (
    <div className="App">
      <Router>
      <Header />

        <Routes>
        <Route path="/" element={<Login />}>
              <Route path=":id" element={<Login />} />
          </Route>
     
          <Route path="/Home" element={<Home />}>
              <Route path=":id" element={<Home />} />
          </Route>
          <Route path="/Detail" element={<Detail />}>
              <Route path=":id" element={<Detail />} />
          </Route>
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
