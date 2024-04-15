import React from 'react'
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Header from './components/Header';
import Login from './pages/Login';
import Footer from './components/Footer';
import Guests from './pages/Guests';
import AddGuest from './pages/AddGuest';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import UpdateGuest from './pages/UpdateGuest';
import GenerateBill from './pages/GenerateBill'; 
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Revenue from './pages/Revenue';
const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/guests' element={<Guests/>} />
      <Route path='/addguest' element={<AddGuest/>} />
      <Route path='/revenue' element={<Revenue/>} />
      <Route path='/rooms' element={<Rooms/>} />
      <Route path='/generateBill' element={<GenerateBill/>} />
      <Route path='/room/:id' element={<SingleRoom/>} />
      <Route path='/guest/:id' element={<UpdateGuest/>} />
    </Routes>
    <Footer/>
    <ToastContainer/>
    </BrowserRouter>
  )
}

export default App