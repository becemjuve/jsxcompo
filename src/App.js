import React from "react";
import Carrd from "./components/Carrd";
import './App.css';



const App = () => {
  const firstName = "Becem Alibi";

  return (
    <div>
            <Carrd/>
      <div>
        <p><h2>Hello, {firstName ? firstName : "there"}!</h2></p>
        {firstName && <img src="./dell.jpg" alt="" />}
      </div>
    </div>
  );
};

export default App;
