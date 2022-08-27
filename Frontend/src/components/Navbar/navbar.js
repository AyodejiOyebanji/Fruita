import React, { useContext } from "react";
import "../Navbar/navbar.css";
import { Link } from "react-router-dom";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Sidebar from "../Sidebar/Sidebar";
import Badge from "react-bootstrap/Badge";
import { Store } from "../Store/Store";
import NavDropdown from "react-bootstrap/NavDropdown";


function navbar() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;
 

  const signout = () => {
    ctxDispatch({ type: "USER_SIGNOUT" });

    localStorage.removeItem("userInfo");
    localStorage.removeItem("shippingAddress")
    localStorage.removeItem("paymentMethod")
    window.location.href="/login"
  };



 
  

  return (
    <div className="whole_nav ">
      <div className="row sticky-top" id="navbar">
        <Link to="/" className="col-md-2 mt-3 logo text-decoration-none">
          <h1>Fruity</h1>
        </Link>
        <input
          type="search"
          placeholder="Search"
          id="search_box"
          className="col-md-5 mt-4"
         
        />
        <div className="col-md-2 mt-4 text-dark">
         
          
               {userInfo ? (
                 <NavDropdown title={userInfo.name} id="basic-nav-dropdown"  >
                   <ul>
                     <li className="text-dark">History</li>
                     <li className="text-dark">Profile</li>
                   </ul>

                  
                  
                   <NavDropdown.Divider/>
                   <Link className="dropdown-item" to="#signout" onClick={()=>signout()}>
                  Sign Out
                   </Link>
                 </NavDropdown>
                
                
              ) : ( 
                <Link className="nav-link" to="/login">Sign In</Link>
              )}
             
             
        </div>
        

        <Link to="/cart" className="col-md-2 mt-4 text-dark">
          <button className="cart_butn ">
            <ShoppingCartOutlinedIcon className="ms-1 mt-2  " />
            {cart.cartItems.length > 0 && (
              <Badge pill bg="danger">
                {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
              </Badge>
            )}
          </button>
        </Link>
      </div>
      <div className="row" id="sec_navbar">
        <button className="Category_butn col-md-3">Categories</button>
        <ul className="col-md-9 mt-3 d-flex justify-content-center">
            <li className="p-2 "><Link to="/" className="subNavLink">Home</Link></li>
            <li className="p-2 "><Link to="/about" className="subNavLink">About Us</Link></li>
             
         
          <li className="p-2">Shop</li>
          <li className="p-2">Blog</li>
          <li className="p-2">Contact</li>
          <li className="text-end">  {
                userInfo && userInfo.isAdmin && (
                  <NavDropdown title="Admin" id="admin-nav-dropdown" className="text-white">
                    <ul>

                      <li className=" text-dark"><Link to="/admin/dashBoard" className="links">Dashboard</Link> </li>
                     
                    </ul>
                   
                  </NavDropdown>
                )
              }</li>
        </ul>
      </div>

      {/* small screen navbar starts here */}
      <div
        className="d-flex justify-content-center"
        id="third_nav"
        style={{ display: "none" }}
      >
        {/* <button className="ms-2 mb-2 fs-5 acct2_butn">
          <DehazeOutlinedIcon />
        </button> */}
        <Sidebar />

        <Link to="/" className="text-decoration-none">
          <h1 className="mt-3 ms-3 fs-4 logo_2 text-decoration-none">
            Fruity
          </h1>
        </Link>
        <Link to="/login">
          <button>
            {/* <PermIdentityOutlinedIcon className="ms-4 fs-1 mt-3 acct2_butn" /> */}
            {
  userInfo && userInfo.isAdmin && (
    <NavDropdown title={<PermIdentityOutlinedIcon size="7vh" className="text-light" />}id="admin-nav-dropdown" className="text-white mt-4">
      <ul>
      <li className=" text-dark"><Link to="/admin/dashBoard" className="links">Dashboard</Link> </li>

      </ul>
     
    </NavDropdown>
  )
}

          </button>
        </Link>
        <Link to="/cart">
          <button>
            <ShoppingCartOutlinedIcon className="ms-4 fs-1 mt-3 cart2_butn" />
            {cart.cartItems.length > 0 && (
              <Badge pill bg="danger">
                {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
              </Badge>
            )}
          </button>
        
        </Link>
        {/* <Link to="/">
          <button>
            <LocalPhoneOutlinedIcon className="ms-4 fs-1 mt-3 cart2_butn" />
          </button>
        </Link> */}
      </div>
    </div>
  );
}

export default navbar;
