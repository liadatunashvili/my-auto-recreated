import React, { ChangeEvent, useRef } from "react";
import { useContext, useState, useEffect } from "react";

import { ManufacturerInterface } from "../Interfaces/ManufacturerInterface";
import "bootstrap/dist/css/bootstrap.css";
import "./Manufacturer.css";

import NewCarContext from "./NewCarContext";

interface MyProp {
  setterFunc:(val:string[])=>void
}

const Manufacturers: React.FC<MyProp> = ({setterFunc}) => {
  
  
  const {filteredProducts,setFilteredProducts,chosenType}=useContext(NewCarContext)
  const [ manArr, setManArr ] = useState<ManufacturerInterface[]>([]);
  const [currentMan, setCurrentMan ] = useState<string[]>([]);


  const [dropped, setDropped] = useState<boolean>(false);

 

  const [wholeManufacturers, setWholeManufacturers] = useState<ManufacturerInterface[]>([]);

  const [placeholder, setPlaceholder] = useState<string>("მწარმოებელი");

  const fetchManufacturers = async (): Promise<void> => {
    try {
      const response: Response = await fetch(
        "https://static.my.ge/myauto/js/mans.json"
      );
      const data = await response.json();
      setWholeManufacturers(data);
    } catch (error) {
      console.error("Error while fetching categories", error);
    }
  };

  useEffect(()=>{
    fetchManufacturers();
  },[])

  useEffect(() => {
    let newManufacturers: ManufacturerInterface[] = [];
    if (chosenType == 0) {
      newManufacturers = wholeManufacturers.filter((e) => e.is_car == "1");
    } else if (chosenType == 1) {
      newManufacturers = wholeManufacturers.filter((e) => e.is_spec == "1");
    } else if (chosenType == 2) {
      newManufacturers = wholeManufacturers.filter((e) => e.is_moto == "1");
    }
    if (wholeManufacturers.length > 0) {
      setManArr(newManufacturers);
    }
  }, [chosenType, wholeManufacturers.length]);


  const findManId = (id: string): string => {
    let res: string = "";
    manArr.forEach((e) => {
     if (e.man_id == id) res = e.man_name;
    });

    return res;
  };
 
    
  
  
 

  function findId(name: string): string {
    let id = "error";
    manArr.forEach((e) => {
      if (name == e.man_name) {
        id = e.man_id;
      }
    });
    return id;
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const checkboxValue = event.target.value;
    let url =
      "https://api2.myauto.ge/ka/getManModels?man_id=" + findId(checkboxValue);
    if (event.target.checked) {
      setCurrentMan([...currentMan, event.target.value]);
    } else {
      const updatedChecks = currentMan.filter(
        (value) => value != checkboxValue
      );
      setCurrentMan(updatedChecks);
      
    }
  };


  

  function showDropdown(): void {
    if (!dropped) {
      setDropped(true);
    }
  }
  function handleBlur(): void {
    setDropped(false);
  }
  const handleCheckboxMouseDown = (
    event: React.MouseEvent<HTMLInputElement>
  ): void => {
    event.preventDefault();
  };

  const handleLabelMouseDown = (
    event: React.MouseEvent<HTMLLabelElement>
  ): void => {
    event.preventDefault();
  };

  const resetVal = (): void => {    
      setCurrentMan([]);
  };

  console.log("Manufacturers",wholeManufacturers)

  return (
    <div>
      <div className="form-group ">
        <div tabIndex={0} onFocus={showDropdown} onBlur={handleBlur}>
          <div className="input-group">
            <input
              className="form-control border-1"
              type="text"
              readOnly
              value={currentMan.join(", ")}
              placeholder={placeholder}
            />
            <button
              className="btn  input-group-append"
              onClick={() => resetVal()}
            >
              X
            </button>
          </div>

          {
            <div
              className={
                dropped ? "checkbox-container " : "checkbox-container d-none "
              }
            >
              <div className={"scrollable-checkbox border-0 "}>
                {manArr.map((man) => {
                  return (
                    <>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name={man.man_name}
                          id={man.man_name}
                          onMouseDown={handleCheckboxMouseDown}
                          value={man.man_name}
                          onChange={handleChange}
                          checked={currentMan.includes(man.man_name)}
                        />
                        <label
                          onClick={handleLabelMouseDown}
                          className="form-check-label w-100"
                          htmlFor={man.man_name}
                        >
                          {man.man_name}
                        </label>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Manufacturers;
