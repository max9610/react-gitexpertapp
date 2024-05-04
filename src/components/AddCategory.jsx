import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("One Punch Man");

  const onInputChange = ({ target }) => {
    // console.log(target.value);
    setInputValue(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) {
      return;
    }
    // setCategories((categories) => [inputValue, ...categories]);
    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
        // onChange={(event) => onInputChange(event)}
      />
    </form>
  );
};

export default AddCategory;
