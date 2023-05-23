import { NavLink } from "react-router-dom";
import "./CategoryList.css";
import { useContext } from "react";
import { AppContext } from "../../App";
import AddCategory from "../AddCategory/AddCategory";
import DeleteCategory from "../DeleteCategory/Dele/DeleteCategory";

export default function CategoryList() {
  const { categories } = useContext(AppContext);
  categories.sort((a, b) => b.weight - a.weight);

  const output = categories
    .sort((a, b) => a.weight - b.weight)
    .map((category) => (
      <li key={category.id}>
        <NavLink className="Category" to={"/category/" + category.path}>
          {category.name}
        </NavLink>
        <DeleteCategory category={category} />
      </li>
    ));

  return (
    <div className="CategoryList">
      <p>POPULAR CATEGORY</p>
      <ul>{output}</ul>
      <AddCategory />
    </div>
  );
}
