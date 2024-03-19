import "./App.css";
import { UserContextProvider } from "./context/UserContext";
import Router from "./router";

function App() {
  return (
    <div className="bg-white">
      <UserContextProvider>
        <Router></Router>
      </UserContextProvider>

    </div>
  );
}

export default App;
