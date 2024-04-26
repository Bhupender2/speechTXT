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
  return (
    <>
      <h1 className="heading">Speech to Text </h1>
      <div className="input_box">
        <p className="input_box--text">{transcript}</p>
      </div>
      <div className="card">
        <button onClick={startListening}>
          <TiMicrophoneOutline size="20px" />
        </button>
        <button onClick={SpeechRecognition.stopListening}>
          <IoStopCircleOutline size="20px" />
        </button>
        <button>
          <IoCloudDownloadOutline size="20px" />
        </button>
        <button onClick={resetTranscript}>
          <MdLockReset size="20px" />
        </button>
      </div>
    </>
  );
}

export default App;
