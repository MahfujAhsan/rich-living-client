import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import SingleProduct from './Pages/Home/SingleProduct';
import Login from './Pages/Login/Login';
import Navbar from './Shared/Navbar';
import Admin from './Admin/Admin.js';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='project/:id' element={<SingleProduct/>}/>
        <Route path='admin' element={<Admin/>}/>
        <Route path='login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
