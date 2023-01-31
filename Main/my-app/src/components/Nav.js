import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;











// import React, { useState} from "react";

// const Nav = () => {
//     const [selected, setSelected] = useState("About Me");
//     const selections = ["About Me", "Portfolio", "Contact", "Resume"];

//     return (
//         <nav>
//             {selections.map(section => ( 
//               <a
//               key={section}
//               href= "#"
//               className={selected === section ? "selected" : ""}
//               onClick={() => setSelected(section)}
//               >
//                 {section}
//               </a>   
//             ))}
//         </nav>
//     );
// };

// function Nav() {
//     // const [selected, setSelected] = useState("About Me");
//     // const selections = ["About Me", "Portfolio", "Contact", "Resume"];

//     return (
//         <nav>
//             {selections.map(section => ( 
//               <a
//               key={section}
//               href= "#"
//               className={selected === section ? "selected" : ""}
//               onClick={() => setSelected(section)}
//               >
//                 {section}
//               </a>   
//             ))}
//         </nav>
//     );
// };
