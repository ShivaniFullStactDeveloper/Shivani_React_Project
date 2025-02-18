import './Header.css';
import Cart from '../amazon/Cart';

const Header = () => {
    return (
        <div>
        <div className="header">
            <Cart />
        </div>
        <h1>CPU Component</h1>
        </div>
    )
}
export default Header;