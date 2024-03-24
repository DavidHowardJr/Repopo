import './App.css';
import Forecast from "./components/Forecast/Forecast.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>WTHR</h1>
      </header>
      <main>
        <Forecast />
      </main>
      <footer>
        Page created by David Howard
      </footer>
    </div>
  );
}

export default App;
