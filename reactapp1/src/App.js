import React, { Component } from 'react';
import { useRef } from "react";
import styled from 'styled-components';
import './App.css';
import SideBar from './components/sidebar'
import NavBar from './components/navbar'
import Canvas from './components/canvas'
import BottomBar from './components/bottombar'

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {Link} from "react-router-dom";

class App extends Component {

  state={
    prevBrushColour: null,
    brushColour: null,
    brushSize: 5,
    tool: 'pencil',
  }

  handleColourSelect = (selected_colour_code) => {
    if (selected_colour_code == null){
      selected_colour_code = this.state.prevBrushColour;
      const brushColour = selected_colour_code;
      this.setState({ brushColour });
    } 
    else if (selected_colour_code !== "#fff"){
      const prevBrushColour = selected_colour_code;
      this.setState({prevBrushColour});
      const brushColour = selected_colour_code;
      this.setState({ brushColour });
    } 
    else{
      const brushColour = selected_colour_code;
      this.setState({ brushColour });
    }
    
  }

  handleBrushSizeSelect = (selected_brush_size) =>{
    const brushSize = selected_brush_size;
    this.setState({ brushSize });
  }

  handleToolSelect = (selected_tool) =>{
    const tool = selected_tool;
    this.setState({ tool });
  }

  render(){
    
    const height = window.innerHeight.toString() +"px"

    return (
      <div id="parent">
        {/* <Nav /> */}
        <div id="parent2" style={{height:window.innerHeight}}>
        {/* <div id="parent2"> */}
          <SideBar setColour={this.handleColourSelect} />
          <div id="parent3">
            <Canvas tool={this.state.tool} brushColour={this.state.brushColour} brushSize={this.state.brushSize}/>
            <BottomBar setTool={this.handleToolSelect} setBrushSize={this.handleBrushSizeSelect} setColour={this.handleColourSelect}/>
          </div>
          
        </div>
        {/* <GenerateButton onClick={this.exportImage} style={{ textDecoration: 'none' }} to="/result">
          Generate
          <KeyboardArrowRightIcon style={{ marginRight: -8, fontSize: 26}}/>
        </GenerateButton> */}
      </div>
    );
  }

}

const GenerateButton = styled(Link)`

    position: absolute;
    bottom:10px;
    right:0;
    background-color: #252A36;
    color: #FFF9E9;
    margin: 3px;
    border-radius: 10px;
    padding: 5px 10px;
    font-size: 18px;
    transition: all 0.4s ease-in-out;
    cursor: pointer;

    &:hover {
        transition: all 0.3s ease-in-out;
        background-color: #FFF9E9;
        color: #252A36;
    }
`

const Nav = styled(NavBar)`
  /* margin-top: -50px; */
`

export default App;