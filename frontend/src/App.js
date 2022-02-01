import { BrowserRouter as Router, Route,} from "react-router-dom";
import MessengerCustomerChat from 'react-messenger-customer-chat';
import { useEffect, useState } from "react";
import Header from "./com/layout/Header";
import Footer from "./com/layout/Footer";
import Home from "./com/Home";
import './App.css';

// cart import 
import Cart from "./com/cart/Cart";
import Shipping from "./com/cart/Shipping";
import ConfirmOrder from "./com/cart/ConfirmOrder";
import Payment from "./com/cart/Payment";

// order import 
import OrderSuccess from "./com/cart/OrderSuccess";
import OrderList from "./com/order/OrderList";
import OrderDetails from "./com/order/OrderDetails";

// product import 
import ProductDetails from "./com/product/ProductDetails";

// user import
import Login from "./com/user/Login";
import Register from "./com/user/Register";
import Profile from "./com/user/Profile";
import UpdateProfile from "./com/user/UpdateProfile";
import UpdatePassword from "./com/user/UpdatePassword";
import ForgotPassword from "./com/user/ForgotPassword";
import ResetPassword from "./com/user/ResetPassword";
import TermsCondition from "./com/policy/TermsCondition";
import Trems from "./com/terms/Trems";

// admin import 
import Dashboard from "./com/admin/Dashboard";
import ProductList from "./com/admin/ProductList";
import CreateProduct from "./com/admin/CreateProduct";
import UpdateProduct from "./com/admin/UpdateProduct";
import OrdersListAdmin from "./com/admin/OrderListAdmin";
import ProcessOrder from "./com/admin/ProcessOrder";
import UsersList from "./com/admin/UsersList";
import UpdateUser from "./com/admin/UpdateUser";
import ProductReviews from "./com/admin/ProductReviews";
import SliderList from "./com/admin/SliderList";
import CreateSlider from "./com/admin/CreateSlider";
// import UpdateSlider from "./com/admin/UpdateSlider";

import ProtectedRoutes from "./com/routes/ProtectedRoutes";
import { loadUser } from './actions/userActions';
import { useSelector } from 'react-redux'
import store from './store';
import axios from "axios";

// Payment
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

function App() {

  const [stripeApiKey, setStripeApiKey] = useState('');

  useEffect(() => {
    
    store.dispatch(loadUser());

    async function getStripeApiKey() {
      const {data} = await axios.get('/api/v1/stripeapi')
      setStripeApiKey(data.stripeApiKey)
    }

    getStripeApiKey();

  }, [])

  const { user, isAuthenticated, loading } = useSelector(state => state.auth)

  return (
    <Router>
      <div className="App">

      <MessengerCustomerChat pageId={process.env.REACT_APP_PI} appId={process.env.REACT_APP_AI} />

        <Header  />
        <div className="container container-fluid">
          <Route path="/" component={Home} exact />
          <Route path="/search/:keyword" component={Home}  />
          <Route path="/product/:id" component={ProductDetails} exact />

          <Route path="/cart" component={Cart} exact />
          <ProtectedRoutes path="/shipping" component={Shipping} />
          <ProtectedRoutes path="/confirm" component={ConfirmOrder} exact />
          <ProtectedRoutes path="/success" component={OrderSuccess} />

          {stripeApiKey &&
            <Elements stripe={loadStripe(stripeApiKey)}>
              <ProtectedRoutes path="/payment" component={Payment} />
            </Elements>
          }

          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/password/forgot" component={ForgotPassword} exact/>
          <Route path="/password/reset/:token" component={ResetPassword} exact/>
          <ProtectedRoutes path="/me" component={Profile} exact />
          <ProtectedRoutes path="/me/update" component={UpdateProfile} exact />
          <ProtectedRoutes path="/password/update" component={UpdatePassword} exact />

          <ProtectedRoutes path="/orders/me" component={OrderList} exact />
          <ProtectedRoutes path="/order/:id" component={OrderDetails} exact />
          <Route path='/terms' component={TermsCondition} />
          <Route path='/policy' component={Trems} />
        </div>

        {/* deshboard  */}
        <ProtectedRoutes path="/dashboard" isAdmin={true} component={Dashboard} exact />
        <ProtectedRoutes path="/admin/products" isAdmin={true} component={ProductList} exact />
        <ProtectedRoutes path="/admin/product" isAdmin={true} component={CreateProduct} exact />
        <ProtectedRoutes path="/admin/product/:id" isAdmin={true} component={UpdateProduct} exact />
        <ProtectedRoutes path="/admin/orders" isAdmin={true} component={OrdersListAdmin} exact />
        <ProtectedRoutes path="/admin/order/:id" isAdmin={true} component={ProcessOrder} exact />
        <ProtectedRoutes path="/admin/users" isAdmin={true} component={UsersList} exact />
        <ProtectedRoutes path="/admin/user/:id" isAdmin={true} component={UpdateUser} exact />
        <ProtectedRoutes path="/admin/reviews" isAdmin={true} component={ProductReviews} exact />
        <ProtectedRoutes path="/admin/sliders" isAdmin={true} component={SliderList} exact />
        <ProtectedRoutes path="/admin/slider" isAdmin={true} component={CreateSlider} exact />
        {/* <ProtectedRoutes path="/admin/slider/:id" isAdmin={true} component={UpdateSlider} exact/> */}
        {!loading && (!isAuthenticated || user.role !== 'admin') && (
          <Footer />
        )} 
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
