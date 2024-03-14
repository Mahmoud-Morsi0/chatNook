import { useState } from "react";

import "./App.css";
import Search from "./Components/Search/Search";

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello at our ChatNook</h1>
      <Search />
    </div>
  );
}

export default App;
