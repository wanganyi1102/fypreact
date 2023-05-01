import React, { Component } from 'react';
import { useRef } from "react";
import styled from 'styled-components';
import './App.css';
import SideBar from './components/sidebar'
import NavBar from './components/navbar'
import Canvas from './components/canvas'
import BottomBar from './components/bottombar'

import {Link} from "react-router-dom";

class App extends Component {

  state={
    prevBrushColour: null,
    brushColour: null,
    brushSize: 5,
    tool: 'pencil',
    recent_colours: [],
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

      // update recent colours
      this.setState({recent_colours: [...this.state.recent_colours, selected_colour_code].filter((value, index, array) => array.indexOf(value) === index)});
    } 
    else{
      const brushColour = selected_colour_code;
      this.setState({recent_colours: [...this.state.recent_colours, selected_colour_code].filter((value, index, array) => array.indexOf(value) === index)});
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
      <div id="parent" style={{height:window.innerHeight}}>
        <SideBar setColour={this.handleColourSelect} get_recent_colours={() => this.state.recent_colours}/>
        
        <div id="parent2">
          <Canvas tool={this.state.tool} brushColour={this.state.brushColour} brushSize={this.state.brushSize}/>
          <BottomBar setTool={this.handleToolSelect} setBrushSize={this.handleBrushSizeSelect} setColour={this.handleColourSelect}/>
        </div>
      </div>
    );
  }

}


export default App;