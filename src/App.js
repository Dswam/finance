import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './component/Header';
import About from './component/About';
import Contact from './component/Contact';
import Login from './component/Login';

function App() {
  return(
    <>
     
    <BrowserRouter>
     <Header />

      <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/about" element={<About/>} />
         <Route path="/benefits" element={<Login/>} />
         <Route path="/contact" element={<Contact/>} />
         </Routes>

   </BrowserRouter>
 </>

  )


}

export default App;
