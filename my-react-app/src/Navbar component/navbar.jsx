import React, {useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {faMoon} from '@fortawesome/free-solid-svg-icons';
import {faSun} from '@fortawesome/free-solid-svg-icons';
import "./navbar.css";
import Main from "./main";

export default function NewNavbar () {
     const [navbar, setnavbar] = useState (true);
     function HandleClick (){
      setnavbar(navbar => !navbar)
     }

     const [style, setStyle] = useState (true);
     function FlipStyle () {
      setStyle(style => !style)
     }

    return (
        <>
           <div className="nav--bar">
               <ul className={!navbar? "nav--list" :"active"}>
                  <li className="nav--items"onClick={HandleClick}>
                     Home
                  </li>
                  <li className="nav--items">
                    About
                  </li>
                  <li className="nav--items">
                    Contact
                  </li>
                  <li className="nav--items">
                    Project
                  </li>
                  <li className="nav--items">
                    Blog
                  </li> 
               </ul>
               <FontAwesomeIcon icon={!style? faSun : faMoon} className= {!style? 'darkmode' : 'lightmode'}  
                 onClick={FlipStyle}/>
               <FontAwesomeIcon icon={faBars} className= 'fa--bars' onClick={HandleClick}/>
          </div> 
          <div className={!style? "body" : "light"}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolorem optio exercitationem nam assumenda fuga suscipit nobis quasi quo tenetur error nihil atque, iure et vel voluptates ut eos aliquam similique nemo odio. Accusamus laboriosam vero ab soluta error itaque est deleniti nihil? Sapiente sit animi eaque possimus delectus culpa quod veniam omnis, iste doloribus iusto error illo tempora porro vitae blanditiis est voluptate magni laudantium sint doloremque sunt dolor. Adipisci, voluptatibus minus. Nulla vero voluptas magni pariatur ut ex nesciunt exercitationem doloribus totam ducimus vel quisquam saepe veniam voluptatibus voluptatem reiciendis iusto maiores mollitia quaerat accusantium provident rem, nostrum sit. Porro, vel iusto voluptatum officiis quasi commodi, ab ipsum ipsam odio, in itaque ratione iure? Repudiandae dolor nostrum esse porro rerum assumenda ex ad dicta harum sit asperiores minus veniam quo, corrupti, vitae tenetur a ullam necessitatibus temporibus dignissimos. Eos quia nihil enim consectetur nobis omnis fuga quo dolorum placeat? Doloremque expedita esse ut illum dolorum officiis vitae corporis non exercitationem, deserunt incidunt quod beatae laborum quibusdam recusandae, saepe eius temporibus quisquam reprehenderit, harum qui. Quaerat voluptates assumenda suscipit blanditiis, dolores repudiandae. Adipisci sapiente nobis ipsa velit iste soluta atque, laudantium sunt ratione dolor debitis eius hic ex saepe?
            </p>
          </div> 
        </>
    )
}