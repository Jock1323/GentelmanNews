import React from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import LeftBar from "./Components/SideBars/LeftBar/LeftBar";
import RightBar from "./Components/SideBars/RightBar/RightBar";
function App() {
  return (
    <>
      <Header />
      <div className="container main-container">
        <LeftBar />
        <Main />
        <RightBar />
      </div>
    </>
  );
}

export default App;
