import {Link} from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext';
const Navbar = () => {

    const { logout } = useLogout();
    const { user } = useAuthContext();

    const handleClick = () => {
        logout()
    }
    return (
        <header>
            <div className="container">
            
                <Link to='/'>
                    <h1>Expense Daddy</h1>
                </Link>

                <nav>
                    {user && (<div className='loggedin'>
                        <span>{user.email}</span>
                        <button onClick={handleClick}>Log Out</button>
                    </div>)}

                    {!user && (<div className='nav-links'>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">SignUp</Link>
                    </div>)}
                </nav>
            
            
            </div>
        </header>
    )
}


export default Navbar