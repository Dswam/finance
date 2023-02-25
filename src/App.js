import React, { Suspense} from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import Investment from './component/Investment';
import Blog from './component/Blog';
// import { ErrorBoundary } from 'react-error-boundary';
// import ErrorFallback from './component/ErrorBoundary';
const Home=React.lazy(()=>import("./pages/Home"))
const About=React.lazy(()=>import("./component/About"))
const Login=React.lazy(()=>import("./component/Login"))
const Contact=React.lazy(()=>import("./component/Contact"))
function App() {
  return (
    
    <>
      <BrowserRouter>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/investment" element={<Investment/>}/>
          <Route path="/blog" element={<Blog/>}/>
        </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </>

  )


}

export default App;
