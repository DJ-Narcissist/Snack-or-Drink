import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./FoodMenu";
import MenuContext from "./MenuContext";



function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snackData, setSnackData] = useState([]);
  const [drinkData,setDrinkData] = useState([]);
 

  useEffect(() => {
    async function getData() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      let drinks = await SnackOrBoozeApi.getDrinks();
      console.log("Snacks data:", snacks);
      console.log("Drinks data:", drinks);
      setSnackData(snacks);
      setDrinkData (drinks);
      setIsLoading(false);
    }
    getData();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
  
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <MenuContext.Provider value={Menu}>
          <Switch>
            <Route exact path="/">
              <Home  />
            </Route>
            <Route exact path="/snacks">
              <Menu items={snackData} title="Snacks" basePath="/snacks" />
            </Route>
            <Route exact path="/drinks">
              <Menu items={drinkData} title="Drinks" basePath="/drinks" />
            </Route>
            <Route path="/snacks/:id">
              <Menu items={snackData} cantFind="/snacks" />
            </Route>
            <Route path="/drinks/:id">
              <Menu items={drinkData} cantFind="/drinks" />
            </Route>
            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
          </MenuContext.Provider>
        </main>
      </BrowserRouter>
    
    </div>

  
  );
}

export default App;
