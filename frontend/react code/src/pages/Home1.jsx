import '../css/Home1.css'

const Home1 = () => {
  return (
    <div>
    
    <header>
    <div className="rectangle">
        <div className="navbar">
        <nav>
            <img src="../../images/logo bgremove.png" alt="logo" className="logo"/>
            <h1 style={{marginLeft : "-17%"}}>VANA EKAM</h1>
            <img src=""/>
            <ul  className="nav__links">
                <li> <a href="#">Services</a> </li>
                <li> <a href="#">About</a> </li>
                <li> <a href="#">FAQ</a> </li>
                <a href="#" className="button">Contact Us</a>
            </ul>
        </nav>
    </div>
    </div>
</header>

<div className="Quote">
    <h1 style={{fontWeight: "bold", fontSize: "50px"}}>Voice of the  tribal <br/> community</h1>
</div>


<div className="rect1"> <img src="../images/tribe3.jpg" height="200" width="350"/> </div>

<div className="rect2"> <img className="img2" src="../images/tribe 5.jpg" height="200" width="255"/> </div>

<div className="rect3"> <img src="../images/tribe1.jpg" height="200" width="405"/> </div>

<div className="circle"> <img className="imgcir" src="../images/tribe 4.jpg" height="200" width="200"/> </div>

<div className="rect4"> <img className="img4" src="../images/tribe3.jpg" height="180" width="258"/> </div>

<div className="rect5"></div>

<div className="rect6"></div>

<div className="rect7"></div>

<div className="textbox">
    <p>The Environment is not seperate from us.<br/>
        We are inside it, and it is inside us.<br/>
        We make it,and it makes us. </p>
    <p>We are the people of the FOREST.</p>
</div>


<a href="#" className="button1">Contact Us</a> 


    
    </div>
   
  )
}
export default Home1