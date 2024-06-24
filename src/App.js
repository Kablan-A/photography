import { Route, Routes } from "react-router-dom";
import routs from "./pages/routs";
import "./App.scss";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Shots from "./pages/Shots";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path={routs.home} element={<Home />} />
        <Route path={routs.shots} element={<Shots />} />
      </Routes>
    </>
  );
}

export default App;
