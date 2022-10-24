import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Garage from './person';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Counter from './counter';
import Timer from './timer';


function Person (props){
  return <p>rasheedah {props.color}</p>
}
function MissedGoal () {
  return <h1>MISSED</h1>
}
function MadeGoal () {
  return <h1>GOAL</h1>
}

function Goal (props) {
  let isGoal = props.isGoal
  if (isGoal){
    return <MadeGoal/>
  }
  else {
    return <MissedGoal/>
  }
}
function Football () {
  const shoot = (a) => {
    alert (a)
  }
  return (
  
    <button onClick={() => shoot ('goal')}>Take the shot</button>
    
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

