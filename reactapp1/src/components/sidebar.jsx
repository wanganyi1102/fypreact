import React, { Component } from 'react';
import '../App.css';
import styled from 'styled-components';
import { SidebarData } from './sidebar_data'
import Colours from './colours'
import References from './references'

import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SideBackGround from '../images/sidebar.png'


class SideBar extends Component {
    state = { 
        clicked: 0,
        map_content: [
            {id: 0, value: < Colours setColour={this.props.setColour} get_recent_colours={this.props.get_recent_colours}/> },
            {id: 1, value: < References />},
        ]
    } 

    toggle = index => {
        const clicked = this.state.clicked;
        const new_clicked = clicked === index ? -1 : index
        this.setState({ clicked: new_clicked });
    };

    render() { 
        return (
            // <div className='Sidebar' style={{ backgroundImage: `url(${SideBackGround})` }}>
            <div className='Sidebar' >

                <ul className='SidebarList'>
                    {SidebarData.map((val, key) => {
                        return(
                        <li key={key} 
                            className='row' 
                            id = {this.state.clicked == val.index ? "active" : "inactive"}
                        >
                            <div className='TitleWrap'>
                                <div id='ExpandIcon' onClick={() => this.toggle(val.index)} >
                                    {/* {window.location.pathname == val.link ? <ExpandMoreIcon /> : <ExpandLessIcon />} */}
                                    {this.state.clicked === key ? <ExpandMoreIcon /> : <ExpandLessIcon />}
                                </div>
                                <div id='icon'>{val.icon}</div>
                                <div id='title'>{val.title}</div>
                            </div>
                            
                            {this.state.clicked === val.index ? (
                                <div className='Content'>             
                                    {this.state.map_content.filter(c => c.id == val.index)[0].value}
                                </div>
                            ): null}
                            
                        </li>)})
                    }
                </ul>

            </div>
        )
    }
}
 
export default SideBar;
