import "./App.css";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { TiMicrophoneOutline } from "react-icons/ti";
import { IoStopCircleOutline } from "react-icons/io5";
import { MdLockReset } from "react-icons/md";

function App() {
  return (
    <>
      <h1 className="heading">Speech to Text </h1>
      <div className="input_box">
        <p className="input_box--text"></p>
      </div>
      <div className="card">
        <button>
          <TiMicrophoneOutline size="20px" />
        </button>
        <button>
          <IoStopCircleOutline size="20px" />
        </button>
        <button>
          <IoCloudDownloadOutline size="20px" />
        </button>
        <button>
          <MdLockReset size="20px" />
        </button>
      </div>
    </>
  );
}

export default App;
