import React from 'react'

function Comp({prop}) {
    if(prop===" ")
    {
      return (
        <div style={{width:"10px"}} >
          </div>   
    )
      
    }
    if(prop===prop.toUpperCase())
    {
  return (
    <div>
    <img src={`${prop}.png`} alt={prop} height='20'/>
    </div>
  )
}
if(prop===prop.toLowerCase()){
    if(prop==='y'||prop==='g'||prop==='p'||prop==='q'||prop==='z'||prop==='j')
    {
      return (
        <div style={{marginTop:"10px"}}>
        <img key={prop.length} src={`smallcase/${prop}.png`}  alt={prop} height='30' width='15px'/>
        </div>
      )
    }
    return (
      <div>
      <img key={prop.length} src={`smallcase/${prop}.png`}  alt={prop} height='20'/>
      </div>
    )
  }
}

export default Comp

