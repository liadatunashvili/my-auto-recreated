import React from 'react'
import {useState, useContext} from 'react'
import { CarTypeInterface } from '../Interfaces/CarTypeInterface'
import NewCarContext from './NewCarContext'
import Manufacturers from './Manufacturers'
import ChooseType from './ChooseType'



function WholeFilters() {
  const {wholeProducts,setWholeProducts,filteredProducts,setFilteredProducts} = useContext(NewCarContext)  

    const [fCat,setFcat] = useState<string[]>([])
    const [fMan,setFman] = useState<string[]>([])

    const [fType,setFtype] = useState<number>(0)
    const [fdeal,setDeal] = useState<number>(0)

    const [fminP,setFminP] = useState<string>("")
    const [fmaxP,setFmaxP] = useState<string>("")


    const handleFilter =():void=> {
    setFilteredProducts(wholeProducts.filter(
      (product)=>{
        if(product.vehicle_type == fType){
          return true;
        }

        if (
          fMan.length > 0 
          // && !fMan.includes(findManId(String(product.man_id)))
        ) {
          return false;
        }
        
      }))
    }
    

  return (<>
  
  
    <ChooseType setterFunc={setFtype}></ChooseType>
    <button onClick={()=>{handleFilter}}></button>

    </>
    // <Manufacturers setterFunc={setFman}></Manufacturers>
  )
}

export default WholeFilters