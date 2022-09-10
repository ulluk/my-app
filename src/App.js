import React from "react";
import "./App.css"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./components/pages/main/Main";
import Form from "./components/pages/Form/Form";
import Header from "./components/Header";
import Catalog from "./components/pages/catalog/Catalog";
import NotFound from "./components/pages/notFound/NotFound";
import Iphone from "./components/pages/iphone/Iphone";
import Ipad from "./components/pages/ipad/Ipad";
import Watch from "./components/pages/watch/Watch";
import Iphones from "./components/pages/iphones/Iphones";

const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Main/>} />
                <Route path="/catalog" element={<Catalog/>}>
                    <Route path="iphone" element={<Iphone/>}/>
                    <Route path="ipad" element={<Ipad/>}/>
                    <Route path="watch" element={<Watch/>}/>
                </Route>
                <Route path="/iphones" element={<Iphones/>} />
                <Route path="/form" element={<Form/>} />
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;