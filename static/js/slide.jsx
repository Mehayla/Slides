import useState from 'react-hook-use-state';

const CarouselData = [
    {image:'/static/images/IMG_6632.JPG',caption:'Phoebe Bridgers in pink lighting'},
    {image:'/static/images/IMG_6636.JPG',caption:'Phoebe Bridgers preforming in the Greek Theater Los Angeles,CA'},
    {image:'/static/images/IMG_6637.JPG',caption:'Phoebe Bridgers in blue lighting'},
    {image:'/static/images/IMG_7719.JPG',caption:'Phoebe Bridgers and the stars'},
    {image:'/static/images/IMG_7720.JPG',caption:'Phoebe Bridgers singing to a crowd'},
    {image:'/static/images/IMG_7721.JPG',caption:'Phoebe Bridgers rockin in Austin,TX'},
    {image:'/static/images/IMG_7745.JPG',caption:'Phoebe Bridgers pink lighting no guitar'},
    {image:'/static/images/IMG_7746.JPG',caption:'Phoebe Bridgers'},
    ]
 
function Carousel() {
    const [current, setCurrent] = useState(0);
    const length = CarouselData.length

    if (!Array.isArray[slides] || slides.length <= 0) {
        return null;
    }

    function nextSlide() {
        setCurrent(current == length - 1 ? 0: current + 1);
    }

    function previousSlide() {
        setCurrent(current == 0 ? length - 1: current - 1);
    }

    console.log(current);

    return (
        <div>
            <div name='rightarrow' onClick={nextSlide}></div>
            <div name='leftarrow' onClick={previousSlide}></div>
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
            </svg> 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg> */}

            {CarouselData.map((slide, index) => {
                return (
                    <div class='gallery' key={index}>
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