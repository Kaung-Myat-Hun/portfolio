import "./App.css";
import { BrowserRouter } from "react-router-dom";
import View from "./components/View/View";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App bg-slate-200">
      <Navbar></Navbar>
      <BrowserRouter>
        <View></View>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
