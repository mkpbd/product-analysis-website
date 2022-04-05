import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Reviews from './components/Reviews/Reviews';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Dashboard from './components/Deshboard/Dashboard';
import Blogs from './components/Blogs/Blogs';






function App() {
  return (
    <>
      <Header></Header>
      <Routes>
         <Route path='/' element={<Home></Home>}></Route>
         <Route path='/blogs' element={<Blogs></Blogs>}></Route>
         <Route path='/Home' element={<Home></Home>}></Route>
         <Route path='/about' element={<About></About>}></Route>
         <Route path='/reviews' element={<Reviews></Reviews>}></Route>
         <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
         <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>

      {/* <Products></Products> */}
   
    
    </>
  );
}

export default App;
