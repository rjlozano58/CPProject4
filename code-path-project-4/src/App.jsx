import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from "axios";
import './App.css'
import Card from "./components/Card.jsx"

function App() {

  // let URL = "https://api.disneyapi.dev/character";
  // let URL = "https://world.openfoodfacts.org/api/v0/product/737628064502.json";
  // https://collectionapi.metmuseum.org/public/collection/v1/objects
  // let URL = "https://collectionapi.metmuseum.org/public/collection/v1/objects/";
  //https://api.artic.edu/api/v1/artworks



  let mainURL = "https://collectionapi.metmuseum.org/public/collection/v1/"
  let URL = "https://collectionapi.metmuseum.org/public/collection/v1/search?isOnView=true&hasImages=true&q=sun";
  const [array,setArray] = useState([]);
  const [hasImgs,setHasImgs] = useState([]);




  const fetchData = async () => {
    
    const result = await fetch(URL);
    const data = await result.json();

    setHasImgs(data.objectIDs);
    
  }

  useEffect(() => {
    fetchData();
  },[]);

  
  const getRandNum = () =>{
    let newRand = Math.floor(Math.random() * hasImgs.length);
    setRand(newRand);
  }


  return (
    <>

      <div className='app-container'>
        <h1>Check out what Metropolitann Museum of Art has to offer!</h1>
        <h3>Click explore to generate random art pieces at their Museum, that are on display!</h3>

        <Card className="card-component" validObjects={hasImgs} />
        <h3>Number of art pieces with images: {hasImgs.length}</h3>
      </div>
      

    </>
  )
}

export default App
