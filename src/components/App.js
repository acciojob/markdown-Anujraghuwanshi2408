
import React , {useEffect, useState} from "react"



const App = () => {
  const[change , setChange] = useState("")
    useEffect(() => {
        document.getElementById("markDownPrev").innerText = change
    }, [change])

    return (
        <div>
            <input className="markDown" value={change} onChange={(e)=>setChange(e.target.value)} type="text"></input>
            <div id="markDownPrev"></div>
        </div>
    )
}

export default App