import React from 'react'

const MarkDown = () => {
  return (
    <div>
        <h3>Minimum Viable Product</h3>
        <input type="checkbox" checked={true}/>You must have implemented a stopwatch that lets you start, stop and reset. <br />
        <input type="checkbox" checked={true}/>The stopwatch must display the number of seconds and milliseconds. <br /> 
        <input type="checkbox" checked={true}/>The timer must allow a user to manually enter the time using an inputbox, in seconds. <br />
        <input type="checkbox" checked={true}/>The user should be able to start, stop and reset the timer. <br />
        <input type="checkbox" checked={true}/>The user should be able to toggle between the timer and the stopwatch using tabs just like the google timer. <br />
        <input type="checkbox" checked={true}/>The timer should not increment twice if its already clicked. <br />
        <h3>Stretch Goals</h3>
        <input type="checkbox" checked={true}/>The stopwatch must also display the minutes and hours. <br />
        <input type="checkbox" checked={false}/>The timer must also display the minutes and hours.<br />
        <input type="checkbox" checked={false}/>The timer must allow the user to input the time in seconds minutes and hours just like the Google timer. <br />
    </div>
  )
}

export default MarkDown