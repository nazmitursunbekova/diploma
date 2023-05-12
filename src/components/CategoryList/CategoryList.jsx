import { useContext } from "react";
import"./CategoryList.css";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../App";
import AddCategory from "../AddCategory/AddCategory";
import DeleteCategory from "../DeleteCategory/Dele/DeleteCategory";
import Category from "../../pages/Category";


export default function CategoryList() {
  const { categories } = useContext(AppContext);

  const output = categories.map((category) => (
    <li key={category.id}>
      <NavLink to={"/category/" + category.path}>{category.name}</NavLink>
      <DeleteCategory category={category}/>
    </li>
  ));

  return (
    <div className="CategoryList">
      <h1>POPULAR CATEGORIES</h1>
      <ul>{output}</ul>
      <AddCategory/>
    </div>
  );
}
