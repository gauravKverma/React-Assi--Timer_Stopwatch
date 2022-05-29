import React , {useState} from 'react'
import { useRef } from 'react'

const Stopwatch = () => {
    const [time, setTime] = useState(0)
    const timerId=useRef(false);
    function msToTime(duration) {
        var milliseconds = Math.floor((duration % 1000) / 100),
          seconds = Math.floor((duration / 1000) % 60),
          minutes = Math.floor((duration / (1000 * 60)) % 60),
          hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
      
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
      
        return hours + ":" + minutes + ":" + seconds + ":" + milliseconds;
      }

    const start = () => {
            if(!timerId.current){
            let id=setInterval(()=>{
                setTime((time)=> time+100)
            },100)
            timerId.current=id;
        }
    }

    const stop = () =>{
        clearInterval(timerId.current)
        timerId.current=false;
    }
    
    const reset = () => {
        clearInterval(timerId.current)
        setTime(0);
        timerId.current=false;
    }
  return (
    <div style={{height:"290px"}}>
        <h2>{msToTime(time)}</h2>
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
    </div>
    
  )
}

export default Stopwatch