import logo from "./logo.svg";
import "./App.css";
import HookCounter from "./HookCounter";
import ClassCounter from "./ComponentCounter";

function App() {
  return (
    <div className="container">
      <HookCounter className="box" />
      <ClassCounter className="box" />
    </div>
  );
}

export default App;
