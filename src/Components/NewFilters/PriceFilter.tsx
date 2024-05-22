import React, { useContext, useState, useEffect } from "react";
import CarTypeContext from "../CarTypes/CarTypeContext";
import "./PriceFilter.css";
import NewCarContext from "./NewCarContext";

const PriceFilter: React.FC = () => {

    const {filteredProducts,setFilteredProducts} = useContext(NewCarContext)
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");

 

  useEffect(() => {
    let min = parseInt(minPrice);
    let max = parseInt(maxPrice);
  }, [minPrice, maxPrice]);

  useEffect(()=>{
    filteredProducts.filter((product)=>{
        
        (product.price <parseInt(maxPrice) || product.price > parseInt(minPrice))
    })
  },[minPrice,maxPrice])

  const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(event.target.value);
  };

  return (
    <div className="Frame33738">
      <div className="border"></div>
      <div className="pricee">
        <div className="Frame2">
          <input
            className="Frame11921"
            type="text"
            value={minPrice}
            onChange={handleMinPriceChange}
            placeholder="დან"
          />
          <div className="rectangle3"></div>
          <input
            className="Frame11920"
            type="text"
            value={maxPrice}
            onChange={handleMaxPriceChange}
            placeholder="მდე"
          />
        </div>
        <span className="fasi">ფასი</span>
      </div>
    </div>
  );
};

export default PriceFilter;
