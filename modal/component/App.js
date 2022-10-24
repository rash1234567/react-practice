import './App.css';
import ReactDOM  from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Blogs from './pages/Blogs';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import Layout from './pages/Layout'
import Projects from './pages/project';
import About from './pages/about';
function App() {
  return (
    <BrowserRouter>
         <Routes>
             <Route path='/' element ={<Layout / >} >
                <Route index element = {<Home />} />
                <Route path ='Contact' element= {<Contact />} />
                <Route path ='project' element= {<Projects />} />
                <Route path ='Blogs' element = {<Blogs />} />
                <Route path ='about' element= {<About/>} />
                <Route path ='*' element = {<NoPage/>} />
             </Route>
         </Routes>
    </BrowserRouter>
  )
}
  

export default App;
