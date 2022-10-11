import React from 'react'

function Comp({prop}) {
    // const [state,setState]=React.useState()
    // React.useEffect(()=>{
    //     document.addEventListener('keydown',pressKey)
    // })
    // const pressKey=(e)=>{
    //    setState(e.key)
    // }
    // if(state==="Enter")
    // {
    //     return(
    //         <div style={{width:"10%",backgroundColor:'red'}}></div>
    //     )
    // }
    if(prop==='')
    {
        return(
            <div style={{width:"100%",backgroundColor:'red'}}></div>
        )
    }

    if(prop===" ")
    {
      return (
        <div style={{width:"10px"}} >
          </div>   
        // <Box width='10px'>
        //   </Box>   
    )
      
    }
    if(prop===prop.toUpperCase())
    {
  return (
    <div>
    <img src={`${prop}.png`} alt={prop} height='25'/>
    </div>
    // <Box pt='3'>
    // <img src={`${prop}.png`} alt={prop} height='20px'/>
    // </Box>
  )
}
if(prop===prop.toLowerCase()){
    if(prop==='y'||prop==='g'||prop==='p'||prop==='q'||prop==='z'||prop==='j')
    {
      return (
        <div style={{marginTop:"3px"}}>
        <img key={prop.length} src={`smallcase/${prop}.png`}  alt={prop} height='33' width='15px'/>
        </div>
        // <Box mt='3px' pt='3'>
        // <img key={prop.length} src={`smallcase/${prop}.png`}  alt={prop} height='30px' width='15px'/>
        // </Box>
      )
    }
    return (
      <div>
      <img key={prop.length} src={`smallcase/${prop}.png`}  alt={prop} height='23'/>
      </div>
      // <Box pt='3'>
      // <img key={prop.length} src={`smallcase/${prop}.png`}  alt={prop} height='20px'/>
      // </Box>
    )
  }
}

export default Comp

