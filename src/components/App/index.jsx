 import { Context } from "../../context";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'; 
import { Routes, Route} from 'react-router-dom';
import PageCategories from "../../pages/PageCategories";
import PagePromotions from '../../pages/PagePromotions';
import HomePage from "../../pages/HomePage";
import BasketPage from "../../pages/BasketPage";
import NotFoundPage from '../../pages/NotFoundPage';
import Layout from "../Layout";
import ProductsContainer from "../ProductsContainer";
import PageProductDescription from "../../pages/PageProductDescription";
import { loadCategories } from '../../store/asyncActions/categories';
import {loadPromotionProducts } from "../../store/asyncActions/products";
import Footer from "../Footer";
import Contacts from "../Contacts";


function App() {
 const categories = useSelector(state => state.categories);
  const dispatch = useDispatch();
    useEffect(() => {
      dispatch(loadCategories());
      dispatch(loadPromotionProducts())
    }, []) 
  
  return ( 
   <Context.Provider value={{categories}}> 
      <Routes >
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          <Route path='all_categories' element={<PageCategories />} />
          <Route path='basket' element={<BasketPage />} />
          <Route path='contacts' element={<Contacts/>} />
          <Route path='categories/:id_category' element={<ProductsContainer />} />
          <Route path='product/:id_product' element={<PageProductDescription/>}/>
          <Route path= "all_products" element={<PagePromotions/>}/>
          <Route path='footer' element={<Footer />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
 </Context.Provider> 
  );
}

export default App;
