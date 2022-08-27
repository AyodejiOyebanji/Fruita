import React from "react";
import "./App.css";
import {  Routes, Route } from "react-router-dom";
import Home from "./components/Home/home";
import {
  AccountBalanceWalletRounded,
  Chat,
  Favorite,
  HomeRounded,
  Settings,
  SummarizeRounded,
} from "@mui/icons-material";
import Navbar from "./components/Navbar/navbar";
import Login from "./components/Login/login";
import Signup from "./components/Signup/signup";
import Menucont from "./components/menucontainer/menucont";
import Footer from "./components/Footer";
import MoreDetails from "./Pages/MoreDetails";
import ShippingAddress from "./components/Shipping/ShippingAddress";
import Cart from "./components/Cart/Cart";
import PaymentMethod from "./components/PaymentMethod/PaymentMethod";
import PaymentSummary from "./components/PaymentSummarry/PaymentSummary";
import CustomerAccount from "./components/UserProfile/CustomerAccount.js";
import Adminsignup from "./Admin/Adminsignup";
import AdminLogin from "./Admin/AdminLogin";
import { SnackbarProvider } from "notistack";
import MoreDetailsOfFeaturedProduct from "./components/FeaturedProducts/MoreDetailsOfFeaturedProduct";
import Order from "./components/Order/Order";
import History from "./components/OrderHistory/History";
import SecuredRoute from "./components/SecuredRoutes/SecuredRoute";
import AdminRoute from './components/AdminRoute/AdminRoute';
import AdminDashboard from './Admin/AdminDashboard';
import AboutUs from './components/StaticPages/AboutUs';

function App() {
  return (
    <>
      <SnackbarProvider maxSnack={3}>
        <Navbar />
        <Routes>
          {/* userRoutes */}
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/about" element={<AboutUs/>}></Route>
          

          <Route path="/moredetails/:id" element={<MoreDetails />} />
          <Route
            path="/morefeaturedproduct/:caption"
            element={<MoreDetailsOfFeaturedProduct />}
          />

          <Route path="/address" element={<ShippingAddress />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/paymentmethod" element={<PaymentMethod />} />
          <Route path="/PaymentSummary" element={<PaymentSummary />} />
          <Route
            path="/order/:id"
            element={
              <SecuredRoute>
                <Order />
              </SecuredRoute>
            }
          />
          <Route
            path="/orderhistory"
            element={
              <SecuredRoute>
                <History />
              </SecuredRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <SecuredRoute>
                <CustomerAccount />
              </SecuredRoute>
            }
          />

          {/* AdminRoutes */}
          <Route path="/adminsignup" element={<Adminsignup />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/admin/dashBoard" element={<AdminRoute>
            <AdminDashboard/>
          </AdminRoute>
          } />
        </Routes>
        <div className="leftMenu">
          <ul id="menu">
            <Menucont link={"#"} icon={<HomeRounded />} isHome />
            <Menucont link={"#"} icon={<Chat />} />
            <Menucont link={"#"} icon={<AccountBalanceWalletRounded />} />
            <Menucont link={"#"} icon={<Favorite />} />
            <Menucont link={"#"} icon={<SummarizeRounded />} />
            <Menucont link={"#"} icon={<Settings />} />
            <div className="indicator"></div>
          </ul>
        </div>

        <Footer />
      </SnackbarProvider>
    </>
  );
}

export default App;
