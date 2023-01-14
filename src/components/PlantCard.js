import React,{useState} from "react";

function PlantCard({plant}) {

  const [inStock, setInStock] = useState(false)
  const handleInStock = () => {
    setInStock(!inStock)
    console.log(inStock)
  }
  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      
        <button className="primary" onClick={handleInStock}>{inStock ? "In Stock" : "Sold Out"} </button>
    
    </li>
  );
}

export default PlantCard;
