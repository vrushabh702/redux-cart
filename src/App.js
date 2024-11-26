import "./App.css";
import HomeContainer from "./containers/HomeContainer";
import User from "./user";

function App() {
  return (
    <div className="App">
      {/* <User data={{ name: "anil sidhu", age: 24 }} /> */}
      <HomeContainer />
    </div>
  );
}

export default App;
