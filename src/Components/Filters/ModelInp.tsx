import React, {
  ChangeEvent,
  useRef,
  useContext,
  useState,
  useEffect,
} from "react";
import CarTypeContext from "../CarTypes/CarTypeContext";
import "./ModelInp.css";

const ModelInp: React.FC = () => {
  const { modelArr, setModelArr } = useContext(CarTypeContext);
  const { currentMan, setCurrentMan } = useContext(CarTypeContext);
  const { chosenModel, setChosen } = useContext(CarTypeContext);
  const [droppedModel, setDroppedModel] = useState<boolean>(false);

  useEffect(() => {
    // Update checkbox states when chosenCategories changes
    updateCheckboxStates();
  }, [chosenModel]);

  const handleChangeMod = (event: ChangeEvent<HTMLInputElement>): void => {
    const checkboxValue = event.target.value;
    if (event.target.checked) {
      setChosen([...chosenModel, checkboxValue]);
    } else {
      const updatedModChecks = chosenModel.filter(
        (val) => val != checkboxValue
      );
      setChosen(updatedModChecks);
    }
  };

  const resetVal = (): void => {
    setChosen([]);
  };

  function showDropdownMod(): void {
    setDroppedModel(true);
  }

  function handleBlurMod(): void {
    setDroppedModel(false);
  }

  const handleCheckboxMouseDown = (
    event: React.MouseEvent<HTMLInputElement>
  ): void => {
    event.preventDefault();
  };

  const updateCheckboxStates = (): void => {
    const checkboxes = document.querySelectorAll<HTMLInputElement>(
      'input[type="checkbox"][name^="category_"]'
    );
    checkboxes.forEach((checkbox) => {
      const inputCheckbox = checkbox as HTMLInputElement;
      inputCheckbox.checked = chosenModel.includes(inputCheckbox.value);
    });
  };

  const getPlaceholderText = (): string => {
    if (chosenModel.length === 0) {
      return "მოდელი";
    } else {
      return chosenModel.join(", ");
    }
  };
  return (
    <div>
      <div tabIndex={0} onFocus={showDropdownMod} onBlur={handleBlurMod}>
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

        {
          <div
            className={
              droppedModel
                ? "checkbox-container2"
                : "checkbox-container2 d-none"
            }
          >
            <div className={"scrollable-checkbox2 border-0 "}>
              {modelArr.map((model) => {
                return (
                  <>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name={model.model_name}
                        onMouseDown={handleCheckboxMouseDown}
                        value={model.model_name}
                        onChange={handleChangeMod}
                        checked={chosenModel.includes(model.model_name)}
                      />
                      <label
                        className="form-check-label w-100"
                        htmlFor={model.model_name}
                      >
                        {model.model_name}
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
  );
};

export default ModelInp;
