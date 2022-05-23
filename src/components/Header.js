import React from "react";
import './header.css';
const Header = () => {
  return(
    <>
    <header>
        <div className="text">
            <h1>Recipies Finder</h1>
        </div>
        <div className="nav_bar">
           <div className="searchBar">
             <input type="text" placeholder="search recipies" />
             <button>Search</button>
           </div>
        </div>
    </header>
   


    </>
  );
};

export default Header;
