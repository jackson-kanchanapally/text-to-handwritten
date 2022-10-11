import React from 'react'
import nextId from "react-id-generator";
import './App.css';
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import Comp from './components/Comp';

function App() {
  const exportPDF=()=>{
    const Ppage=document.getElementById("Cp-a4")
    html2canvas(Ppage).then(canvas=>{
    const imgW=208;
    const imgH=canvas.height*imgW/canvas.width;
    const imgData=canvas.toDataURL('img/png');
    const pdf=new jsPDF('p','mm','a4')
    pdf.addImage(imgData,'PNG',10,10,imgW,imgH);
    pdf.save("Assignment.pdf")
  })
  }
  const UniId=nextId()
const [state,setState] =React.useState('')
const changEvent=(e)=>{
 setState(e.target.value)
}

const arr=Array.from(state)
 const [keyp,setKeyp]=React.useState()
    React.useEffect(()=>{
        document.addEventListener('keydown',pressKey)
    })
    const pressKey=(e)=>{
       setKeyp(e.key)
    }
  return (<>
    <textarea placeholder="Enter Here.." style={{width:'70%',height:'200px',marginLeft:'180px',marginTop:'50px',fontSize:'20px',padding:'10px'}} type="text" value={state} onChange={changEvent}/>
    <div>
    <center>
    <h1 style={{color:'white'}}>
      containt
    </h1>
    </center>
    <div id="Cp-a4" style={{display:"flex",width:'70%',justifyContent:'center',alignItems:"center",
    background: 'white',
    display: 'block',
    margin:' 0 auto',
    marginBottom: '0.5cm',
    boxShadow: '0 0 0.5cm rgba(0,0,0,0.5)',
    width: '21cm',
    height: '29.7cm', 
    padding:'100px 30px 80px 80px'
  }}> 
    <div style={{display:'flex',flexWrap: 'wrap',width:'90%',justifyContent:'flex-start'}}>
    {/* <Flex flexWrap='wrap'> */}
    {arr.map((e)=>{
      return (
       <Comp prop={e} key={e.UniId}/>
      )
        

})}
{/* </Flex> */}
</div>
</div>
<center><button onClick={()=>exportPDF()} style={{margin:'20px',padding:'5px 10px'}}>Print</button></center>



    </div>
    </>
  );
}

export default App;
