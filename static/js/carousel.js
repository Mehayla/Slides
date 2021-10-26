// import React from 'react';
// import useState from 'react-hook-use-state';
// import wtf from '../../webpack-demo/src/slide.jsx';

// const CarouselData = [
//     {image:'/static/images/IMG_6632.JPG',caption:'Phoebe Bridgers in pink lighting'},
//     {image:'/static/images/IMG_6636.JPG',caption:'Phoebe Bridgers preforming in the Greek Theater Los Angeles,CA'},
//     {image:'/static/images/IMG_6637.JPG',caption:'Phoebe Bridgers in blue lighting'},
//     {image:'/static/images/IMG_7719.JPG',caption:'Phoebe Bridgers and the stars'},
//     {image:'/static/images/IMG_7720.JPG',caption:'Phoebe Bridgers singing to a crowd'},
//     {image:'/static/images/IMG_7721.JPG',caption:'Phoebe Bridgers rockin in Austin,TX'},
//     {image:'/static/images/IMG_7745.JPG',caption:'Phoebe Bridgers pink lighting no guitar'},
//     {image:'/static/images/IMG_7746.JPG',caption:'Phoebe Bridgers'},
//     ]
 

// function Carousel() {
//     const [current, setCurrent] = useState(0);
//     const length = CarouselData.length

//     if (!Array.isArray[slides] || slides.length <= 0) {
//         return null;
//     }

//     function nextSlide() {
//         setCurrent(current == length - 1 ? 0: current + 1);
//     }

//     function previousSlide() {
//         setCurrent(current == 0 ? length - 1: current - 1);
//     }

//     console.log(current);

//     return (wtf);


/* <img src={SliderData[current].image} /> */



// function Carousel(props) {
//     const [currentPic, newPic] = React.useState('what')

//     React.useEffect(() => {
//         fetch('/api/pictures')
//         .then((response) => response.json(1)
//         .then((result) => {
//             setFruits(result);
//         }))
//     })
// }

// ReactDOM.render(<Carousel />, document.querySelector('#carousel'));
