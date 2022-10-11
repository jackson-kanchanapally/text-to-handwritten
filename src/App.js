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
    <textarea style={{width:'80%',height:'30%',marginLeft:'80px'}} type="text" value={state} onChange={changEvent}/>
    <div>
    <center>
    <h1>
      containt
    </h1>
    </center>
    <div style={{display:"flex",width:'70%',justifyContent:'center',alignItems:"center",
    background: 'white',
    display: 'block',
    margin:' 0 auto',
    marginBottom: '0.5cm',
    boxShadow: '0 0 0.5cm rgba(0,0,0,0.5)',
    width: '21cm',
    height: '29.7cm', 
    padding:'100px 0px 80px 50px'
  }}> 
    <div style={{display:'flex',flexWrap: 'wrap',width:'90%',justifyContent:'flex-start'}}>
    {arr.map((e)=>{
      return <Comp prop={e} key={e.UniId}/>

})}
</div>
</div>


    </div>
    </>
  );
}

export default App;
