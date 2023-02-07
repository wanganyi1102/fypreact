import React, { Component } from 'react';
import { ColourData } from './sidebar_data';
import styled from "styled-components";
import CloseIcon from '@mui/icons-material/Close';

class Colours extends Component {
    state = { clicked: null,
              show_search_result: false,
              search_result: null,
              showmore: false
            }

    render() { 
        return (

            <ColourWrap>
                <input type="text" value={this.state.show_search_result ? null : ""} 
                    onChange={this.handleInput} placeholder="Search by object"
                    style={{marginBottom: 10}}
                />
                <CloseIcon onClick={() => this.handleClearSearch()}/>
   
                {this.getTwoColumns(ColourData)}
            
                <ShowMoreText onClick={() => this.setShowMore()}>
                    {this.state.showmore ? "Show less" : "More..."}
                </ShowMoreText>

            </ColourWrap>
        );
    }

    handleInput = (e) =>{
        var input = e.target.value.toLowerCase();
        var result = []
        for(let i=0; i<ColourData.length; i++){
            if(ColourData[i].object.includes(input)){
                // console.log('result: ' + ColourData[i].object);
                result = result.concat(ColourData[i])
            }
        }
        this.setState({ show_search_result: true });
        this.setState({ search_result: result });
    }

    handleClearSearch = () =>{
        this.setState({ show_search_result: false });
        this.setState({ search_result: null });
    }

    getTwoColumns = (cData) => {
        if(this.state.show_search_result){
            return(
                <TwoColumns>
                    <div>
                        {this.state.search_result.slice(0,Math.ceil(this.state.search_result.length/2)).map((val, key) => {
                            return(
                                <ul className='PaletteList'>
                                    <ColourDiv onClick={() => this.onColourSelect(val.colour_code)}>
                                        <ColourCell colour_name={val.colour_code} 
                                                    border_colour={this.getBorderColour(val.colour_code)}>           
                                        </ColourCell>
                                        <ColourText >{val.object}</ColourText>
                                        
                                    </ColourDiv>
                                </ul>
                            )
                        })}
                    </div>
            
                <div>
                    {this.state.search_result.slice(Math.ceil(this.state.search_result.length/2)+1).map((val, key) => {
                        return(
                            <ul className='PaletteList'>
                                <ColourDiv onClick={() => this.onColourSelect(val.colour_code)}>
                                    <ColourCell colour_name={val.colour_code} 
                                                border_colour={this.getBorderColour(val.colour_code)}>           
                                    </ColourCell>
                                    <ColourText >{val.object}</ColourText>
                                    
                                </ColourDiv>
                            </ul>
                        )
                    })}
                </div>
                </TwoColumns>
            )
        }
        // else show normal results
        return(
            <TwoColumns>
                <div>
                    {this.state.showmore ? 
                        cData.slice(0,Math.floor(cData.length/2)).map((val, key) => {
                            return(
                                    <ul className='PaletteList'>
                                        <ColourDiv onClick={() => this.onColourSelect(val.colour_code)}>
                                            <ColourCell colour_name={val.colour_code} 
                                                        border_colour={this.getBorderColour(val.colour_code)}>           
                                            </ColourCell>
                                            <ColourText >{val.object}</ColourText>
                                            
                                        </ColourDiv>
                                    </ul>
                            )
                        })
                        
                        : 

                        cData.slice(0,4).map((val, key) => {
                            return(
                                <ul className='PaletteList'>
                                    <ColourDiv onClick={() => this.onColourSelect(val.colour_code)}>
                                        <ColourCell colour_name={val.colour_code} 
                                                    border_colour={this.getBorderColour(val.colour_code)}>           
                                        </ColourCell>
                                        <ColourText >{val.object}</ColourText>
                                        
                                    </ColourDiv>
                                </ul>
                            )
                        })
                    }
                </div>
        
            <div>
                {this.state.showmore ? 
                    cData.slice(Math.floor(cData.length/2)+1).map((val, key) => {
                        return(
                                <ul className='PaletteList'>
                                    <ColourDiv onClick={() => this.onColourSelect(val.colour_code)}>
                                        <ColourCell colour_name={val.colour_code} 
                                                    border_colour={this.getBorderColour(val.colour_code)}>           
                                        </ColourCell>
                                        <ColourText >{val.object}</ColourText>
                                        
                                    </ColourDiv>
                                </ul>
                        )
                    })
                    
                    : 

                    cData.slice(5,9).map((val, key) => {
                        return(
                            <ul className='PaletteList'>
                                <ColourDiv onClick={() => this.onColourSelect(val.colour_code)}>
                                    <ColourCell colour_name={val.colour_code} 
                                                border_colour={this.getBorderColour(val.colour_code)}>           
                                    </ColourCell>
                                    <ColourText >{val.object}</ColourText>
                                    
                                </ColourDiv>
                            </ul>
                        )
                    })
                }
            </div>
            </TwoColumns>
        )
    }

    setShowMore = () => {
        const showmore = this.state.showmore;
        this.setState({ showmore: !showmore });
    }

    onColourSelect = (selected_colour_code) => {
        const clicked = selected_colour_code;
        this.setState({ clicked });
        // change colour of brush
        this.props.setColour(selected_colour_code);
    }

    getBorderColour = (this_colour_code) => {
        const border_colour = this.state.clicked === this_colour_code ? '2px solid #000000' : '2px solid #FFFFFF'
        return border_colour
    }

}

const ColourWrap = styled.div`
    overflow-y: auto;
    max-height: 850px;

    /* &::-webkit-scrollbar {
        display: none;
    } */
`

const TwoColumns = styled.div`
    display: flex;
    flex-direction: row;
`

const ShowMoreText = styled.p`
    text-decoration: underline;
    font-size: 15px;
`

const ColourDiv = styled.div`
    display: flex;
    flex-direction: row;
`

const ColourCell = styled.button`
    background-color: ${props => props.colour_name};
    border-radius: 50%;
    border: ${props => props.border_colour};
    width: 20px;
    height: 20px;
`

const ColourText = styled.h6`
    font-size: 0.9em;
    text-align: center;
    color: black;
    margin-left: 5px;
    font-weight: 300;
`
 
export default Colours;