import React from "react";
import { Link } from "react-router-dom";
// import M from  'materialize-css/dist/js/materialize.min.js';
import "./style.css";

function Header (){
  return (
     <div className="header">
        <nav className = "nav-wrapper">
          <div className="container">
            <a href="#" data-target="slide-out" class="sidenav-trigger show-on-large"><i class="material-icons">menu</i></a>
             <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="./pages/Home">Benedicta Kim</a></li>
                <li><a href="./pages/About">About</a></li>
                <li><a href="./pages/Portfolio">Portfolio</a></li>
                <li><a href="./pages/Contact">Contact</a></li>
             </ul>
             <ul id="slide-out" class="sidenav">
              <li><a href="#About">About</a></li>
              <li><a href="#Portfolio">Portfolio</a></li>
              <li><a href="#Contact">Contact</a></li>
              </ul>
          </div>
        </nav>
     </div>
  );
}

// class App extends Component {
//   componentDidMount() {
//     let sidenav = document.querySelector('#slide-out');
//     M.Sidenav.init(sidenav, {});
//   }

//   render() {
//     return (
//     <div className="header">
//         <nav>
//           <div className="container">
//             <a href="#" data-target="slide-out" class="sidenav-trigger show-on-large"><i class="material-icons">menu</i></a>
//             <ul id="slide-out" class="sidenav">
//               <li><a href="#item1">Item 1</a></li>
//               <li><a href="#item2">Item 2</a></li>
//               <li><a href="#item3">Item 3</a></li>
//             </ul>
//           </div>
//         </nav>
//     </div>
//     );
//   }
// }

export default Header;