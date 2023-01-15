import React, {useState} from "react";

function NewPlantForm({addNewPlant}) {
  const [newName, setName] = useState("")
  const [newImage, setImage] = useState("")
  const [newPrice, setPrice] = useState(0)

const handleSubmit = (e) => {
    e.preventDefault()
    
  let newPlant = {
    name: newName,
    image: newImage,
    price: newPrice
  }
fetch("http://localhost:6001/plants",{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPlant)

})
  .then (resp => resp.json())
  .then(myNewPlants => addNewPlant(myNewPlants))
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value ={newName}onChange={(e) => setName(e.target.value)}placeholder="Plant name" />
        <input type="text" name="image" value ={newImage}onChange={(e) => setImage(e.target.value)} placeholder="Image URL" />
        <input type="number" name="price" value ={newPrice}onChange={(e) => setPrice(e.target.value)} step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
