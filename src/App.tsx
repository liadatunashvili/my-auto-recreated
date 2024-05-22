import React, { useEffect, useState } from "react";
import CarTypeComp from "./Components/CarTypes/CarTypeComp";
import { ProductInterface } from "./Components/Interfaces/ProductInterface";
import ProductComponent from "./Components/Cards/Product";
import "bootstrap/dist/css/bootstrap.css";
import "./Components/Cards/Pages.css";
import Pagination from "./Components/Cards/Paginations";
import "./SearchResults.css";
import "./Components/Header/Header.css";
import Header from "./Components/Header/Header";
import SortDropdown from "./Components/DropDown/DropDown";
import "./Components/DropDown/Group33738.css";
import FilterButton from "./Components/Filters/FilterButton";
import "./iphone11/iphone11pro.css";
import NewCarContext from "./Components/NewFilters/NewCarContext";
import Category from "./Components/NewFilters/Category";
import ChooseType from "./Components/NewFilters/ChooseType";
import DealType from "./Components/NewFilters/DealType";
import PriceFilter from "./Components/Filters/PriceFilter";
import Manufacturers from "./Components/NewFilters/Manufacturers";


const App: React.FC = () => {
  //-------------------------------------------------------//
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // const [wholeProducts,setWholeProducts] = useState<ProductInterface[]>([])

  const [wholeProducts, setWholeProducts] = useState<ProductInterface[]>([]);
  const [filteredProducts,setFilteredProducts] = useState<ProductInterface[]>([]);

  const[chosenType,setChosenType]= useState<number>(0)

  const [visibleProducts,setVisibleProducts] = useState<ProductInterface[]>([])

  const totalPage = Math.ceil(wholeProducts.length / itemsPerPage);

  

  
  const fetchProducts = async (): Promise<void> => {
    try {
      let page = 1;
      let hasMorePages = true;

      while (hasMorePages && page <= 4) {
        const response: Response = await fetch(
          `https://api2.myauto.ge/ka/products/?Page=${page}`
        );
        const data = await response.json();
        if (data.data.items.length > 0) {
          setWholeProducts((prevProducts) => [...prevProducts, ...data.data.items]);
          setFilteredProducts(data.data.items)
          page++;
        } else {
          hasMorePages = false;
        }
      }
    } catch (error) {
      console.error("Error while fetching products", error);
    }
  };

  useEffect(() => {
    fetchProducts();
    
    
  }, []);

  console.log("FILTERED PRODUCTS:",filteredProducts.length)

  const productsToDisplay = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageClick = (pageNum: number) => setCurrentPage(pageNum);

  if (wholeProducts.length === 0) {
    return <div>LOADING</div>;
  } else {
    return (
      <div className="searchResult">
        <NewCarContext.Provider
          value={{wholeProducts,setWholeProducts, filteredProducts,setFilteredProducts,chosenType,setChosenType
          }}
        >
          <Header />
          <div className="filterbg">
            <div className="recctangle"></div>
          </div>

          <div className="Group33738">
            <SortDropdown />
            {/* <p className="gancxadebebisraodenoba">300 განცხადება</p> */}
          </div>
          <CarTypeComp></CarTypeComp>

          <div className="Frame33741">
            
          </div>

          {productsToDisplay.map((product) => {
            return (
              <>
                <div className="row">
                  <ProductComponent product={product} />
                </div>
              </>
            );
          })}

<div className="filterbg">
            <div className="recctangle"></div>
          </div>

          <div className="Group33738">
            <SortDropdown />
            <p className="gancxadebebisraodenoba">
              {filteredProducts.length} განცხადება
            </p>
          </div>
          <ChooseType></ChooseType>

          <div className="Frame33741">
            <DealType></DealType>
            <Manufacturers></Manufacturers>
            <Category></Category>
            <PriceFilter></PriceFilter>
          </div>
          
         
          
          <FilterButton />

          <Pagination
            currentPage={currentPage}
            totalPage={totalPage}
            handlePageClick={handlePageClick}
          />
        </NewCarContext.Provider>
      </div>
    );
  }
};

export default App;
