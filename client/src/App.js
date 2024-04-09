import { Routes, Route, Navigate } from 'react-router-dom';
import NurseryFormControl from './Pages/AddNursery/NurseryFormControl';
import LandingPage from './Pages/LandingPage/LandingPage';
import Login from './Pages/LoginReg/Login';
import Register from './Pages/LoginReg/Register';
import HomePage from './Pages/HomePage/HomePage';
import UserProfile from './Pages/UserProfile/UserProfile';
import SingleProductPage from './Pages/SingleProductPage/SingleProductPage';
import SingleNurseryPage from './Pages/SingleNurseryPage/SingleNurseryPage';
import SingleCategoryPage from './Pages/HomePage/SingleCategoryPage';
import AddProductControl from './Pages/AddProductDetails/AddProductControl';
import AddtoCartPage from './Pages/AddtoCartPage/AddtoCartPage'
import { useSelector } from 'react-redux';
import './App.css';

function App() {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <div>
      <Routes >
        <Route path="/" element={<LandingPage />} />
        <Route path="/Login" element={user ? <Navigate to="/Home" /> : <Login />} />
        <Route path="/Register" element={user ? <Navigate to="/Home" /> : <Register />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/UserProfile/:username" element={user ? <UserProfile /> : <Navigate to="/Login" />} />
        <Route path="/AddProductControl" element={<AddProductControl />} />
        <Route path="/category/:categ" element={<SingleCategoryPage />} />
        <Route path="/SetupNursery" element={(user && user.isAdmin) ? <NurseryFormControl /> : <Navigate to="/Login" />} />
        <Route path="/Home/Products/:productId" element={<SingleProductPage />} />
        <Route path="/category/:categ/Products/:productId" element={<SingleProductPage />} />
        <Route path="/nursery/:nurseryId" element={<SingleNurseryPage />} />
        <Route path="/Cart" element={user ? <AddtoCartPage /> : <Navigate to="/Login" />} />
      </Routes>
    </div>
  );
}

export default App;

