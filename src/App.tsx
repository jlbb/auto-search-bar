import React from "react";
import SearchBox from "./components/SearchBox";
import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>
        Search <span className="highlight">Star Wars</span> planets
      </h1>
      <SearchBox />
    </div>
  );
};

export default App;
