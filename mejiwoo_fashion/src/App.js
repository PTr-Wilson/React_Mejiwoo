// import Home from './pages/home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./template/Footer/Footer";

import Header from "./template/Header/Header";
import Home from "./pages/Home/Home";

import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
