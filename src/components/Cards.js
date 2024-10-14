import Ser1 from"../assets/images/serv1.png"
import Ser2 from"../assets/images/serv2.png"
import Ser3 from"../assets/images/serv3.png"


function Cards (){
return(
    <>
    <div id="service">
    <div class="text1">
        <h1>Our Services To<br/> Deliver Amazing Products</h1>
    </div>
    <div class="container">
        <div class="card">
            <div class="card-head">
<img src={Ser1} alt=""/>
            </div>
            <div class="card-body">
                <h2>Services</h2>
                <hr/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque excepturi porro odit ullam accusamus saepe voluptatum quasi sequi distinctio quod.</p>

            </div>
            
        </div>
        <div class="card">
            <div class="card-head">
                <img src={Ser2} alt=""/>
                            </div>
                            <div class="card-body">
                                <h2>Services</h2>
                                <hr/>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque excepturi porro odit ullam accusamus saepe voluptatum quasi sequi distinctio quod.</p>
                
                            </div>
            
        </div>
        <div class="card">
            <div class="card-head">
                <img src={Ser3} alt=""/>
                            </div>
                            <div class="card-body">
                                <h2>Services</h2>
                                <hr/>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque excepturi porro odit ullam accusamus saepe voluptatum quasi sequi distinctio quod.</p>
                
                            </div>
            
        </div>
    </div>

   </div>
    </>
);
}
export default Cards;