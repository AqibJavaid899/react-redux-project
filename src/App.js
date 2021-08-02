import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Products from './components/Products';
import SelectedProduct from './components/SelectedProduct';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Products} />
          <Route path='/product/:productId' exact component={SelectedProduct} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
