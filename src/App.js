import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Films, FilmsOne, FilmsTwo } from "./pages/Films/Films";
import { People, PeopleOne, PeopleTwo } from "./pages/People/People";
import { Planets, PlanetsOne, PlanetsTwo } from "./pages/Planets/Planets";
import { Species, SpeciesOne, SpeciesTwo } from "./pages/Species/Species";
import { Starship, StarshipOne, StarshipTwo } from "./pages/Starships/Starships";
import { Vehicles, VehiclesOne, VehiclesTwo } from "./pages/Vehicles/Vehicles";

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/films" exact element={<Films />} />
        <Route path="/films/moviename1" exact element={<FilmsOne />} />
        <Route path="/films/moviename2" exact element={<FilmsTwo />} />

        <Route path="/people" exact element={<People />} />
        <Route path="/people/people1" exact element={<PeopleOne />} />
        <Route path="/people/people2" exact element={<PeopleTwo />} />

        <Route path="/planets" exact element={<Planets />} />
        <Route path="/planets/planetsname1" exact element={<PlanetsOne />} />
        <Route path="/planets/planetsname2" exact element={<PlanetsTwo />} />

        <Route path="/species" exact element={<Species />} />
        <Route path="/species/speciesname1" exact element={<SpeciesOne />} />
        <Route path="/species/speciesname2" exact element={<SpeciesTwo />} />


        <Route path="/starships" exact element={<Starship />} />
        <Route path="/starships/starship1" exact element={<StarshipOne />} />
        <Route path="/starships/starship2" exact element={<StarshipTwo />} />


        <Route path="/vehicles" exact element={<Vehicles />} />
        <Route path="/vehicles/vehiclesname1" exact element={<VehiclesOne />} />
        <Route path="/vehicles/vehiclesname2" exact element={<VehiclesTwo />} />
      </Routes>
    </Router>
  );
}

export default App;
