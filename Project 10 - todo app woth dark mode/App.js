import React, { useState, useReducer, useEffect } from "react";
import "./style.scss";
import Sun from "./compoents/sun";
import Moon from "./compoents/moon";
import Task from "./compoents/task";

const alertStylesObj = {
  addedObj: {
    background: "#1a830386",
    color: "#36ff0e",
    text: "Task Successfully added",
  },
  successObj: {
    background: "#1a830386",
    color: "#36ff0e",
    text: "Task Completed",
  },
  removeObj: {
    background: "#7d021a86",
    color: "#ff1a0e",
    text: "Task removed",
  },
  removeAllObj: {
    background: "#7d021a86",
    color: "#ff1a0e",
    text: "All tasks Removed",
  },
};

const InitialAlertStylesObj = {
  background: " ",
  color: " ",
  text: " ",
};

const mode = [
  //dark
  {
    containerETButton: {
      background: "#1e2749",
    },
    todocontainer: {
      border: "2px solid #e4d9ff",
    },
    buttonContainer: {
      background: "#e4d9ff",
      outline: "solid #e4d9ff",
    },
    buttonSvgEtTitle: {
      color: "#e4d9ff",
    },
    inputs: {
      background: "#e4d9ff",
      color: "#1e2749",
    },
  },
  //light
  {
    containerETButton: {
      background: "#e4d9ff",
    },
    todocontainer: {
      border: "2px solid #4055aa",
    },
    buttonContainer: {
      background: "#4055aa",
      outline: "solid #4055aa",
    },
    buttonSvgEtTitle: {
      color: "#4055aa",
    },
    inputs: {
      background: "#4055aa",
      color: "#e4d9ff",
    },
  },
];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [entry, setEntry] = useState("");
  const [session,setSession] = useState([]);
  const [state, dispatch] = useReducer(reducerF, InitialAlertStylesObj)

 function reducerF(state, action) {
  switch(action.type) {
    case "added": 
      return state = alertStylesObj.addedObj 
    case "success": 
      return state = alertStylesObj.successObj 
    case "removeOne": 
      return state = alertStylesObj.removeObj
    case "removeAll": 
      return state = alertStylesObj.removeAllObj
  }
 }

  function changeStyleDark() {
    return darkMode? 1:0
  }

  function changeSess(e) {
    e.preventDefault()
    setEntry()
    
    if(!entry) {
      console.log("ass")
      return
    }
     setSession((prev)=>{
       return [...prev,entry]
    })
   dispatch({type:"added"})
   document.querySelector(".input-text").value = ""
  }

  sessionStorage.setItem("list", JSON.stringify(session))

  useEffect(()=>{
    RenderList();
  },[session])
  

  function deleteTask(e) {
    const array = RenderList()
    let idx = e.target.id;
    let valueToRemove = array[idx];
    const newArray =  array.filter(element => !valueToRemove.includes(element));
    setSession(newArray)
    sessionStorage.setItem("list", JSON.stringify(newArray))
    dispatch({type:"removeOne"})
  }

  const RenderList = () => {
    return JSON.parse(sessionStorage.getItem("list"))
   }

  return (
    <div style={mode[changeStyleDark()].containerETButton} className="container">
      <div style={mode[changeStyleDark()].todocontainer}  className="todo-container">
        <div className="dark-mode-container">
          <div style={mode[changeStyleDark()].inputs} onClick={ ()=>{
               setDarkMode((prev)=>{
                return !prev
                })
              }
            }
            className= {darkMode? "button-container light-mode": "button-container dark-mode" }>  
            <button style={mode[changeStyleDark()].containerETButton}  className="dark-mode-btn" 
              >
              {darkMode? <Sun/> :<Moon/>}
            </button>
          </div>
        </div>
        <div style={state} className="alert-container">
          <p  className="alert-text">{state.text}</p>
        </div>
        <h1 className="title" style={mode[changeStyleDark()].buttonSvgEtTitle}>
          To do list
        </h1>
        <form onSubmit={changeSess} >
          <input
          onChange={(e)=>{
           const value = e.target.value
           setEntry(value)
          }}
            placeholder="Add new ask"
            type="text"
            className="input-text"
            style={mode[changeStyleDark()].inputs}
          />
          <button
          onClick={changeSess}
            className="btn-text"
            type="submit"
            style={mode[changeStyleDark()].inputs}
          >
            New
          </button>
        </form>
        <div className="tasks-container"> 
          {
            RenderList().map((item, idx) =>{
              return <Task key={idx} propOne={item} propTwo={idx} propFour={darkMode} propTre={deleteTask} propFive={()=>dispatch({type:"success"})}/>
            })
          }
        </div>
        <button onClick={()=>{
          setSession([])
          setEntry()
          sessionStorage.clear()  
          dispatch({type:"removeAll"})
        }} className="clearAll">Clear All</button>
      </div>
    </div>
  );
}

export default App;
