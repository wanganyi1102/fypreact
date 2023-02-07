import {Link} from "react-router-dom";
import React, { Component } from 'react';
import styled from 'styled-components';
import Video from './images/video.mp4';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

class FrontPage extends Component {
    state = {  } 
    render() { 
        const height = window.innerHeight.toString() +"px"
        console.log(height)
        return (
            <Container height={height}>

                <Bg>
                    <VideoBg autoPlay loop muted src={Video} type='video/mp4'></VideoBg>
                </Bg>

                <Content>
                    <Text>Create stylistic paintings from your doodles</Text>
                    <StartButton style={{ textDecoration: 'none' }} to="/canvaspage">
                        Start
                        <KeyboardArrowRightIcon style={{ fontSize: 45, marginLeft: 10, marginRight:-15}} />
                    </StartButton>
                </Content>
                
            </Container>
        );
    }
}

const Container = styled.div`
    background-color: #E2DCCD;
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${props => props.height};
    position: relative;
    /* z-index: ; */
`

const Bg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    /* z-index: -1; */
`

const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    opacity: 60%;
    z-index: -1;
`
 
const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* z-index: -1; */
`

const Text = styled.p`
    z-index: 20;
    font-size: 22px;
    font-weight: 400;
`

const StartButton = styled(Link)`

    align-items: center;
    display: flex;
    background-color: #192841;
    color: #bcc7d6;
    border: none;
    border-radius: 50px;
    padding: 20px 50px;
    font-size: 28px;
    transition: all 0.4s ease-in-out;
    cursor: pointer;
    z-index: 20;

    &:hover {
        transition: all 0.3s ease-in-out;
        background-color: #7c8594;
        color: #05152e;
    }
`

export default FrontPage;