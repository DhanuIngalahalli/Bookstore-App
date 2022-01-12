import logo from './logo.svg';
import './App.css';
// import Signup from './Pages/Signup/Registration';
// import Login from './Pages/Login/Login';
// import Header from './Components/Header/Header';
// import Home from './Pages/Home/Home';
// import Page from './Pages/Page/Page';
// import Cards from './Components/Cards/Cards';
// import Book from './Components/Book/Book';
import MyCart from './Components/MyCart/MyCart';
import Router from './Router/Router';
import Orderplaced from './Pages/Orderplaced/Orderplaced';


function App() {
  return (
    <div className="App">

    {/* <Router/> */}


       {/* <Signup/> */}
       {/* <Login/> */}
       {/* <Header /> */}
       {/* <Home /> */}
       {/* < Page /> */}
         {/* <Book/> */}
       {/* < Cards /> */}
      <MyCart />
      {/* <Orderplaced /> */}
    </div>
  );
}

export default App;
