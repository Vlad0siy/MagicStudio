import React from 'react';
import Header from "./Components/Header";
import StarField from "./Components/StarField";

const App = () => {
  return (
      <div className="App" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <Header/>
        <StarField/>
      </div>
  );
};

export default App;