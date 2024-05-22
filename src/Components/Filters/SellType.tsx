import { useContext, useState } from "react";
import React, { ChangeEvent } from "react";
import { CategoryInterface } from "../Interfaces/CategoryInterface";
import CarTypeContext from "../CarTypes/CarTypeContext";

const SellType: React.FC = () => {
   const [droppedSellType, setDroppedSellType] = useState<boolean>(false);
  const [chosenSellType, setChosenSellType] = useState<string>("");
  const [chosenSellSubTypes, setChosenSellSubTypes] = useState<string[]>([]);

  const handleChangeSellType = (event: ChangeEvent<HTMLInputElement>): void => {
    const sellTypeValue = event.target.value;
    if (event.target.checked) {
      setChosenSellType(sellTypeValue);
      setChosenSellSubTypes([]);
    } else {
      setChosenSellType("");
      setChosenSellSubTypes([]);
    }
  };

  const handleChangeSellSubType = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    const subTypeValue = event.target.value;
    if (event.target.checked) {
      setChosenSellSubTypes([...chosenSellSubTypes, subTypeValue]);
    } else {
      const updatedSubTypes = chosenSellSubTypes.filter(
        (val: string) => val !== subTypeValue
      );
      setChosenSellSubTypes(updatedSubTypes);
    }
  };

  const showDropdownSellType = (): void => {
    setDroppedSellType(true);
  };

  const handleBlurSellType = (): void => {
    setDroppedSellType(false);
  };

  const handleCheckboxMouseDown = (
    event: React.MouseEvent<HTMLInputElement>
  ): void => {
    event.preventDefault();
  };

  const resetVal = (): void => {
    setChosenSellType("");
    setChosenSellSubTypes([]);
  };

  const renderInputValue = (): string => {
    let value = chosenSellType;
    if (chosenSellSubTypes.length > 0) {
      value += " (" + chosenSellSubTypes.join(", ") + ")";
    }
    return value;
  };

  return (
    <div>
      <div
        tabIndex={0}
        onFocus={showDropdownSellType}
        onBlur={handleBlurSellType}
      >
        <div className="input-group">
          <input
            className="form-control border-1"
            type="text"
            placeholder="გარიგების ტიპი"
            readOnly
            value={renderInputValue()}
          />
          <button className="btn  input-group-append" onClick={resetVal}>
            X
          </button>
        </div>
        {droppedSellType && (
          <div className="checkbox-container3">
            <div className="scrollable-checkbox2 border-0 sell-type-dropdown">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="იყიდება"
                  onMouseDown={handleCheckboxMouseDown}
                  value="იყიდება"
                  onChange={handleChangeSellType}
                  checked={chosenSellType === "იყიდება"}
                />
                <label className="form-check-label w-100" htmlFor="იყიდება">
                  იყიდება
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="ქირავდება"
                  onMouseDown={handleCheckboxMouseDown}
                  value="ქირავდება"
                  onChange={handleChangeSellType}
                  checked={chosenSellType === "ქირავდება"}
                />
                <label className="form-check-label w-100" htmlFor="ქირავდება">
                  ქირავდება
                </label>
              </div>
              {chosenSellType === "ქირავდება" && (
                <div className="pl-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="დღიურად"
                      onMouseDown={handleCheckboxMouseDown}
                      value="დღიურად"
                      onChange={handleChangeSellSubType}
                      checked={chosenSellSubTypes.includes("დღიურად")}
                    />
                    <label className="form-check-label w-100" htmlFor="დღიურად">
                      დღიურად
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="მძღოლით"
                      onMouseDown={handleCheckboxMouseDown}
                      value="მძღოლით"
                      onChange={handleChangeSellSubType}
                      checked={chosenSellSubTypes.includes("მძღოლით")}
                    />
                    <label className="form-check-label w-100" htmlFor="მძღოლით">
                      მძღოლით
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="შესყიდვით"
                      onMouseDown={handleCheckboxMouseDown}
                      value="შესყიდვით"
                      onChange={handleChangeSellSubType}
                      checked={chosenSellSubTypes.includes("შესყიდვით")}
                    />
                    <label
                      className="form-check-label w-100"
                      htmlFor="შესყიდვით"
                    >
                      შესყიდვით
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="დაზღვეული"
                      onMouseDown={handleCheckboxMouseDown}
                      value="დაზღვეული"
                      onChange={handleChangeSellSubType}
                      checked={chosenSellSubTypes.includes("დაზღვეული")}
                    />
                    <label
                      className="form-check-label w-100"
                      htmlFor="დაზღვეული"
                    >
                      დაზღვეული
                    </label>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SellType;
