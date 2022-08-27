import React, { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import { AiOutlineMenu } from 'react-icons/ai';
import '../Sidebar/sidebar.css';
import { Store } from '../Store/Store';
import { Link } from 'react-router-dom';

function Sidebar() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {  userInfo } = state;
  const signout = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });

    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
    window.location.href = '/login';
  };

  // for side nave bar
  const [stateSide, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...stateSide, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="d-flex justify-content-center mt-5">
        {userInfo ? (
          <p>
            {' '}
            Hi, <small className="smallscreenname">{userInfo.name}</small>{' '}
          </p>
        ) : (
          <Link className="nav-link" to="/login">
            Sign In
          </Link>
        )}
      </div>
      <div>
        <ul>
          <li>
            {' '}
            <button className="allCategory"> All Category</button>{' '}
          </li>
          <li className="sideNavText text-dark text-center mt-2">
            <Link to="/" className="subNavLinkSide">
              Home
            </Link>
          </li>
          <li className="sideNavText text-dark text-center mt-2">
            <Link to="/about" className="subNavLinkSide">
              About Us{' '}
            </Link>
          </li>
          <li className="sideNavText text-dark text-center mt-2">Shop</li>
          <li className="sideNavText text-dark text-center mt-2">Blog</li>
          <li className="sideNavText text-dark text-center mt-2">Contact</li>
          <li
            className="sideNavText text-dark text-center mt-2"
            onClick={() => signout()}
          >
            Sign Out
          </li>
        </ul>
      </div>
    </Box>
  );

  return (
    <div>
      <div className="toogleIcon mt-2">
        {['left'].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>
              <AiOutlineMenu size="30px" color="white" />
            </Button>
            <SwipeableDrawer
              anchor={anchor}
              open={stateSide[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              {list(anchor)}
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
