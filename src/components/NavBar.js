import "./NavBar.css";

const NavBar = () => {
    return(
<nav>
    <div className="menu">
    <div className="brand">
        <h1>Lupetto</h1>
    </div>
    <div className="ul">
<ul>
    <li>
        <a href="#">Home</a>
    </li>
    <li>
        <a href="#">Productos</a>
    </li>
    <li>
        <a href="#">Contacto</a>
    </li>
</ul>
</div>
</div>

</nav>
    )
} 
export default NavBar;