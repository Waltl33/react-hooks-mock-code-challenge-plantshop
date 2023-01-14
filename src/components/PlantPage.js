import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

const [plants, setPlants] = useState([])
const [searchItems, setSearchItems] = useState([])

  useEffect(() => {
    fetch (" http://localhost:6001/plants ")
      .then(resp => resp.json())
      .then(setPlants)
  }, [])

  return (
    <main>
      <NewPlantForm />
      <Search 
        searchItems={searchItems}
        onChangeSearchItems={setSearchItems}
      />
      <PlantList 
        plants={plants}
      />
    </main>
  );
}

export default PlantPage;
