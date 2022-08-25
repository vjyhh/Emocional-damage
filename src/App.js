import React, { useState } from "react";
import Counter from "./Components/Counter";
import "./styles/App.css";
function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <div className="post">
        <div className="post_content">
          <strong>1. Java Script</strong>
          <div>Java Script - program lang</div>
        </div>
        <div className="post_btns">
          <button>Удалить пост</button>
        </div>
      </div>
    </div>
  );
}

export default App;
