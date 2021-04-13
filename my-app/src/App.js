import React from 'react';
import Nav from "./Components/Navbar/Nav";
import "./App.css";
import Rectangle1 from "./Images/Rectangle1.png";
import Rectangle21 from "./Images/Rectangle21.png";
import image10 from "./Images/image 10.png";
import image11 from "./Images/image 11.png";
import styled, { createGlobalStyle, keyframes, css } from 'styled-components';
import Footer from "./Components/Footer/Footer";
import Video from "./Images/video thing demo.mp4";

function clickme() {//edit this to change hyperlink location
  return (false);
}

//The "view more" button's css
//TODO: Hyperlink for button needs adding
const Button = styled.button`
  background-color: #B7DC16;
  color: #005249;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  padding: 10px 30px;
  border-radius: 5px;
  margin: 5px 0px;
  cursor: pointer;
`;

class App extends React.Component {
  render() {
    return <div className="App">
      <rectangle className='header'></rectangle>
      <div className='headerText'>events@cheshire-outdoors.info</div>
      <Nav />
      <body>
        <div className="Rectangle1">
          <img src={Rectangle1} alt={Rectangle1.png}></img>
        </div>
        <div>
          <h2 className="LetsGoOutside">LET'S GO OUTSIDE</h2>
          <p className="LetsGoOutsidePara">
            <p>At Cheshire Outdoors we can’t get enough of the fresh air! So whether you’re looking for the thrill of a woodland glide on our Segway experience,
           testing your skill with archery and laser clay shooting or being amazed as you get hands-on and try birds of prey in a falconry encounter!</p>
            <p>We’ve got lots of adventures and activities all designed for small groups, families, schools, hen or stag parties or corporate away days. Get outside
           this year and get some fresh air and adventure.</p>
            <Button onClick={clickme()}>READ MORE</Button>
          </p>
        </div>

        <div>
          <div class="image6">{/*I don't know why but if i don't use this div with the "image6" css it breaks. There's definitely a cleaner way of doing this but it'll work for now*/}
            <video loop controls id='video'>
              <source src={Video} type='video/mp4'></source>
            </video>
          </div>
          <div className="image11">
            <img src={image11} alt="image11"></img>
          </div>
        </div>

        <div>
          <div className="Rectangle21">
            <img src={Rectangle21} alt="Rectangle21"></img>
          </div>
          <div className="image10">
            <img src={image10} alt="image10"></img>
          </div>
        </div>
      </body>

      <footer>
        <Footer></Footer>
        <rectangle className="FooterBack"></rectangle>
      </footer>

    </div>

  };
}
export default App;
