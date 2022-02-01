import React, {useState,useEffect, useRef} from 'react';
import { Link } from 'react-router-dom'
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';

import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./theme";
import Search from './Search';
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from 'react-alert';
import {logout} from '../../actions/userActions'
import Nav from './nav-ui/Nav';

// import { ReactComponent as BellIcon } from '../../icons/bell.svg';
// import { ReactComponent as MessengerIcon } from '../../icons/messenger.svg';
// import { ReactComponent as CaretIcon } from '../../icons/caret.svg';
// import { ReactComponent as PlusIcon } from '../../icons/plus.svg';
import { ReactComponent as CogIcon } from '../../icons/cog.svg';
import { ReactComponent as ChevronIcon } from '../../icons/chevron.svg';
import { ReactComponent as ArrowIcon } from '../../icons/arrow.svg';
import { ReactComponent as BoltIcon } from '../../icons/bolt.svg';
import { ReactComponent as BurgerIcon } from '../../icons/bars-solid.svg';


import { CSSTransition } from 'react-transition-group';


function Header() {
    // {countryName} 

    const alert = useAlert();
    const dispatch = useDispatch();
    const {user, loading} = useSelector(state => state.auth)
    const {cartItems} = useSelector(state => state.cart)

    const logoutHandler = () => {
        dispatch(logout());
        alert.success('Logout successfully.')
    }

    const StyledApp = styled.div`
    color: ${(props) => props.theme.fontColor};
    `;
    
    const [theme, setTheme] = useState("light");

    const themeToggler = () => {
      theme === "light" ? setTheme("dark") : setTheme("light");
    };

    return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <StyledApp>
        </StyledApp>
        <React.Fragment>
            <nav className="navbar row">
                <div className="col-12 col-md-3 order-sm-1 col-sm-6 order-md-1 col-mobile-5">
                    <div className="logo_location">
                        <div className="navbar-brand">   
                        <Nav />                     
                            <Link to="/" class='text-decoration-none'>
                                <img src="../images/shopit_logo2.png" alt="Logo" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 mt-2 mt-md-0 order-sm-3 col-sm-12 order-md-2">
                    <Search />
                </div>

                <div className="col-md-3 mt-md-0 text-md-center text-sm-center order-sm-2 order-md-3 col-sm-6 col-mobile-6">

                
                    {/* <button >btn</button> */}

                    <Link to="/cart" className='cart_link'>
                        <span id="cart" className="ml-3 cart"><ShoppingCartSharpIcon /></span>
                        <span className="cart_length_round badge-danger" id="cart_count">{cartItems.length}</span>
                    </Link>

                    {user ? (

                        <div className="dropdow d-inline">
                            <Link to='#!' className='btn dropdown-toggle text-white profile__zone' id='dropDownMenuButton' type='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                                <figure className="avatar avatar-nav">
                                    <img 
                                        src={user.avatar && user.avatar.url } 
                                        alt={user && user.name}
                                        className='rounded-circle'
                                    />
                                </figure>
                                <span className='text-white app__text_color'>
                                    {user && user.name}
                                    {/* <i className="fa fa-tachometer"></i> */}
                                </span>
                            </Link>


                            <div className="dropdown-menu" aria-labelledby="dropDownMenuButton">

                                {user && user.role === 'admin' && (
                                    // <i className="fa fa-tachometer"></i>
                                    <Link to="/dashboard" className="dropdown-item menu-item">Dashboard</Link>
                                )}

                                <Link to="/orders/me" className="dropdown-item menu-item">Orders</Link>
                                <Link to="/me" className="dropdown-item menu-item">Profile</Link>
                                <Link to="/" className="dropdown-item text-danger menu-item" onClick={logoutHandler}>
                                    Logout
                                </Link>
                                <div className="dark__mood menu-item"> Dark Mood
                                    <label class="switch mb-0">
                                        <input type="checkbox" onClick={() => themeToggler()} />
                                        <span class="slider round"></span>
                                    </label>
                                </div>
                            </div>
                        </div>

                            
                        ) : !loading && <Link to="/login" className="btn ml-4" id="login_btn">Login</Link>
                        
                    }
                    

                    
                </div>
            </nav>
        </React.Fragment>
    </ThemeProvider>
    )
}


export default Header
