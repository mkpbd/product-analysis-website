import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
         <Route path='/' element={<Home></Home>}></Route>
         <Route path='/blogs' element={<Home></Home>}></Route>
         <Route path='/Home' element={<Home></Home>}></Route>
         <Route path='/reviews' element={<Home></Home>}></Route>
         <Route path='/about' element={<Home></Home>}></Route>
         <Route path='/dashboard' element={<Home></Home>}></Route>
      </Routes>

      <Products></Products>
    
    </>
  );
}

export default App;
