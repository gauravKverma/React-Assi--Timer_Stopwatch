import styles from "./components/Style.module.css";
import Stopwatch from './components/Stopwatch';
import Timer from './components/Timer';
import React, {useState} from 'react';
import MarkDown from "./components/MarkDown";

function App() {
  const [show, setShow] = useState(true)
  return (
    <div>
      <div className={styles.center}>
          {show ? <Timer/> : <Stopwatch/>}
        <div className={styles.divgap}>
        <button className={styles.mainbutton} onClick={()=> setShow(true)}>Timer</button>
        <button className={styles.mainbutton} onClick={()=> setShow(false)}>Stopwatch</button>
        </div>
      </div>
      <div>
        <MarkDown/>
      </div>
    </div>

  );
}

export default App;
