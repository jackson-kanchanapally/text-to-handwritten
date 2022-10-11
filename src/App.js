import React from 'react'
import nextId from "react-id-generator";
import './App.css';
import Comp from './components/Comp';
function App() {
  const UniId=nextId()
const [state,setState] =React.useState('')
const changEvent=(e)=>{
 setState(e.target.value)
}

const arr=Array.from(state)
  return (<>
    <textarea style={{width:'80%',height:'30%'}} type="text" value={state} onChange={changEvent}/>
    <div>
    <h1>
      containt
    </h1>
    <div style={{display:"flex",width:'70%',justifyContent:'flex-start',alignItems:"center"}}> 
    {arr.map((e)=>{
      return <Comp prop={e} key={e.UniId}/>

})}
</div>
    </div>
    </>
  );
}

export default App;
