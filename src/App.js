import React from 'react';

import './App.css';
import myWonderfulImage from "./imageInSrc.jpg"
import "./style.css"

function App() {
  return (
    <div className="App">
      
       <div style={{border:"solid 1 black", maxWidth:'100vw'}} >  
 
            <h1 className={'title red'}> Your name here  </h1>  

          <br/>  

            <img src={myWonderfulImage} /> <br/> 

          <img src='./imageInPublic.jpg' />  

        </div>  

        {/* <video style={{width=320 , height=240}}  controls>  

        <source src="myVideo.mp4" type="video/mp4">

         </video>  */}
    </div>
  );
}

export default App;
