import Edit_Query from "./Edit_Query";
import EditSide from "./Edit_side";
import './EditPage.css'
import React, { useEffect, useState,useRef } from "react";
import BIRDS from 'vanta/dist/vanta.waves.min'

function EditPage() {

  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(BIRDS({
        el: myRef.current,
        // backgroundColor: 0xe0e0ef,
        color: 0,
        shininess: 120,
        waveHeight: 19,
        waveSpeed: 0.3,
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

    return (
      <div className='querypage' ref={myRef}>
        <EditSide/>
        <Edit_Query/>
      </div>
    )
  }
  
  export default EditPage