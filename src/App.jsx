import "./App.css";
import { BrowserRouter } from "react-router-dom";
import View from "./components/View/View";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App bg-slate-200">
      <Navbar></Navbar>
      <BrowserRouter>
        <View></View>
      </BrowserRouter>
    </div>
  );
}

export default App;
