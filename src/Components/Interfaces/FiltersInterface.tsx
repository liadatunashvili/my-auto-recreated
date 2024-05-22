import React from "react";
import { ProductInterface } from "./ProductInterface";
import { ManufacturerInterface } from "./ManufacturerInterface";
import { modelInterface } from "./ModelInterface";
import { CarTypeInterface } from "./CarTypeInterface";
interface FiltersInterface {
  Products: ProductInterface[];
  AllManufacturers: ManufacturerInterface[];
  AllModels: modelInterface[];
  allCategories: CarTypeInterface[];
  DealType: string[];
  Manufacturer: string[];
  Model: string[];
  Category: string[];
  PriceRange: [number, number];
}

export default FiltersInterface;
