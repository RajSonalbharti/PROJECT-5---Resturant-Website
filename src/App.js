import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import {css} from "@emotion/core";
import PropagateLoader from 'react-spinners/PropagateLoader'
import Header from './Components/Header';
import Products from './Components/Products';
import About from './Components/About';
import Contact from './Components/Contact';
//import Location from './Components/Location';
import axios from 'axios';
import Recipes from './Components/Recipes';

//import GoogleMap from './Components/GoogleMap';

function App() {
 
  const[search , setSearch] = useState("chiken");
  const [recipes , setRecipes] = useState([]);

  // const APP_ID = "4cb7bd2c"; 
  // const APP_KEY = "b6fedad11abc63afe118228e1a672dbb";

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const APP_ID = "4cb7bd2c"; 
  const APP_KEY = "b6fedad11abc63afe118228e1a672dbb";

    const res = await axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    setRecipes(res.data.hits);
    console.log(res);
  };


  const onInputChange = e=> {
    setSearch(e.target.value);
    //console.log(e.target.value);
  }


  const onSearchClick = () => {
    getRecipes();
  };



  const[loading,setLoading] = useState(false);

  const override = css`
  display:block;
  border-color:green;
  margin-top:20%;
  `;
  
  useEffect(() => {
    setLoading(true) 
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  },[])


  return (
    <div className="App">
      {
        loading ? <PropagateLoader color={"#3d2514"} Loading={loading} css={override} size={40}/>
       
        :
        <>
        <Navbar/>
        <Header 
        search={search} onInputChange={onInputChange}
        onSearchClick={onSearchClick}/>
        <div className="container">
        <Recipes recipes={recipes} />
      </div>

        <Products/>
        <About/>
        <Contact/>
        {/* <GoogleMap/>  */}
        {/* <Location/> */}
        
        </>
      }
    </div>
  );
}
export default App;






