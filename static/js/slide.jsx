const CarouselData = [
    {image:'/static/images/IMG_6632.JPG',caption:'Phoebe Bridgers'},
    {image:'/static/images/IMG_6636.JPG',caption:'Phoebe Bridgers'},
    {image:'/static/images/IMG_6637.JPG',caption:'Phoebe Bridgers'},
    {image:'/static/images/IMG_7719.JPG',caption:'Phoebe Bridgers'},
    {image:'/static/images/IMG_7720.JPG',caption:'Phoebe Bridgers'},
    {image:'/static/images/IMG_7721.JPG',caption:'Phoebe Bridgers'},
    {image:'/static/images/IMG_7745.JPG',caption:'Phoebe Bridgers'},
    {image:'/static/images/IMG_7746.JPG',caption:'Phoebe Bridgers'},
    ]
 
function Carousel() {
    return (
        <div>
            {CarouselData.map((slide, index) => {
                return (
                    <div class='gallery' key={slide.image}>
                        <img src={slide.image} alt={slide.caption}/>
                        <div class='caption-text'>{slide.caption}</div>
                    </div>
                );
                })}
        </div>
    );
}

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

ReactDOM.render(<Carousel />, document.querySelector('#carousel'));


// function Leftclick() {

//     return(
//     <button className='Left' onClick={LeftClick}>
//         <image></image>
//     </button>
//     )
// }


// function RightClick() {

// }



// function Hello() {
//     return (
//         <p>Inseret PMFB here</p>
//     );
// }

// ReactDOM.render(<Hello />, document.querySelector('#carousel'));

// ReactDOM.render(
 
//     <h2>Dune DuNe DUNE DuuuNnne</h2>,
//     document.getElementById('carousel')
// );