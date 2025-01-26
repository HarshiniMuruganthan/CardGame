import './Nav.css'; // Import the CSS file
import { Link } from 'react-router-dom';
const Navbar= () => {
  
  return (
   
        <header>
            <nav>
                <ol>
                   
                    <li><Link to='/login' className="link">Login</Link></li>
                    <li><Link to='/' className="link">Home</Link></li>
                   
                </ol>
            </nav>
        </header>
                    
  
             
  );
}

 
 export default Navbar;
