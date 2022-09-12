import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Order from './Components/Orders/Order';
import Shop from './Components/Shop/Shop';
import Inventory from './Components/Inventory/Inventory';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';
import Homepage from './Components/Homepage/Homepage';



function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Homepage></Homepage>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/orders' element={<Order>++</Order>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
