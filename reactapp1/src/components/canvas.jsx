import '../App.css';
import styled from "styled-components";
import React, { Component, useState, useRef} from 'react';
import { useOnDraw } from './hooks';
import { ColourData } from './sidebar_data';
import CanvasBackGround from '../images/canvas.jpg'
import {Link} from "react-router-dom";

const Canvas = ({tool, brushColour, brushSize}) => {

    const {
        setCanvasRef,
        onMouseDown
    } = useOnDraw(onDraw)


    // const setCanvasRef = useOnDraw(onDraw)
    const canRef = useRef(null);
    
    function onDraw(ctx, point, prevPoint){

        // ctx.fillStyle = '#000000';
        // ctx.beginPath();
        // ctx.arc(point.x, point.y, 1, 0, 2*Math.PI); //draw cirlce?
        // ctx.fill();
        if(tool == 'pencil'){
            canRef.current = ctx;
            drawLine(prevPoint, point, ctx, brushColour, brushSize);
            canRef.current = ctx;
        }
        // if(tool == 'flood'){floodArea(ctx, point, brushColour, 128);}
        if(tool == 'flood'){
            canRef.current = ctx;
            floodArea(point, ctx, brushColour);
            canRef.current = ctx;
        }
    }

    function drawLine( //so that line instead of dots
        start, end, ctx, colour, width
    ){
        // console.log('line brushColour: '+ colour);
        start = start ?? end
        ctx.beginPath();
        ctx.lineWidth = Number(width);
        ctx.strokeStyle = colour;
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.stroke();

        // console.log('circle brushColour: '+ colour);
        ctx.fillStyle = colour;
        ctx.beginPath();
        ctx.arc(start.x, start.y, Number(brushSize/calcCircleRadius(brushSize)), 0, 2*Math.PI); //draw cirlce?
        ctx.fill();
    }

    // function getPixel(imageData, x, y) {
    //     if (x < 0 || y < 0 || x >= imageData.width || y >= imageData.height) {
    //       return [-1, -1, -1, -1];  // impossible color
    //     } else {
    //       const offset = (y * imageData.width + x) * 4;
    //       return imageData.data.slice(offset, offset + 4);
    //     }
    // }
    
    // function setPixel(imageData, x, y, color) {
    //     const offset = (y * imageData.width + x) * 4;
    //     imageData.data[offset + 0] = color[0];
    //     imageData.data[offset + 1] = color[1];
    //     imageData.data[offset + 2] = color[2];
    //     imageData.data[offset + 3] = color[0];
    // }
    
    // function colorsMatch(a, b, rangeSq) {
    //     const dr = a[0] - b[0];
    //     const dg = a[1] - b[1];
    //     const db = a[2] - b[2];
    //     const da = a[3] - b[3];
    //     return dr * dr + dg * dg + db * db + da * da < rangeSq;
    // }
    
    // function floodArea(ctx, startpoint, fillColor, range = 1) {
    //     const x = parseInt(startpoint.x);
    //     const y = parseInt(startpoint.y);
    //     const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);

    //     const fill_colour_rgba = [parseInt(fillColor.slice(1,3), 16),
    //                          parseInt(fillColor.slice(3,5), 16),
    //                          parseInt(fillColor.slice(5,7), 16),
    //                          255
    //                         ]
        
    //     // flags for if we visited a pixel already
    //     const visited = new Uint8Array(imageData.width, imageData.height);
        
    //     // get the color we're filling
    //     const targetColor = getPixel(imageData, x, y);
        
    //     // check we are actually filling a different color
    //     if (!colorsMatch(targetColor, fill_colour_rgba)) {
        
    //         const rangeSq = range * range;
    //         const pixelsToCheck = [x, y];
    //         while (pixelsToCheck.length > 0) {
    //             const y = pixelsToCheck.pop();
    //             const x = pixelsToCheck.pop();
                
    //             const currentColor = getPixel(imageData, x, y);
    //             if (!visited[y * imageData.width + x] &&
    //                     colorsMatch(currentColor, targetColor, rangeSq)) {
    //                 setPixel(imageData, x, y, fillColor);
    //                 visited[y * imageData.width + x] = 1;  // mark we were here already
    //                 pixelsToCheck.push(x + 1, y);
    //                 pixelsToCheck.push(x - 1, y);
    //                 pixelsToCheck.push(x, y + 1);
    //                 pixelsToCheck.push(x, y - 1);
    //             }
    //         }
            
    //         // put the data back
    //         ctx.putImageData(imageData, 0, 0);
    //     }
    // }

    function floodArea(startpoint, ctx, colour){
        const x = parseInt(startpoint.x);
        const y = parseInt(startpoint.y);
        const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
        // const currentColor = getPixel(imageData, x, y);
        // console.log(imageData.data.length + ' = ' + ctx.canvas.width + ' x ' + ctx.canvas.height)
        // console.log('x: '+ x + ' y: '+ y);
        // console.log('current colour: '+ currentColor);
        // console.log(imageData.data)

        const fill_colour_rgba = [parseInt(colour.slice(1,3), 16),
                             parseInt(colour.slice(3,5), 16),
                             parseInt(colour.slice(5,7), 16),
                             255
                            ]
        
        // console.log('fill colour: ' + colour + ' -- ' + fill_colour_rgba);

        // fillPixel(imageData, x, y, fill_colour_rgba);

        for(let x=0; x<ctx.canvas.width; x++){
            for(let y=0; y<ctx.canvas.height; y++){
                setPixel(imageData, x, y, fill_colour_rgba);
            }
        }
        
        // // put the data back
        ctx.putImageData(imageData, 0, 0);
    }

    // TODO: work on fill pixel
    function fillPixel(imageData, x, y, fillColour) {
        const currentColor = getPixel(imageData, x, y);
        
        if (colorsMatch(currentColor, fillColour)){
            return
        }
        console.log('current colour: '+ currentColor);
        console.log('fill colour: '+ fillColour);

        // for(let i=0; i<=3; i++){
        //     setPixel(imageData, x+i, y, fillColour);
        //     setPixel(imageData, x-i, y, fillColour);
        //     setPixel(imageData, x, y+i, fillColour);
        //     setPixel(imageData, x, y-i, fillColour);
        //     setPixel(imageData, x+i, y+i, fillColour);
        //     setPixel(imageData, x-i, y+i, fillColour);
        //     setPixel(imageData, x-i, y-i, fillColour);
        //     setPixel(imageData, x+i, y-i, fillColour);
        // }

        // setPixel(imageData, x, y, fillColour);

        // fillPixel(imageData, x + 1, y, fillColour);
        // fillPixel(imageData, x - 1, y, fillColour);
        // fillPixel(imageData, x, y + 1, fillColour);
        // fillPixel(imageData, x, y - 1, fillColour);

        setPixel(imageData, x+1, y, fillColour);
        setPixel(imageData, x-1, y, fillColour);
        setPixel(imageData, x, y+1, fillColour);
        setPixel(imageData, x, y-1, fillColour);
        setPixel(imageData, x+1, y+1, fillColour);
        setPixel(imageData, x-1, y+1, fillColour);
        setPixel(imageData, x-1, y-1, fillColour);
        setPixel(imageData, x+1, y-1, fillColour);

        fillPixel(imageData, x + 3, y, fillColour);
        fillPixel(imageData, x - 3, y, fillColour);
        fillPixel(imageData, x, y + 3, fillColour);
        fillPixel(imageData, x, y - 3, fillColour);
    }

    // helper functions
    

    function getPixel(imageData, x, y) {
        if (x < 0 || y < 0 || x >= imageData.width || y >= imageData.height) {
          return [-1, -1, -1, -1];  // impossible color
        } else {
          const offset = (y * imageData.width + x) * 4;
          return imageData.data.slice(offset, offset + 4);
        }
    }
    
    function setPixel(imageData, x, y, color) {
        const offset = (y * imageData.width + x) * 4;
        imageData.data[offset + 0] = color[0];
        imageData.data[offset + 1] = color[1];
        imageData.data[offset + 2] = color[2];
        imageData.data[offset + 3] = 255;
        // imageData.data[offset + 3] = color[3];
    }
    
    function colorsMatch(a, b) {
        // return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
        return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
    }

    function calcCircleRadius(brushSize){
        // match radius of circle to brush size
        const widthradmap = [
            {brushSize:30, radscale:2.0},
            {brushSize:15, radscale:2.1},
            {brushSize:8, radscale:2.3},
            {brushSize:5, radscale:2.5},
        ]

        const this_i = widthradmap.filter(i => i.brushSize === brushSize);
        return this_i[0].radscale;
    }

    // const [canRef, setCanRef] =useState(0);
    // function setRef(ref) {
    //     setCanRef(ref);
    // }

    async function handleGenerate(){
        const ctx = canRef.current;
        try{
            const data = [ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height).data];
            const data_list = JSON.parse("[" + data + "]");
            // console.log("data_list: "+ data_list);

            // send data to backend
            const response = await fetch('http://localhost:5000/inputimage', {
                method: 'POST',
                headers: 
                {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': 'http://localhost:3000',
                    'Access-Control-Allow-Credentials': 'true'
                },
                body: JSON.stringify({
                    "data_list": data_list, 
                    "dim": [ctx.canvas.width, ctx.canvas.height]
                })
            })

            if(response.ok){
                console.log('response worked!')
            }

            // // convert data to [index, index,index] (should do in python..?)
            // var new_data = []
            // for(let i=0; i<data_list.length; i+=4){
            //     const pixel = data_list.slice(i, i+4);
            //     var newpixel = "#"
            //     for(let j=0; j<3; j++){
            //         newpixel = newpixel.concat(pixel[j].toString(16));
            //     }
            //     const newrgbvalue = ColourData.filter(c => c.colour_code == newpixel)[0].index
            //     new_data = new_data.concat([newrgbvalue, newrgbvalue, newrgbvalue]);

            //     // for checking
            //     if(i<4){
            //         const pixel = data_list.slice(i, i+4);
            //         console.log('data pixel: '+ pixel);
            //         var newpixel = "#"
            //         for(let j=0; j<3; j++){
            //             newpixel = newpixel.concat(pixel[j].toString(16));
            //         }
            //         const newrgbvalue = ColourData.filter(c => c.colour_code == newpixel)[0].index
            //         console.log('new rgb: ' + [newrgbvalue, newrgbvalue, newrgbvalue]);
            //         // console.log('new pixel: '+ newpixel);
            //         // console.log('obj: '+ object[0].object);
            //     }

            // }
            // console.log('new data: '+ new_data);
        
        }catch (TypeError){
            console.log('caught error');
        }
    }

    const w = (window.innerWidth-300) *0.95;
    const h = window.innerHeight * 0.9;
    console.log('height and width: ' +h + 'x'+ w);
    return (
        <div className='CanvasWrap' style={{ backgroundImage: `url(${CanvasBackGround})`}}>
            
            <canvas id='Canvas' ref={setCanvasRef} width={w} height={h} onMouseDown={onMouseDown} />
            <GenerateButton to="/result" onClick={() => handleGenerate()} >Generate</GenerateButton>
        </div>
        
    );
    
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
 
export default Canvas;