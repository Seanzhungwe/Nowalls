import MailPic from"../assets/images/mail-listing.png"
import '../App.css'

function Mail(){
    return(
        <>
         <section id="mail">
<div class="main">
    <div class="text">
        <h1>
        Let’s create brands & products <br/>People will love! 
        </h1>
        <button>Subscribe To Mail listing</button>
    </div>

<div class="pic">
    <img src={MailPic} alt=""/>
</div>
</div>
   </section>
        </>
    )
}
export default Mail;