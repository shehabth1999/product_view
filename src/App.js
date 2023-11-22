import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Suspense, useState} from 'react';
import { BackgroundContext, LanguageContext } from './components/context/backgroundColor';


// import NavScrollExample from "./components/nav-header/header"
// import Home from './components/pages/ProductHome';
// import ProductDetails from './components/pages/ProductDetails'
// import ProductNotFound from './components/pages/ProductNotFound'
// import LoginPage from './components/pages/Login';
// import CartPage from './components/pages/Cart';
// import ProductQuantitySelector from './components/widgets/counter'


const NavScrollExample = React.lazy(() => import('./components/nav-header/header'));
const Home = React.lazy(() => import('./components/pages/ProductHome'));
const ProductDetails = React.lazy(() => import('./components/pages/ProductDetails'));
const ProductNotFound = React.lazy(() => import('./components/pages/ProductNotFound'));
const Register = React.lazy(() => import('./components/pages/Register'));
const CartPage = React.lazy(() => import('./components/pages/Cart'));
const ProductQuantitySelector = React.lazy(() => import('./components/widgets/counter'));
const DropdownBTN =React.lazy(()=>import('./components/widgets/dropdown'))



function App() {

  const [background, setBackground] = useState(true);
  const [language,setLanguage] = useState("EN");
  return (
    <div style={{backgroundColor: background ?"white":"#333",direction:(language==="AR")?"rtl":"ltr"}}>
    <Suspense fallback={<div className='text-center'><h1>LOADING...</h1></div>}>
      <BackgroundContext.Provider value={{background,setBackground}}>
        <LanguageContext.Provider value={{language,setLanguage}}>
    <BrowserRouter>
        <NavScrollExample />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/product-detiles/:id' element={<ProductDetails/>}/>
            <Route path='/Register' element={<Register/>}/>
            <Route path='/cart' element={<CartPage/>}/>
            <Route path='/counter' element={<ProductQuantitySelector/>}/>
            <Route path='/dropdown' element={<DropdownBTN/>}/>
            <Route path='*' element={<ProductNotFound/>}/>
          </Routes>
    </BrowserRouter>
    </LanguageContext.Provider>
    </BackgroundContext.Provider>
    </Suspense>
    </div>
  );
}

export default App;
