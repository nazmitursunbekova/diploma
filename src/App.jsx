import { getDocs } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import { categoryCollection, productCollection } from "./firebase";
import About from "./pages/About";
import Category from "./pages/Category";
import Contacts from "./pages/Contacts";
import Delivery from "./pages/Delivery";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";

export const AppContext = createContext({
  categories: [],
  products: [],

//корзина
  cart: {},
  setCart: () => {},
  user: null, // здесь будет храниться информация про пользователя
});


export default function App() {
const [categories, setCategories] = useState([]);
const [products, setProducts] = useState([]);

  // состояние которое хранит информацию пользователя
  const [user, setUser] = useState(null);

//корзина
const [cart, setCart] = useState(() => {
  return JSON. parse (localStorage.getItem("cart")) || {};
});
useEffect (() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);
//

useEffect(() => {
  getDocs(categoryCollection)
    .then(snapshot => {
    const newCategories = [];

    snapshot.docs.forEach(doc => {
      const category = doc.data();
      category.id = doc.id;

      newCategories.push(category);
      });

      setCategories(newCategories);

    })

    getDocs(productCollection)
    .then(snapshot => {
    const newProducts = [];

    snapshot.docs.forEach(doc => {
      const product = doc.data();
      product.id = doc.id;

      newProducts.push(product);
      });

      setProducts(newProducts);

    })
}, []);
//
  return (
    <div className="App">
<AppContext.Provider value={{ categories, products, cart, setCart }}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/category/:path" element={<Category />} />
          <Route path="/product/:path" element={<Product />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="*" element={<NotFound />} />

        </Routes>
      </Layout>

      </AppContext.Provider>

    </div>
  );
}