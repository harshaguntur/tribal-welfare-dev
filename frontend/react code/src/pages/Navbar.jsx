import "../css/Navbar.css";
import {Link,NavLink} from 'react-router-dom';


const Navbar = () => {
  return (
   <div className="navbar-outer-div">
    
    <nav>
   <div className="navbar-left">
   <img src="../../public/images/logo bgremove.png" id="navbar-logo" alt="" />
   </div>


   <div className="navbar-right">

    <a href="">About</a>
    <a href="">FAQ</a>
    <NavLink to="/shop">shop</NavLink>
    <a href="">Contact Us</a>


   </div>




    </nav>

   </div>
  )
}
export default Navbar ;   