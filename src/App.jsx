import React, { use } from "react";
import ProductContainer from "./container/ProductContainer";
import { Navigate, Route, Routes } from "react-router";
import SingleProductContainer from "./container/SingleProductContainer";
import CategoryContainer from "./container/CategoryContainer";
import Navbar from "./components/Navbar";
import SearchResultCountainer from "./container/SearchResultCountainer";
import { AuthContext } from "./context/AuthContext";
import Register from "./pages/Register";
import Login from "./pages/Login";

const App = () => {
  const {user}=use(AuthContext)
  console.log(user)
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={user?<ProductContainer />:<Navigate to='/login'/>} />
          <Route path="/product/:id" element={user?<SingleProductContainer />:<Navigate to='/login'/>} />
          <Route path="/category/:id" element={user?<CategoryContainer />:<Navigate to='/login'/>} />
          <Route path="/products" element={user?<SearchResultCountainer />:<Navigate to='/login'/>} />
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={user?<Navigate to='/'/>:<Login/>}/>
        </Routes>
      </main>
    </>
  );
};

export default App;
