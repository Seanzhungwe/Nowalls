import GetPic from"../assets/images/geintouch.png"
import '../App.css'

function Get(){
return(
    <>
    <div id="Get-in-touch">
    <div class="div">
    <div class="pic">
        <img src={GetPic} alt=""/>
    </div>
    <div class="text">
        <h1>Get In Touch With Us</h1>
        <p>Have an enquiry or some feedback for us? <br/>Fill out the form below to contact our team</p>
        <input type="text" placeholder="your name"/>
        <input type="text" placeholder="your phone number"/>
        <input type="email" placeholder="your email"/>
        <input class="massage" type="text" placeholder="your massage"/>
        <button>Submit</button>

    </div>
</div>

   </div>
    </>
);
}
export default Get;