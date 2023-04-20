import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Delivery from "./pages/Delivery";
import Category from "./pages/Category";
import { createContext, useEffect, useState } from "react";
import { getDocs } from "firebase/firestore";
import { categoryCollection, productCollection } from "./firebase";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";

export const AppContext = createContext({
  categories: [],
  products: [],
  //корзина
  cart:{},
  setCart:() =>{}
});
export default function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
//корзина
const [cart, setCart]=useState({})
return JSON.parge(localStorage.getItem("cart"))
  useEffect(() => {
    localStorage.setItem("card, JSON.stringify(cart")



    useEffect(() => {
    getDocs(categoryCollection).then((snapshot) => {
      const newCategories = [];
      snapshot.docs.forEach((doc) => {
        const category = doc.data();
        category.id = doc.id;

        newCategories.push(category);
      });
      setCategories(newCategories);
    });
    getDocs(productCollection).then((snapshot) => {
      const newProducts = [];
      snapshot.docs.forEach((doc) => {
        const product = doc.data();
        product.id = doc.id;

        newProducts.push(product);
      });
      setProducts(newProducts);
    });
  }, []);

  return (
    <div className="App">
      <AppContext.Provider value={{ categories, products , cart, setCart }}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Contacts" element={<Contacts />} />
            <Route path="/Delivery" element={<Delivery />} />
            <Route path="/category/:path" element={<Category />} />
          
          <Route path="/cart" element={<Cart/>}/>
          <Route  path="*"   element={<NotFound/>}/>
          <Route path="/product/:path" element={<Product/>} />
          </Routes>
        </Layout>
      </AppContext.Provider>
    </div>
  );
  }
