import './App.css';
import Purchase from './components/Purchase';
import Cart from './components/Cart';
import Total from './components/Total';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <div className="row mt-4">
        <Login />
        <Purchase />
        <Cart />
        <Total />
      </div>
    </div>
  );
}

export default App;
