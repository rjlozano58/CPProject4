import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import MiniCard from "./MiniCard";




const Card = (props) =>{

    const [rand,setRand] = useState(props.validObjects[12]);
    const [currArt, setCurrArt] = useState({});
    const [department,setDepartment] = useState("Department");
    const [medium,setMedium] = useState("Medium");
    const [gallNum,setGallNum] = useState("Gallery Number");
    const [blockList,setBlockList] = useState([]);

    const fetchImage = async () => {
        getRandNum();
        const result = await fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/" + props.validObjects[rand]);
        const data = await result.json();
        
        setCurrArt(data);
        if (data.department == null){
            setDepartment("No Department");
        }else{
            setDepartment(data.department);
        }

        if (setMedium(data.medium) == null){
            setMedium("No Medium");
        }else{
            setMedium(data.medium);
        }

        if (data.GalleryNumber == null){
            setGallNum(" No Gellery Number");
        }else{
            setGallNum(data.GalleryNumber);
        }

    }

    const getRandNum = () =>{
        let newRand = Math.floor(Math.random() * props.validObjects.length);
        setRand(newRand);
    }

    const appendDepartment = () => {
        setBlockList([...blockList,department]);

    }

    function appendMedium(){
        setBlockList([...blockList,medium]);

    }

    const appendGallNum = () =>{
        setBlockList([...blockList,gallNum]);

    }

   return(
    <>
    <div>
        <h2>{currArt.title}</h2>
        
        <div className="categories-container">

            <MiniCard text={department} />
            <MiniCard text={medium} />
            <MiniCard text={gallNum} />
        </div>
        <div className="image-container">
            <img className="piece-image" src={currArt.primaryImage}/>
        </div>
        <button className="fetch-button" onClick={fetchImage}>Explore</button>

    </div>
    
    </>
   );
}

export default Card