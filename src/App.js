
import "./App.css";
import Header from "./components/Header";
import RecipeItem from "./components/RecipeItem";
import Recipes from "./components/Recipies";


function App() {
  const App_Id="ed7058fd";
  const App_Key="9de2031bd7965fc74a5824420d75e539";

  return (
    <div className="App">
      <Header/>
      <h1>Food</h1>
      <Recipes/>
      <RecipeItem/>
    </div>
  );
}

export default App;
