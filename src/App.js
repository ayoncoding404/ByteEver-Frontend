
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Home/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Home/Navbar";

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Home />
      <Footer />
      </BrowserRouter>
    </>
    
  );
}

export default App;
