import React, {useEffect, useState}from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {

  fetch(" http://localhost:6001/plants")
    .then(resp => resp.json())
    .then(setPlants)
  },[])
  const addNewPlant =(myNewPlants) => {
    setPlants([...plants, myNewPlants ])
  }
const updateSearch = (searchInput) => {
  setSearch(searchInput)
}
let filteredPlants = plants.filter(plant => plant.name.toLowerCase().includes(search.toLowerCase()))
  return (
    <main>
      <NewPlantForm
      addNewPlant={addNewPlant} />
      <Search 
        search={search}
        updateSearch={updateSearch}
      />
      <PlantList
      plants = {filteredPlants} />
    </main>
  );
}

export default PlantPage;
