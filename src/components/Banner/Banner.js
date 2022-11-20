import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Banner() {
    return (
        <Carousel>
            <Carousel.Item interval={5000}>
                <img
                    className="d-block w-100"
                    src="https://mdbootstrap.com/img/new/slides/041.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                    className="d-block w-100"
                    src="https://mdbootstrap.com/img/new/slides/042.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>

        </Carousel>
    );
}


