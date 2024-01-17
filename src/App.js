import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { Home } from "./pages/Home/Home";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper-container">
        <Header />
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
