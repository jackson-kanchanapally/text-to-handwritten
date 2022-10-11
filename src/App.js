import React from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
const [state,setState] =React.useState('')
const changEvent=(e)=>{
 setState(e.target.value)
}

const nL=(e)=>{
  if(e.key==='Enter')
  {
    
  }
}
const pt={paddingTop:"10px"}
const arr=Array.from(state)
  return (<>
    <textarea style={{width:'80%',height:'30%'}} type="text" value={state} onChange={changEvent}/>
    <div>
    <h1>
      containt
    </h1>
    <div style={{display:"flex",width:'70%',justifyContent:'center'}}> 
    {arr.map((e)=>{
      if(e===" ")
      {
        return (
          <div style={{width:"10px"}}>
            </div>
          
        )
        
      }
      if(e===e.toUpperCase())
      {
        return (
          <div>
          <img key={e.length} src={`${e}.png`} alt={e} height='20'/>
          </div>
        )
      }
      
      if(e===e.toLowerCase()){
        if(e==='y'||e==='g'||e==='p'||e==='q'||e==='z')
        {
          return (
            <div>
            <img key={e.length} src={`smallcase/${e}.png`}  alt={e} height='32' width='15px'/>
            </div>
          )
        }
        return (
          <div>
          <img key={e.length} src={`smallcase/${e}.png`}  alt={e} height='20'/>
          </div>
        )
      }
})}
</div>
    </div>
    </>
  );
}

export default App;
