import React from "react";
import { CarTypeInterface } from "../Interfaces/CarTypeInterface";
import { ManufacturerInterface } from "../Interfaces/ManufacturerInterface";
import { modelInterface } from "../Interfaces/ModelInterface";
import { ProductInterface } from "../Interfaces/ProductInterface";

export interface CategoryInterface {
  chosenCategories: string[];
  setChosenCategories: (newchosenCat: string[]) => void;
  cartegory: number;
  setCartegory: (newCat: number) => void;
  manArr: ManufacturerInterface[];
  setManArr: (newArr: ManufacturerInterface[]) => void;
  currentMan: string[];
  setCurrentMan: (newVal: string[]) => void;
  modelArr: modelInterface[];
  setModelArr: (newVal: modelInterface[]) => void;
  chosenModel: string[];
  setChosen: (newVal: string[]) => void;
  PriceRange: [number, number];
  setPriceRange: (newValue: [number, number]) => void;
  products: ProductInterface[];
  setProducts: (newVal: ProductInterface[]) => void;
}

const CarTypeContext = React.createContext<CategoryInterface>({
  chosenCategories: [],
  setChosenCategories: () => {},
  cartegory: 0,
  setCartegory: () => {},
  manArr: [],
  setManArr: () => {},
  currentMan: [],
  setCurrentMan: () => {},
  modelArr: [],
  setModelArr: () => {},
  chosenModel: [],
  setChosen: () => {},
  PriceRange: [0, 0],
  setPriceRange: () => {},
  products: [],
  setProducts: () => {},
});

export default CarTypeContext;
