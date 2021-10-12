import './App.sass';
import Fade from 'react-reveal/Fade';

function App() {
  return (
    <div  className="wrapper center">
      <Fade fadein>
<div  className=" main fullscreen">
    <div  className="main_flex">
        <div>
          
          <img  className="logo" src="./img/Logo.png" alt=""></img>
          
        <p  className="logo_p">Ashley & Co</p>
        <img src="./img/Rectangle.jpg" alt=""></img>
        </div>
        <Fade bottom> 
        <div  className="description">
            <p  className="description_p _anim_items">Let Power House Tui & Kahili uplift every space and surface that surrounds you, with each mist-filled pump.</p>
        </div>
        </Fade>
    </div>
    <p  className="main_p _anim_items">Take your home scent to another realm</p>


</div>
</Fade>
<Fade fadein>
<div  className=" candles fullscreen">
    <div  className="main_flex">
    <Fade bottom> 
        <div  className="description candle_description">
            <p  className="candle_p">HAND POURED CANDLES</p>
            <p  className="candle_p">The flicker of the wick and the wafting of scent…Waxed Perfume is the simplest daily self-indulgence.</p>
        </div>
        </Fade>
            <img  className="candle_img" src="./img/Candles.jpg" alt=""></img>
    </div>
    <Fade bottom> 
    <p  className="signature">Share the light, everyday</p>
    </Fade>


</div>
</Fade>
<Fade fadein>
<div  className="products_pics fullscreen">
    <div  className="imgimg_div">
        <img  className="imgimg" src="./img/spray.jpg" alt=""></img>
        <Fade bottom> 
        <p  className="imgimg_p">Dialed to 70% alcohol</p>
        </Fade>
    </div>
    <div  className="imgimg_div">
        <img  className="imgimg" src="./img/milk.jpg" alt=""></img>
        <Fade bottom> 
        <p  className="imgimg_p">REFILL WITH TOPUP</p>
        </Fade>
    </div>
</div>
</Fade>
<Fade fadein>
<div  className="about_us fullscreen">
    <img  className="about_us_img" src="./img/AboutUs.jpg" alt=""></img>
    <Fade bottom> 
    <div  className="about_us_info">
        <p  className="about_us_1">About us</p>
        <p  className="about_us_2">A modern day scent company</p>
        <p  className="about_us_3">Be it fresh and plush, or musky or verdant, scent is at the centre of everything we do.</p>
        <p  className="about_us_4">From Body, Hair, Home and Essential Cleaning, our products are crafted to be both beautiful and uplifting, practical and effective.</p>
        <p></p>
    </div>
    </Fade>
</div>
</Fade>
<Fade fadein>
<div  className=" diffuser fullscreen">
    <div  className="main_flex">
    <Fade bottom> 
        <div  className="description candle_description">
            <p  className="candle_p">MODERN REED DIFFUSER</p>
            <p  className="candle_p">Home Perfume does the hard work for you, offering a subtle yet consistent scent in your home, eliminating the need to have to scent ‘by hand’.</p>
        </div>
        </Fade>
            <img  className="candle_img" src="./img/Diffuser.jpg" alt=""></img>
    </div>
    <Fade bottom> 
    <p  className="signature">Home Perfume</p>
    </Fade>
</div>
</Fade>
<Fade fadein>
<div  className=" room_mist fullscreen">
    <img  className="room_mist_img" src="./img/RoomMist.jpg" alt=""></img>
    <Fade bottom> 
    <div  className="room_mist_info">
        <p  className="room_mist_p1">ROOM MIST</p>
        <p  className="room_mist_p2">Hip-hop, house swap</p>
        <p  className="room_mist_p3">Freshen tired surrounds with a boost of fresh scent with Power House Nine to Five. Blond Tobacco, cinders of burnt Birch laced with Geranium, Violet Leaves and the humble Tonka Bean.</p>
    </div>
    </Fade>
    

</div>
</Fade>
<Fade fadein>
<div  className=" gel fullscreen">
    <div  className="main_flex">
    <Fade bottom> 
        <div  className="description candle_description">
            <p  className="candle_p">Hand Wash</p>
            <p  className="candle_p"> Botanical Hand Wash for use anytime/everyday. Bolstered with Aloe, Horopito and Grapefruit Seed!</p>
        </div>
        </Fade>
            <img  className="candle_img" src="./img/gel.jpg" alt=""></img>
    </div>
    <Fade bottom> 
    <p  className="signature">Your habitual helper</p>
    </Fade>


</div>
</Fade>
<Fade fadein>
<div  className=" industry fullscreen">
    <div  className="main_flex">
    <Fade bottom> 
        <div  className="description candle_description">
            <p  className="candle_p">Industry</p>
            <p  className="candle_p">For the most particular of places, stamp out single-use with Hold Me by Ashley & Co®</p>
        </div>
        </Fade>
            <img  className="candle_img" src="./img/Industry.jpg" alt=""></img>
    </div>
    <Fade bottom> 
    <p  className="signature">Hold Me</p>
    </Fade>


</div>
</Fade>
    </div>)
    
}

export default App;
