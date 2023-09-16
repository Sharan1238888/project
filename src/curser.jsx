import React from 'react';
import './color.css';
import Curser2 from './curser2';

export default function curser() {

   
  return (
    <><div style={{color:"red"}}>SHARAN </div>

    <canvas id='world'></canvas>
    
    <a id="insta" className="meta-link" href="https://instagram.com/sharan_kumar___" target="_blank">
    <i className="fas fa-link"></i>
    <span className="roboto-mono">Join my Instagram</span>
</a>
    <Curser2 />
    </>
  )
}
