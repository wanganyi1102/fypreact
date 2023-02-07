import React, { Component, useRef } from 'react';
import styled from "styled-components";
import './bottombar.css';
import Pencil from '../images/pencil.png'
import Eraser from '../images/eraser.png'
import Brush from '../images/brush.png'
import CircleIcon from '@mui/icons-material/Circle';
import Dropdown from 'react-bootstrap/Dropdown';
import { fontSize } from '@mui/system';

class BottomBar extends Component {
    state = { active: true,
              clicked: 'pencil',
              tools: [
                {id:'pencil', src_image:Pencil},
                {id:'eraser', src_image:Eraser },
                {id:'brush', src_image:Brush },
              ],
              clicked_size: 5,
              brush_sizes:[
                {size:30},{size:15},{size:8},{size:5}
              ]
    }


    render() { 
        return (
            <BottomBarWrap>
                {/* <div className='toggle' onClick={() => this.setActive}></div> */}
                <Toggle onClick={() => this.setActive()}></Toggle>

                <table id='itemstable'>
                    <tr id='itemsrow'>
                        {this.state.tools.map(tool => 
                            <td id='itemsdiv' align="center" width="25%">
                                <Tool className='tool' id={tool.id} src={tool.src_image} 
                                    opacity={this.getOpacity(tool.id)}
                                    onClick={() => this.onToolSelect(tool.id)}
                                    // style={this.setTogglePosition()}
                                />
                            </td>)}

                        <td align="center" width="25%">
                            <Dropdown>
                                <Dropdown.Toggle variant="secondary" id="brushSizeButton">
                                    <CircleIcon style={{ fill: '#fff', fontSize: this.state.clicked_size*2 }}/>
                                </Dropdown.Toggle>
                                <Dropdown.Menu id="brushSizeMenu">
                                    {this.state.brush_sizes.map(brush_size => 
                                    <DropdownItem onClick={() => this.onSizeSelect(brush_size.size)}><CircleIcon style={{ fill: '#fff', fontSize: brush_size.size*2}}/></DropdownItem> )}
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                    </tr> 
                </table>

            </BottomBarWrap>
        );
    }

    setActive = () => {
        const active = !this.state.active;
        this.setState({ active: active });
        console.log('active:' + this.state.active)
    }

    getOpacity = (toolid) => {
        // console.log('thisid: '+ toolid);
        const opacity = this.state.clicked === toolid ? '100%' : '50%'
        return opacity
    }

    onToolSelect = (toolid) => {
        const clicked = toolid;
        this.setState({ clicked });
        // change tool
        if (toolid == 'pencil'){this.props.setColour(null);this.props.setTool('pencil');}
        if (toolid == 'eraser'){this.props.setColour("#fff");this.props.setTool('pencil');}
        if (toolid == 'brush'){
            this.props.setColour(null);
            this.props.setTool('flood');
            // call fill area
        }
    }

    onSizeSelect = (brush_size) => {
        const clicked_size = brush_size;
        this.setState({clicked_size});
        // change width of line
        this.props.setBrushSize(brush_size);
    }

    setTogglePosition = () => {
        const ytransform = this.state.active === true ? "--i:0" : "--i:-60"
        return ytransform
    }
}

const BottomBarWrap = styled.div`
    background-color: #FFF9E9;
    width: 40%;
    height: 13%;
    align-items: center;
    position: absolute;
    border-radius: 60px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    bottom: 3px;
    /* overflow: hidden; */
`

const Toggle = styled.button`
    height: 15px;
    width: 90px;
    position: absolute;
    background-color: #252A36;
    opacity: 80%;
    border: 3px solid white;
    border-radius: 8px;
    z-index: 10;
    top: 0px;
`

const Tool = styled.img`
    height: 90px;
    width: auto;
    position: absolute;
    bottom: 0;
    transform: translateX(-50%);
    opacity: ${props => props.opacity};
`

const DropdownItem = styled.div`
    height: auto;
    text-align: center;
    &:hover {
        background-color: #7d7d7d;
    }
`

export default BottomBar;