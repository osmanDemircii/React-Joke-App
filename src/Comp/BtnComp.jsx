// src/Comp/BtnComp.jsx
import './CssComp/BtnCssComp.css'

function BtnComp({name,onClick}) {
  
  return (
    <>
     <button onClick={onClick}>
       {name}
     </button>
     
    </>
  )
}

export default BtnComp
