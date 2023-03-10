import logo from './logo.svg';
import React, { lazy, Suspense } from 'react'
import './App.css';
import { Singledata} from "./crud/Config/Api"

import { BrowserRouter, Routes, Route } from 'react-router-dom'
  const Addcategory = lazy(()=>import('./crud/category/Addcategory'))
  const CategoryList = lazy(()=>import('./crud/category/CategoryList'))
  const AddProduct = lazy(()=>import('./crud/products/AddProduct'))
  const ProductList = lazy(()=>import('./crud/products/ProductList'))
   const UpdateCategory =lazy(()=>import('./crud/category/UpdateCategory'))
   const UpdateProduct=lazy(()=>import('./crud/products/updateProducts'))
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense>
          <Routes>
            <Route path="/" element={<Addcategory/>}/>
            <Route path="/CategoryList" element={<CategoryList/>}/>
            <Route path="/AddProduct" element={<AddProduct/>}/>
            <Route path="/ProductList" element={<ProductList/>}/>
            <Route path="/Updateedata/:id" element={<UpdateCategory/>}/>
            <Route path="/UpdateProduct/:id" element={<UpdateProduct/>}/>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
