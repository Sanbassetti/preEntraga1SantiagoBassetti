import Logo from "../Logo/Logo"
import CartWidget from "../CartWidget/CartWidget";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import Greeting from "../Greeting/Greeting";
import "./estilos.css";

const Navbar = () => {

    return (

        <div className="navbar">
            <Logo/>
            <ItemListContainer />
            <CartWidget/>
            
        </div>
    )

}

export default Navbar;