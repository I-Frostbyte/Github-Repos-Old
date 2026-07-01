import React from "react";
import Hero from "./components/Hero";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";


function App() {
  return (
    <div className="row justify-content-center">
      <div className="col-lg-2">
        <LeftSidebar />
      </div>
      <div className="col-lg-7 bg-light">
        <Hero />
      </div>
      <div className="col-lg-3">
        <RightSidebar />
      </div>
    </div>
  );
}

export default App;
