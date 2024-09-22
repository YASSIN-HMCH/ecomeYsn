import React ,{useState,useEffect} from 'react';
import './App.css'
import {   BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './compenet/Home';
import Product from './compenet/Product';
import Info from "./info_produit/info";
import Register from "./Register/Register"
import Contact from './compenet/Contact';
import MoreDetail from './info_produit/MoreDetail';




function App(){
    const  [backendData,setBackendData]=useState(null)
    useEffect(()=>{
        fetch("/products").then(
            response => response.json()
        ).then(
            data =>{
                setBackendData(data)
            }
        )
    },[])
    return(
        <>
        
            <Router>
                <div>
                <Routes>
                <Route path="/"  element={<Home/>} />
                <Route path="/product" element={<Product/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/info/:id" element={<Info />} />
                <Route path="/register" element={<Register/>} />
                <Route path="/products/:productId/categories/:categoryId" element={<MoreDetail />} />
                </Routes>
                </div>

            </Router>



        
        

        </>
    );
}
export default App;
