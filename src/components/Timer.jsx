import React , {useState} from 'react'
import { useRef } from 'react'

const Timer = () => {
    let [time, setTime] = useState(0)
    const timerId=useRef(false)

    const start = () => {
            if(!timerId.current){
            let id=setInterval(()=>{
                
                setTime(time=> time>0 ?
                
                time-1 : 0);
                
            },1000)
            timerId.current=id;
        }
        document.querySelector("#input").value="";
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
    const addTime = (e) => {
        time=e.target.value;
        setTime(time);
    }
  return (
    <div style={{height:"300px"}}>
        <input id='input' type="text" onChange={addTime}/>
        <h2>{time}</h2>
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
    </div>
    
  )
}

export default Timer