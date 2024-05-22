import React, { useContext, useState, useEffect } from "react";
import CarTypeContext from "../CarTypes/CarTypeContext";
import "./PriceFilter.css";

const PriceFilter: React.FC = () => {
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");

  const { PriceRange, setPriceRange } = useContext(CarTypeContext);

  useEffect(() => {
    let min = parseInt(minPrice);
    let max = parseInt(maxPrice);
    setPriceRange([min, max]);
  }, [minPrice, maxPrice]);

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
