import { useState } from "react"


function App() {
 
  let[colors, setColors]= useState()
  document.body.backgroundColor = `${colors}`;
  console.log(colors);
  

  return (
    <div className="w-full h-screen gap-5 justify-center " style={{backgroundColor: colors}}>
    <h1>Color Changer</h1>
      <div className="flex bg-gray p-2 m-3">
        <button onClick={()=> setColors("green")}>green</button>
        <button onClick={()=> setColors("yellow")} >Yellow</button>
        <button onClick={()=> setColors("blue")}>blue</button>
        <button onClick={()=> setColors("white")}>white</button>
        <button onClick={()=> setColors("pink")}>pink</button>
        <button onClick={()=> setColors("orange")}>orange</button>
      </div>
      
    </div>
  )
}

export default App
