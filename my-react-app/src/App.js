import './App.css';
import ReactDOM  from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './component/navbar';
import Hero from './component/hero';
import Card from './component/card';
import Data from './component/data'



function App () {

  const cards = Data.map(item  => {
    return (
    <Card 
    key = {item.id}
    img= {item.coverImg}
    rating={item.stats.rating}
    reviewCount={item.stats.reviewCount}
    location={item.location}
     title={item.title}
    price={item.price}
 />
 )

   }) 

  return (
    <>
      <div className='container'>
        <Navbar/>
        <Hero />
       <div className='cardscontainer'> 
          {cards}
       </div>  

      </div>
    </>
  )
}
  

export default App;
