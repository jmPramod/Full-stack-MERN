import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom"

import List from './list/List';
import SingleHotelPage from './pages/hotel/SingleHotelPage';
import NavBar from './components/NavBar';
import Home from './pages/home/Home';
import Header from './components/header/Header';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file





function App() {
  return (
    <div className="App">
   <BrowserRouter>
  
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/hotel" element={<List/>}></Route>
    <Route path="/hotel/:id" element={<SingleHotelPage/>}></Route>
   
   </Routes>
   
   
   </BrowserRouter>
   
   
    </div>
  );
}

export default App;
