import './Nav.css'; 
import { Link } from 'react-router-dom';
const Navbar= () => {
  
  return (
   
        <header>
            <nav>
                <ol>
                   
                    <li><Link to='/' className="link">Login</Link></li>
                    <li><Link to='/home' className="link">Home</Link></li>
                   
                </ol>
            </nav>
        </header>
                    
  
             
  );
}

 
 export default Navbar;
