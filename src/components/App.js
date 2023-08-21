
import React , {useEffect, useState} from "react"



const App = () => {
  const[change , setChange] = useState("")
    useEffect(() => {
        document.getElementById("markDown").innerText = change
    }, [change])

    return (
        <div className="app">
          <div className="markDownContainer">
            <textarea 
            value={change} 
            onChange={(e) => setChange(e.target.value)}
            />
          </div>
          <div className="markDownPrev">
            <div id="markDown">
                
            </div>
          </div>
        </div>
    )
}

export default App