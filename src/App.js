
import "./App.css";
import Header from "./components/Header";
// import RecipeItem from "./components/RecipeItem";
import Recipes from "./components/Recipies";
import Axios from "axios";
import React, { useState, useEffect } from "react";
import Footer from "./Footer";


function App() {
  const [search, setSerach] = useState("chiken");
  const [recipes, setRecipes] = useState([]);
  const APP_ID="ed7058fd";
  const APP_KEY="9de2031bd7965fc74a5824420d75e539";



  useEffect(() => {
    getRecipes();
  }, []);



  const getRecipes = async () => {
    const res = await Axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    setRecipes(res.data.hits);
  };
  const onInputChange = e => {
    setSerach(e.target.value);
  };

  const onSearchClick = () => {
    getRecipes();
  };
  return (
    <div className="App">
      <Header 
      search={search}
      onInputChange={onInputChange}
      onSearchClick={onSearchClick}
      
      />
      {/* <h1>Food</h1> */}
     <div className="container">
     <Recipes
     recipes={recipes}
     
     />
     </div>
      {/* <RecipeItem/> */}
      <Footer/>
    </div>
  );
}

export default App;
