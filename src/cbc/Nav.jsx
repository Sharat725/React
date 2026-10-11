import React, { Component } from "react";
import Logo from "./Logo";
import Cart from "./Cart";
import Home from "./Home";
import Box1 from "./Box1";
import Box2 from "./Box2";
import Box3 from "./Box3";



export default class Nav extends Component{
    render(){
        return(
            <div> 
                <nav id="nav">
                    {/* <Logo></Logo>
                    <Cart></Cart>
                    <Home></Home> */}

                    <Box1></Box1>
                    <Box2></Box2>
                    <Box3></Box3>
                
                </nav>
            </div>
        )
    }
}