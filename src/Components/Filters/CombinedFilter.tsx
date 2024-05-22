import React from "react";
import FiltersInterface from "../Interfaces/FiltersInterface";
import { ManufacturerInterface } from "../Interfaces/ManufacturerInterface";
import { ProductInterface } from "../Interfaces/ProductInterface";
import { CarTypeInterface } from "../Interfaces/CarTypeInterface";
import { modelInterface } from "../Interfaces/ModelInterface";

const CombinedFilter = (
  Products: ProductInterface[],
  AllManufacturers: ManufacturerInterface[],
  AllModels: modelInterface[],
  Manufacturer: string[],
  Model: string[],
  Category: string[],
  PriceRange: [number, number],
  allCategories: CarTypeInterface[]
): ProductInterface[] => {
  const findManId = (id: string): string => {
    let res: string = "";
    AllManufacturers.forEach((e) => {
      if (e.man_id == id) res = e.man_name;
    });

    return res;
  };
  const findModId = (id: number): string => {
    let res: string = "";
    AllModels.forEach((e) => {
      if (e.model_id == id) res = e.model_name;
    });
    return res;
  };
  const findCatId = (id: number): string => {
    let res: string = "";
    allCategories.forEach((e) => {
      if (e.category_id == id) res = e.seo_title;
    });
    return res;
  };

  const filterProducts = (products: ProductInterface[]): ProductInterface[] => {
    return products.filter((product) => {
      if (
        Manufacturer.length > 0 &&
        !Manufacturer.includes(findManId(String(product.man_id)))
      ) {
        return false;
      }

      // Filter by model name
      if (Model.length > 0 && !Model.includes(findModId(product.model_id))) {
        return false;
      }

      // Filter by category name
      if (
        Category.length > 0 &&
        !Category.includes(findCatId(product.category_id))
      ) {
        return false;
      }

      // Filter by price range
      if (
        PriceRange &&
        (product.price < PriceRange[0] || product.price > PriceRange[1])
      ) {
        return false;
      }

      // All filters pass, include the product
      return true;
    });

    
  };

  // Call the filterProducts function with the Products array
  const filteredProducts = filterProducts(Products);

  console.log("I AM IN FILTER",filterProducts)
  return filteredProducts;
};

export default CombinedFilter;
