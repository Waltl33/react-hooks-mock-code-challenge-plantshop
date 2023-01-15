import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

const [plants, setPlants] = useState([])
const [searchItems, setSearchItems] = useState("")
// make POST request here, so we can update plants state directly

  useEffect(() => {
    fetch (" http://localhost:6001/plants ")
      .then(resp => resp.json())
      .then(setPlants)
  }, [])

  const addNewPlant = (myPlant) => {
    setPlants([...plants, myPlant])
  }

  const updateSearch = (searchInput) => {
   setSearchItems(searchInput)
  }

let filteredPlants = plants.filter(plant => plant.name.toLowerCase().includes(searchItems.toLowerCase()))
// const addNewPlant = () => {

//   console.log("new Plant")
// }
  return (
    <main>
      <NewPlantForm 
      addNewPlant = {addNewPlant}
      />
      <Search 
        searchItems={searchItems}
        updateSearch={updateSearch}
      />
      <PlantList 
        plants={filteredPlants}
      />
    </main>
  );
}

export default PlantPage;
