import React from 'react';
import { useDispatch } from 'react-redux';

import { Header } from './components';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';

function App() {  
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path='/' component={Home} />
        <Route exact path='/cart' component={Cart} />
      </div>
    </div>
  )
}

export default App;


// class App extends React.Component {

// render() {
//   return (

//   )
// }
  
// const mapStateToProps = (state) => {
//   return {
//     items: state.pizzas.items,
//     filters: state.filters
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setPizzas: (items) => dispatch(setPizzasAction(items)),
//   }
// }


// export default connect((state) => {
//   return {
//     items: state.pizzas.items,
//     filters: state.filters
//   } }, (dispatch) => {
//     return {
//       setPizzas: (items) => dispatch(setPizzasAction(items)),
//     }
//   })(App);
