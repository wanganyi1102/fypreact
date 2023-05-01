import React, { Component } from 'react';
import { ColourData, CategoryData } from './sidebar_data';
import styled from "styled-components";
import CloseIcon from '@mui/icons-material/Close';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

class Colours extends Component {
    state = { clicked: null,
              show_search_result: false,
              search_result: null,
              clicked_category: null,
              showmore: false
            }

    toggle = index => {
        const clicked = this.state.clicked_category;
        const new_clicked = clicked === index ? -1 : index
        this.setState({ clicked_category: new_clicked });
    };

    render() { 
        return (

            <ColourWrap>
                <div>{this.state.search_result ? null : this.getRecentColours(ColourData)}</div>

                <input type="text" value={this.state.show_search_result ? null : ""} 
                    onChange={this.handleInput} placeholder=" Search by object"
                    style={{marginBottom: 10, marginLeft:20}}
                />
                <CloseIcon style={{marginLeft:10, marginBottom:5}} onClick={() => this.handleClearSearch()}/>
   
                <ul class="list-unstyled">
                    {CategoryData.map((val, key) => {
                        return(
                            <li>
                                <CategoryTitleWrap>
                                    <div id='ExpandIcon' onClick={() => this.toggle(val.index)} >
                                        {/* {window.location.pathname == val.link ? <ExpandMoreIcon /> : <ExpandLessIcon />} */}
                                        {this.state.clicked_category === key ? <ExpandMoreIcon style={{opacity:0.5, marginLeft:20}}/> : <ExpandLessIcon style={{opacity:0.5, marginLeft:20}}/>}
                                    </div>
                                    <div id='title'>{val.category_name}</div>
                                </CategoryTitleWrap>

                                {this.state.clicked_category === val.index ? (
                                    <CategoryContent>             
                                        {this.getCategoryContent(this.state.clicked_category, ColourData, CategoryData)}
                                    </CategoryContent>
                                ): null}

                            </li>
                        )})
                    }
                </ul>

                {/* {this.getTwoColumns(ColourData)}
            
                <ShowMoreText onClick={() => this.setShowMore()}>
                    {this.state.showmore ? "Show less" : "More..."}
                </ShowMoreText> */}

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

    getRecentColours = (cData) =>{
        const recentcData = cData.filter(c => this.props.get_recent_colours().includes(c.colour_code) )
        if (recentcData.length > 0){
            return(
                <div>Recent colours: 
                {this.getTwoColumns(recentcData)}
                <hr />
                </div>
    
            )
        }
        
    }

    getCategoryContent = (clicked_cat, cData, categoryData) =>{
        const colour_ind = categoryData.filter(c => c.index == clicked_cat)[0].colour_indices;
        const this_category_cData = cData.filter(c => colour_ind.includes(c.index) );
        // console.log(this_category_cData);
        return(
            <div>
                {this.getTwoColumns(this_category_cData)}
                <ShowMoreText onClick={() => this.setShowMore()}>
                    {this.state.showmore ? "Show less" : "More..."}
                </ShowMoreText>
            </div>

        )
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
            <div>
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
            </div>
            
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
    border-radius: 0px 30px 0px 0px;

    /* &::-webkit-scrollbar {
        display: none;
    } */
`

const TwoColumns = styled.div`
    display: flex;
    flex-direction: row;
`

// for category of colours
const CategoryTitleWrap = styled.div`
    height: 30px;
    width: 265px;
    list-style-type: none;
    margin:0%;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    position: center;
`
const CategoryContent = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* border-bottom: 1px solid #00ffb9;
    border-top: 1px solid #00ffb9; */
    position: relative;
`

const ShowMoreText = styled.p`
    text-decoration: underline;
    font-size: 15px;
    margin-left: 35px;
`

// for colour palette cells
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