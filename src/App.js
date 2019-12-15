import React from "react";
import "./App.css";
// import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import "./scss/index.scss";
import Navigation from "./components/Navigation";
import Main from "./components/Main";

function App() {
  return (
    <div>
      <Navigation />
      <Main />
    </div>
  );
}

export default App;
