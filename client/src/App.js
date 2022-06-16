import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Auth from './Component/Admin/Auth/Auth';
import UserDetail from './Component/Client/UserDetail/userProfile';
import AddToCart from './Component/Client/UserDetail/addToCart/addToCart';
import HomePageForm from './Component/Admin/homePageAdmin/Admin';
import FoodPage from './Component/Admin/foodPageAdmin/foodAdmin';
import NavBar from './Component/Extra/navBar/navBar';
import PageNotFound from './Component/Extra/pageNotFound';
const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
  return (
    <BrowserRouter>
      <React.StrictMode>
        <Container maxWidth='xl' style={{
          margin: '0px',
          padding: '0px',
          overflow: 'hidden',
        }} >
          <NavBar />
          <Routes>
            <Route path="/home" element={<HomePageForm />} />
            <Route path="/food" element={<FoodPage />} />
            <Route path="/" exact element={<Navigate to="/home" />} />
            <Route path="/auth" exact element={<Auth />} />
            <Route path="/profile" element={<UserDetail />} />
            {!user?.result?.role ? <Route path="/cart" element={<AddToCart />} /> : <Route path="/payment" element={<AddToCart />} />}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Container>
      </React.StrictMode>
    </BrowserRouter>
  )
};

export default App;