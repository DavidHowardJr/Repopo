import { useState } from "react"
import Drum from "./components/Drum"

function App() {
  const [sounds, setSounds] = useState([
    {
      name: "kick",
      sound: require("./Sounds/bd05.wav").default,
      key: "A",
  },
    {
      name: "clap",
      sound: require("./Sounds/cp01.wav").default,
      key: "S",
  },
    {
      name: "crash",
      sound: require("./Sounds/cr02.wav").default,
      key: "D",
  },
    {
      name: "hihat",
      sound: require("./Sounds/hh02.wav").default,
      key: "F",
  },
    {
      name: "lowtom",
      sound: require("./Sounds/lt01.wav").default,
      key: "G",
  },
    {
      name: "midtom",
      sound: require("./Sounds/mt02.wav").default,
      key: "H",
  },
    {
      name: "snareone",
      sound: require("./Sounds/sd10.wav").default,
      key: "J",
  },
    {
      name: "snaretwo",
      sound: require("./Sounds/sd12.wav").default,
      key: "K",
  }
])

  return (
    <div className="App">
      <h1>React Drumkit</h1>
      <div className="drums">
      {sounds.map((sound, i) => (
        <Drum key={i} letter={sound.key} sound={sound.sound} />
      ))}
        </div>
  </div>
  )
}

export default App;
