import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import './App.css';
import Header from "./Header"
import Cart from "./Cart"
import Home from './Home';
import styled from 'styled-components'
import { useState } from 'react'
import {db} from './firebase'
import { useEffect } from "react";

function App() {

  const [cartItems, setCartItems] = useState([]);

  const getCartItems = () => {
    db.collection('cartItems').onSnapshot((snapshot) => {
      const tempItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data()
      }))
      setCartItems(tempItems);
    })
  }

  useEffect(()=>{
    getCartItems();
  },[])

  console.log(cartItems);

  return (
    <Router>
      <Container>
      <Header/>

      <Switch>

        <Route path="/cart">
          <Cart cartItems={cartItems} />
        </Route>

        <Route path="/">
          <Home />
        </Route>

      </Switch>
      </Container>
    </Router>
  );
}

export default App;

const Container = styled.div`
  background-color: #eaeded;
`