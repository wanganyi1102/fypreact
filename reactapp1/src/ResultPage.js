import React, { Component , useState, useEffect} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';
import CanvasBackGround from './images/canvas.jpg'

function ResultPage(){
    const [data, setData] = useState({})
    const [clicked, setClicked] = useState("MONET")
    const [styles, setStyles] = useState([
        {id:'MONET', src:require('./images/monet.jpeg')},
        {id:'VAN GOGH', src:require('./images/vangogh.jpeg')},
        {id:'CEZANNE', src:require('./images/cezanne.jpeg')},
    ]) 

    var outputimg = -1
    try{
        outputimg = new File("./images/foo.png");
    }
    catch(ERROR){
        outputimg = -1
    }

    const [loading, setLoading] = useState(true);
    const [imageUrl, setImageUrl] = useState(null);

    // useEffect(() => {
    //     // Check if file exists in directory
    //     fetch("./images/da.png")
    //       .then(response => {
    //         if (!response.ok) {
    //             throw new Error('File not found');
    //         }
    //         return response.blob();
    //       })
    //       .then(blob => {
    //         setImageUrl(URL.createObjectURL(blob));
    //         setLoading(false);
    //       })
    //       .catch(error => {
    //         console.error(error);
    //         setLoading(false);
    //       });
    // }, [])

    // useEffect(() => {
    //     // Check if file exists in directory
    //     fetch("./images/foo.png")
    //       .then(response => {
    //         if (!response.ok) {
    //           throw new Error('File not found');
    //         }
    //         return response.blob();
    //       })
    //       .then(blob => {
    //         setImageUrl(URL.createObjectURL(blob));
    //         setLoading(false);
    //       })
    //       .catch(error => {
    //         console.error(error);
    //         setLoading(false);
    //       });
    // }, [])

    useEffect(()=>{
        fetch("http://localhost:5000/outputimage").then(
            res => res.json()
        ).then(
                data => {
                    setData(data)
                    // console.log('data: '+ data)
                }
            )
    } ,[])
    return(
        <ResultsDiv >

            <StylesCarousel>
                {styles.map(style => 
                    <Carousel.Item>
                        <PaintingImg
                            className="d-block w-100"
                            src={style.src}
                            alt={style.id}
                        />
                        <Carousel.Caption> <StyleText>{style.id}</StyleText> </Carousel.Caption>
                    </Carousel.Item>)
                }      
            </StylesCarousel>


            <div>
                {
                    (outputimg === -1) ? (
                        // <StyleText>Loading...</StyleText>
                        <OutputImg
                            className="d-block w-100"
                            src={require('./images/foo.png')}
                        />
                    ): (
                        <p>
                            <h5>Loaded!</h5>
                        </p>
                        // <OutputImg
                        //     className="d-block w-100"
                        //     // src={imageUrl}
                        //     // alt= "Image"
                        //     src={require('./images/foo.png')}
                        // />
                    )

                }
            </div>
            
        
        </ResultsDiv>
        
    )
}

const ResultsDiv= styled.div`
    width: 100%;
    height: 100vh;
    background-color: #252A36;
`

const StylesCarousel = styled(Carousel)`
    width: 100%;
    /* border: 2px solid red; */
`

const PaintingImg = styled.img`
    height: 150px;
    /* -o-object-fit: cover; */
    object-fit: cover;
    opacity: 70%;
`

const OutputImg = styled.img`
    height: 850px;
    object-fit: cover;
    /* border: 2px solid red; */
`

const StyleText = styled.p`
    font-size: 36px;
    font-weight: 400;
    color: white;
    font-family: "Times New Roman";
`
 
export default ResultPage;

// class ResultPage extends Component {
//     state = {
//         clicked: 'MONET',
//         styles: [
//         {id:'MONET', src:require('./images/monet.jpeg')},
//         {id:'VAN GOGH', src:require('./images/vangogh.jpeg')},
//         {id:'CEZANNE', src:require('./images/cezanne.jpeg')},
//         ], 
//         backend_data: null,
//     } 
//     render() { 
//         // try{fetch("http://localhost:5000/outputimage").then(
//         //     res => res.json()
//         //     ).then(
//         //         data => {
//         //             this.setState({backend_data: data})
//         //             console.log('data: '+ this.state.data)
//         //         }
//         // )}catch(error){
//         //     console.log("coaught")
//         // }

//         return (
//             <ResultsPage >

//                 <h5>this is the result page</h5>

//                 <StylesCarousel>
//                     {this.state.styles.map(style => 
//                          <Carousel.Item>
//                             <PaintingImg
//                                 className="d-block w-100"
//                                 src={style.src}
//                                 alt={style.id}
//                             />
//                             <Carousel.Caption> <StyleText>{style.id}</StyleText> </Carousel.Caption>
//                         </Carousel.Item>)
//                     }      
//                 </StylesCarousel>

                
                
//             </ResultsPage>
            

//         );
//     }
// }