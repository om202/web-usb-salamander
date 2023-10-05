import "./App.css";
import { useState } from "react";

function App() {
  const a1 = new Audio('/s1.wav');
  const a2 = new Audio('/s2.wav');
  const a3 = new Audio('/s3.wav');
  const a4 = new Audio('/s4.wav');
  const a5 = new Audio('/s5.wav');
  const a6 = new Audio('/s6.wav');

  const [midiAccess, setMidiAccess] = useState(null);

  async function tryConnect() {
    try {
      function onMIDISuccess(midiAccess) {
        const midiInput = midiAccess.inputs;

        if (midiInput.size > 0) {
          const inputPort = midiInput.values().next().value;
          if (inputPort) {
            inputPort.onmidimessage = (event) => {
              setMidiAccess('MIDI Access OK ' + event.data[1]);
              if(event.data[1]===28) {
                setTimeout(() => {}, 1000);
                a1.play()
              };
              event.data[1]===29 && a2.play();
              event.data[1]===32 && a3.play();
              event.data[1]===33 && a4.play();
              event.data[1]===36 && a5.play();
              event.data[1]===37 && a6.play();
            };
          }
        }
      }

      // Function to handle MIDI device errors
      function onMIDIFailure(error) {
        console.error(`MIDI access failed: ${error}`);
      }

      // Request MIDI access
      if (navigator.requestMIDIAccess) {
        navigator.requestMIDIAccess().then(onMIDISuccess).catch(onMIDIFailure);
      } else {
        console.error("Web MIDI API is not supported in this browser.");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
      <h1>Web USB</h1>
      <button onClick={tryConnect}>Try Connect</button>
      <p>MIDI ACCESS : {midiAccess}</p>
    </div>
  );
}

export default App;
