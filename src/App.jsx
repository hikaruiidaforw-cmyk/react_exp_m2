// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { useEffect, useState } from 'react'

import Chart from "./pages/chart";
import Home from "./pages/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./pages/notfound";
import Customer from "./pages/customer";
import Orders from "./pages/orders";
import{useForm} from "./hooks/useForm";


function App() {

  const{
    handleNameChange,
    handleEmailChange,
    name,
    email,
    data,
   
    } = useForm();

  return (
    <>
     {/*  */}

     {/* <Router> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/orders" element={<Orders />} />

   
        </Routes>
      {/* </Router> */}
    
     {/* <Header /> 
     <SlideBar />
     <News />
     <CalendarItem />
     <Chart /> */}

{/* {data.map((item,index) => (
        <div key={index}>
          <p>{item.id}</p>
          <p>{item.title}</p>
          <p>{item.userId}</p>
        </div>
      ))} */}


     {/* <div>
      <p>名前が入ります </p>
        <input 
         type="text"
         placeholder="名前を入力してください" 
         value={name}  
         onChange={handleNameChange} />
     </div>

     <div>
      <p>メールアドレスが入ります  </p>
        <input 
        type='text' 
        placeholder='メールアドレスを入力してください' 
        value={email} 
        onChange={handleEmailChange} />
     </div> */}

     {/*  */}
    </>
  )
}

export default App
