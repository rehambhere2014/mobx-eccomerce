import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite'
import { useStore } from './store/RootStore';
import { products_url as url } from './store/Api'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/pages/homePage/Home';
import Navbar from './components/navbar/Navbar';
import GlobalStyle from './globalStyles';
import Products from './components/pages/productsPage/Products';
import SingleProduct from './components/pages/singleProduct/SingleProduct';
const App: React.FC = () => {

  return (

    <Router>
      <Navbar />

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path="/products" component={Products} exact />
        <Route path="/products/:id" children={<SingleProduct />} exact />
      </Switch>


      <GlobalStyle />
    </Router>

  )
}

export default observer(App)