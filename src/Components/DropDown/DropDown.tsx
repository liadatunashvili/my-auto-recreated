import React, { useContext, useEffect, useState, useRef } from "react";
import { ProductInterface } from "../Interfaces/ProductInterface";
import CarTypeContext from "../CarTypes/CarTypeContext";

const SortDropdown: React.FC = () => {
  const [sortMethod, setsortMethod] = useState("option1");
  const { products, setProducts } = useContext(CarTypeContext);
  const [sortedData, setSortedData] = useState<ProductInterface[]>([]);
  const [filterMethod, setFilterMethod] = useState("");
  const [filteredData, setFilteredData] = useState<ProductInterface[]>([]);

  console.log(filteredData);

  useEffect(() => {
    let filteredData = [];
    const now = new Date();

    switch (filterMethod) {
      case "hour1":
        filteredData = products.filter((product) => {
          const orderDate = new Date(product.order_date);
          const timeDifference =
            Math.abs(now.getTime() - orderDate.getTime()) / 3600000;
          return timeDifference <= 1; // 1 hour in ms
        });
        break;
      case "hour3":
        filteredData = products.filter((product) => {
          const orderDate = new Date(product.order_date);
          const timeDifference =
            Math.abs(now.getTime() - orderDate.getTime()) / 3600000;
          return timeDifference <= 3; // 1 hour in ms
        });
        break;
      case "hour6":
        filteredData = products.filter((product) => {
          const orderDate = new Date(product.order_date);
          const timeDifference =
            Math.abs(now.getTime() - orderDate.getTime()) / 3600000;
          return timeDifference <= 6; // 1 hour in ms
        });
        break;
      case "hour9":
        filteredData = products.filter((product) => {
          const orderDate = new Date(product.order_date);
          const timeDifference =
            Math.abs(now.getTime() - orderDate.getTime()) / 3600000;
          return timeDifference <= 9; // 1 hour in ms
        });
        break;
      case "hour12":
        filteredData = products.filter((product) => {
          const orderDate = new Date(product.order_date);
          const timeDifference =
            Math.abs(now.getTime() - orderDate.getTime()) / 3600000;
          return timeDifference <= 12; // 1 hour in ms
        });
        break;
      case "hour24":
        filteredData = products.filter((product) => {
          const orderDate = new Date(product.order_date);
          const timeDifference =
            Math.abs(now.getTime() - orderDate.getTime()) / 3600000;
          return timeDifference <= 24; // 1 hour in ms
        });
        break;
      default:
        filteredData = products;
    }
    setFilteredData(filteredData);
  }, [filterMethod, products]);

  useEffect(() => {
    let sortedArray = products;
    if (sortMethod) {
      switch (sortMethod) {
        case "option1":
          sortedArray.sort((a, b) => {
            const dateA = new Date(a.order_date.replace(" ", "T"));
            const dateB = new Date(b.order_date.replace(" ", "T"));
            return dateB.getTime() - dateA.getTime();
          }); // date descending
          break;
        case "option2":
          sortedArray.sort((a, b) => {
            const dateA = new Date(a.order_date.replace(" ", "T"));
            const dateB = new Date(b.order_date.replace(" ", "T"));
            return dateA.getTime() - dateB.getTime();
          }); // date ascending
          break;
        case "option3":
          sortedArray.sort((a, b) => b.price_value - a.price_value); // price descending
          break;
        case "option4":
          sortedArray.sort((a, b) => a.price_value - b.price_value); // price ascending
          break;
        case "option5":
          sortedArray.sort((a, b) => b.car_run_km - a.car_run_km); // car run descending
          break;
        case "option6":
          sortedArray.sort((a, b) => a.car_run_km - b.car_run_km); // car run ascending
          break;
        default:
          break;
      }
    }
    setSortedData(sortedArray); // Update sortedData state
  }, [sortMethod, products]);
  return (
    <>
      <select
        className="filterMethod"
        value={filterMethod}
        onChange={(e) => setFilterMethod(e.target.value)}
      >
        <option value="" disabled selected hidden>
          პერიოდი
        </option>
        <option value="hour1">1 საათის წინ</option>
        <option value="hour3">3 საათის წინ</option>
        <option value="hour6">6 საათის წინ</option>
        <option value="hour12">12 საათის წინ</option>
        <option value="hour24">24 საათის წინ</option>
      </select>

      <select
        className="sortMethod"
        value={sortMethod}
        onChange={(e) => setsortMethod(e.target.value)}
      >
        <option value="option1">თარიღი კლებადი</option>
        <option value="option2">თარიღი ზრდადი</option>
        <option value="option3">ფასი კლებადი</option>
        <option value="option4">ფასი ზრდადი</option>
        <option value="option5">გარბენი კლებადი</option>
        <option value="option6">გარბენი ზრდადი</option>
      </select>
    </>
  );
};

export default SortDropdown;
