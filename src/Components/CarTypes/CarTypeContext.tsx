import React from "react";
import { CarTypeInterface } from "../Interfaces/CarTypeInterface";
import { createContext } from "react";
import { ManufacturerInterface } from "../Interfaces/ManufacturerInterface";
import { modelInterface } from "../Interfaces/ModelInterface";
import { ProductInterface } from "../Interfaces/ProductInterface";

interface CategoryInterface {
  categories: CarTypeInterface[];
  setCategories: (newCategories: CarTypeInterface[]) => void;

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

const CarTypeContext = createContext<CategoryInterface>({
  categories: [],
  setCategories: () => {},
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

  chosenCategories: [],
  setChosenCategories: () => {},

  PriceRange: [0, 0],
  setPriceRange: () => {},

  products: [],
  setProducts: () => {},
});

export default CarTypeContext;
