import React from "react";
import { CarTypeInterface } from "../Interfaces/CarTypeInterface";
import { createContext } from "react";
import { ManufacturerInterface } from "../Interfaces/ManufacturerInterface";
import { modelInterface } from "../Interfaces/ModelInterface";
import { ProductInterface } from "../Interfaces/ProductInterface";

interface newCarContext {
    wholeProducts:ProductInterface[]
    setWholeProducts:(prod:ProductInterface[])=>void;

    filteredProducts:ProductInterface[]
    setFilteredProducts:(prod:ProductInterface[])=>void

    chosenType:number
    setChosenType:(numb:number)=>void
}

const NewCarContext = createContext<newCarContext>({
    wholeProducts:[],
    setWholeProducts:()=>{},

    filteredProducts:[],
    setFilteredProducts:()=>{},

    chosenType:0,
    setChosenType:()=>{}
  
});

export default NewCarContext;
