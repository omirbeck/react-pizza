import React from 'react';
import {Route} from 'react-router-dom'

import { Header } from './components';
import { Home, Cart } from './pages';

function App() {
  const [pizzas, setPizzas] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:3000/db.json')
      .then(response => response.json())
      .then(data =>  setPizzas(data.pizzas))
      .catch(err => console.log(err))  
    
  }, [])

  console.log(pizzas)

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path='/' component={Home}/>
        <Route exact path='/cart' component={Cart}/>
      </div>
    </div>
  );
}

export default App;
