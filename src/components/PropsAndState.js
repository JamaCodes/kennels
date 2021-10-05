import React, { useState } from "react"

export const PropsAndState = ({ yourName }) => {
  let [countClicks, setCountClicks] = useState(0)
let [saveNow, setSaveNow ] = useState(false)

  const handleClick = () => {
    //good practice:
    //make a copy of state, modify it, and then setState to the copy
    const newCountClicks = ++countClicks
    setCountClicks(newCountClicks)
  }
  
const handleChange = (event) => {
  console.log("what is event?", event)
let newSaveNow = saveNow
newSaveNow = true;
setSaveNow(newSaveNow);

}
  return (
    <>
      <h3>Welcome, {yourName} </h3>
      <p>{countClicks}</p>
      <button onClick={(handleClick)}>Click Me</button>
      <div>
      <textarea type="text" name="notes" placeholder='notes' onChange={handleChange} />

    <button id="save" disabled={saveNow ? false : true}>Save Now</button>

    </div>
    </>
    
  )
}

