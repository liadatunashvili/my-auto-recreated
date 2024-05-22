import React, { ChangeEvent, useState, useEffect } from "react";
import { useContext } from "react";
import CarTypeContext from "../CarTypes/CarTypeContext";
import "./Category.css";
import NewCarContext from "./NewCarContext";
import { CategoryInterface } from "../Interfaces/CategoryInterface";
import { CarTypeInterface } from "../Interfaces/CarTypeInterface";




const Category: React.FC = () => {
    
    const{filteredProducts,setFilteredProducts,chosenType} =useContext(NewCarContext)
  const [ categories, setCategories ] = useState<CarTypeInterface[]>([]);
  const [wholeCategories,setWholeCategories] = useState<CarTypeInterface[]>([])
  const [ chosenCategories, setChosenCategories ] = useState<string[]>([]);
  const [droppedCat, setDroppedCat] = useState<boolean>(false);

  const fetchCategories = async (): Promise<void> => {
    try {
      const response: Response = await fetch(
        "https://api2.myauto.ge/ka/cats/get"
      );
      const data = await response.json();
      setWholeCategories(data.data)
      setCategories(data.data);
    } catch (error) {
      console.error("Error while fetching categories", error);
    }
  };

  const findCatId = (id: number): string => {
    let res: string = "";
    categories.forEach((e) => {
      if (e.category_id == id) res = e.seo_title;
    });
    return res;
  };

  useEffect(()=>{
    fetchCategories()
  },[])

  useEffect(()=>{
        let category: CarTypeInterface[] = [];
    if (chosenType == 0) {
      category = wholeCategories.filter((e) => e.vehicle_types[0] == 0);
    } else if (chosenType == 1) {
      category = wholeCategories.filter((e) => e.vehicle_types[0] == 1);
    } else if (chosenType == 2) {
      category = wholeCategories.filter((e) => e.vehicle_types[0] == 2);
    }
      setCategories(category);
    
    
  },[chosenType])

  useEffect(()=>{
    setFilteredProducts(filteredProducts.filter((product)=>
        chosenCategories.length > 0 &&
        !chosenCategories.includes(findCatId(product.category_id))
    ))
  },[chosenCategories,chosenCategories.length])


  useEffect(() => {
    updateCheckboxStates();
  }, [chosenCategories]);

  const handleChangeCat = (event: ChangeEvent<HTMLInputElement>): void => {
    const checkboxValue = event.target.value;
    if (event.target.checked) {
      setChosenCategories([...chosenCategories, checkboxValue]);
    } else {
      const updatedCategor = chosenCategories.filter(
        (val) => val !== checkboxValue
      );
      setChosenCategories(updatedCategor);
    }
  };

  const showDropdownCat = (): void => {
    setDroppedCat(true);
  };

  const handleBlurCat = (): void => {
    setDroppedCat(false);
  };

  const handleCheckboxMouseDown = (
    event: React.MouseEvent<HTMLInputElement>
  ): void => {
    event.preventDefault();
  };

  const resetVal = (): void => {
    setChosenCategories([]);
    updateCheckboxStates();
  };

  const updateCheckboxStates = (): void => {
    const checkboxes = document.querySelectorAll<HTMLInputElement>(
      'input[type="checkbox"][name^="category_"]'
    );
    checkboxes.forEach((checkbox) => {
      const inputCheckbox = checkbox as HTMLInputElement;
      inputCheckbox.checked = chosenCategories.includes(inputCheckbox.value);
    });
  };

  const getPlaceholderText = (): string => {
    if (chosenCategories.length === 0) {
      return "კატეგორია";
    } else {
      return chosenCategories.join(", ");
    }
  };

  console.log("CHOSEN TYPE",chosenType);
  

  return (
    <div className="position-relative">
      <div tabIndex={0} onFocus={showDropdownCat} onBlur={handleBlurCat}>
        <div className="input-group">
          <input
            className="form-control border-1"
            type="text"
            placeholder={getPlaceholderText()}
          />
          <button className="btn  input-group-append" onClick={resetVal}>
            X
          </button>
        </div>

        <div
          className={
            droppedCat ? "checkbox-container3" : "checkbox-container3 d-none"
          }
        >
          <div className="scrollable-checkbox2">
            {categories.map((cat) => {
              return (
                <div className="form-check" key={cat.title}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name={`category_${cat.title}`}
                    onMouseDown={handleCheckboxMouseDown}
                    value={cat.title}
                    onChange={handleChangeCat}
                  />
                  <label
                    className="form-check-label w-100"
                    htmlFor={`category_${cat.title}`}
                  >
                    {cat.title}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
