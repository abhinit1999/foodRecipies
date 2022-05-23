import React from "react";
// import { useState } from "react";
import './header.css';






const Header = props => {
  const { search, onInputChange, onSearchClick } = props;





 
  return(
    <>
    <header>
        <div className="text">
            <h1>Recipies Finder</h1>
        </div>
        <div className="nav_bar">
           <div className="searchBar">
             <input type="text" 
             value={search}
             onChange={onInputChange}
             placeholder="search recipies"
              />
             <button onClick={onSearchClick}>Search</button>
           </div>
        </div>
    </header>
   
</>
  );
}
 export default Header;
