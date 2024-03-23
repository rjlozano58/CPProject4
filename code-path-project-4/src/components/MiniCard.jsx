import React from "react";
import { useState } from "react";
import "../App.css";




const MiniCard = (props) =>{

   return(
    <div className="mini-cards">
        {props.text}
    </div>
   );
}

export default MiniCard