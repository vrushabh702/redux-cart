import "./App.css";
import User from "./user";

function App() {
  return (
    <div className="App">
      <User data={{ name: "anil sidhu", age: 24 }} />
    </div>
  );
}

export default App;
