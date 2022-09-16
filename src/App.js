import './App.css';
import Header from './components/Header';
import {Routes,Route} from "react-router-dom"
import CartDetails from "./components/cartDetails"
import Cards from './components/Cards';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Cards/>}/>
        <Route path='/cart/:id' element={<CartDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
