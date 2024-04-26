import "./App.css";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { TiMicrophoneOutline } from "react-icons/ti";
import { IoStopCircleOutline } from "react-icons/io5";
import { MdLockReset } from "react-icons/md";
import 'regenerator-runtime/runtime'
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function App() {

  const startListening= ()=>SpeechRecognition.startListening({ continuous: true , language:"en-IN"})
  const {
    transcript,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  const downloadTranscript = () => {
    const element = document.createElement('a');
    const file = new Blob([transcript], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'transcript.txt';
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };
  return (
    <>
      <h1 className="heading">Speech to Text </h1>
      <div className="input_box ">
        <p className="input_box--text">{transcript}</p>
      </div>
      <div className="card">
        <button onClick={startListening} area-label="start Listening">
          <TiMicrophoneOutline size="20px" />
        </button>
        <button onClick={SpeechRecognition.stopListening} area-label="stop listening">
          <IoStopCircleOutline size="20px" />
        </button>
        <button onClick={downloadTranscript} area-label="download transcript">
          <IoCloudDownloadOutline size="20px" />
        </button>
        <button onClick={resetTranscript} area-label="reset transcript">
          <MdLockReset size="20px" />
        </button>
      </div>
    </>
  );
}

export default App;
