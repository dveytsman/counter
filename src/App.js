import logo from "./logo.svg";
import "./App.css";
import HookCounter from "./HookCounter";
import ClassCounter from "./ComponentCounter";

function App() {
  return (
    <div className="App">
      <HookCounter />
      <ClassCounter />
    </div>
  );
}

export default App;
