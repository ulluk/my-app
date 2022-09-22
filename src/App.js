import React from "react";
import "./App.css"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./components/pages/main/Main";
import Form from "./components/pages/Form/Form";
import Header from "./components/Header";
import Catalog from "./components/pages/catalog/Catalog";
import NotFound from "./components/pages/notFound/NotFound";
import Products from "./components/pages/Products/Products";
import About from "./components/pages/about/About";
import FetchTest from "./components/pages/fetchTest/FetchTest";
import AddProducts from "./components/pages/addProducts/AddProducts";

const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/form" element={<Form/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/catalog" element={<Catalog/>}/>
                <Route path="/catalog/:catalog_name" element={<Products/>}/>
                <Route path="/fetchTest" element={<FetchTest/>}/>
                <Route path="/addProducts" element={<AddProducts/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;