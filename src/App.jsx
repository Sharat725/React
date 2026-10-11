// import React, { Component } from "react";
// import Nav from "./cbc/Nav";
// import "./app.css"


// export default class App extends Component{
//   render(){
//     return(
//       <div>
//         <nav id="nav">
//             <Nav></Nav>
//         </nav>
//       </div>
//     )
//   }
// }


/****************** FBC ************************** */

// import React from 'react'
// import Nav from './fbc/Nav'
// import "./app.css"

// const App = () => {
//   return (
//     <div>
//       <Nav></Nav>
//     </div>
//   )
// }

// export default App


//************************changing values************************* */
// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(){
//     super()

//     this.state={
//       subject:"JAVA SCRIPT"
//     }
//   }

//   handleClick=()=>{
//     this.setState({subject:"REACT JS"})
//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.subject}</h1>
//         <button onClick={this.handleClick}>CLICK</button>
        
//       </div>
//     )
//   }
// }

/********************increament and decreament*********** */
// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(){
//     super()

//     this.state={
//       count:0
//     }
//   }

//   increament=()=>{
//     this.setState({count:this.state.count+1})

//     if(this.state.count>=5 && this.state.count<=10){
//     document.body.style.backgroundColor='red'
//     }

//     else if(this.state.count>=11 && this.state.count<=20){
//     document.body.style.backgroundColor='yellow'
//   }

//   else if(this.state.count>=21 && this.state.count<=30){
//     document.body.style.backgroundColor='green'
//   }
//   }

//   decreament=()=>{
//     this.setState({count:this.state.count-1})

//     if(this.state.count>=5 && this.state.count<=10){
//     document.body.style.backgroundColor='red'
//     }

//     else if(this.state.count>=11 && this.state.count<=20){
//     document.body.style.backgroundColor='yellow'
//   }

//   else if(this.state.count>=21 && this.state.count<=30){
//     document.body.style.backgroundColor='green'
//   }
//   }

  

//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.increament}>Increament</button>
//         <button onClick={this.decreament}>Decreament</button>
        
//       </div>
//     )
//   }
// }


/***************************Bulb***************************** */

// import React, { Component } from 'react'
// import ON from "./photoes/on.jpg"
// import OFF from "./photoes/off.jpg"



// export default class App extends Component {
//   constructor(){
//     super()

//     this.state={
//       bulb:OFF
//     }


//   }
  
//   handleBulb=()=>{
//     this.setState({bulb:ON})
    
//   }

//   handleBulbOff=()=>{
//     this.setState({bulb:OFF})
//   }
//   render() {
//     return (
//       <div>
//         <img height={200} width={200} src={this.state.bulb} alt="" />
//         <button onClick={this.handleBulb}>ON</button>
//         <button onClick={this.handleBulbOff}>OFF</button>
//       </div>
//     )
//   }
// }

/**********************Video play and pause******************* */
import React, { Component } from 'react'
import PLAY from "./photoes/video.mp4"

export default class App extends Component {
  constructor(){
    super()

    this.state={
      video:PLAY
    }

  }

  handleVideo=()=>{
    this.setState({video:PLAY})
  }

  handleVideopause=()=>{
    this.setState({video:PAUSE})
  }
  render() {
    return (
      <div>
        <iframe src={PLAY} frameborder="0"></iframe>
        <button  on >play/pause</button>
      </div>
    )
  }
}
