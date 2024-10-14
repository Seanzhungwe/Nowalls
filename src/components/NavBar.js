import NowallsLogo from"../assets/images/NoWallsLogo.png"
import '../App.css'

function NavBar(){
return(
    
    <nav>
    <div class="logo">
            <img src={NowallsLogo}alt=""/>
        </div>
        <ul>
            <li><a href="#service">Services</a></li>
            <li><a href="#mail">Subscribe</a></li>
            <li><a href="#Get-in-touch" >Contact Us</a></li>
        </ul>
    </nav>
   
);
}
export default NavBar;