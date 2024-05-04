import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);
  // console.log(categories);
  const onAddCategory = (newCategory) => {
    // categories.push(newCategory);  E S T O   N O  F U N C I O N A
    if (categories.includes(newCategory)) return;
    // setCategories((cat) => [...cat, "Malcolm"]); OTRA FORMA QUE SI FUNCIONA
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
