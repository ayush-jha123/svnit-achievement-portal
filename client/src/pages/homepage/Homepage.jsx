import Navbar from '../../components/Navbar.jsx';
import Main from './Main.jsx'
export default function Homepage(){
    return(
        <div className='wrap'>
            <div className='navbar'>
                <Navbar /> 
            </div>
            <div className="main">
                <Main />
            </div>
        </div>
    );
}
