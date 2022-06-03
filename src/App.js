import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Navbar from './Pages/Shared/Navbar';
import Admin from './Pages/Admin/Admin.js';
import SignUp from './Pages/Login/SignUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './Pages/Shared/ProtectedRoute';
import SingleService from './Pages/Home/SingleService';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='booking/:id' element={
          <ProtectedRoute>
            <SingleService/>
          </ProtectedRoute>} />
        <Route path='admin' element={<Admin />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<SignUp />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
