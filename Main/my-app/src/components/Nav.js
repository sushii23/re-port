import React, { useState} from "react";

const Nav = () => {
    const [selected, setSelected] = useState("About Me");
    const selections = ["About Me", "Portfolio", "Contact", "Resume"];

    return (
        <nav>
            {selections.map(section => ( 
              <a
              key={section}
              href= "#"
              className={selected === section ? "selected" : ""}
              onClick={() => setSelected(section)}
              >
                {section}
              </a>   
            ))}
        </nav>
    );
};

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

export default Nav;