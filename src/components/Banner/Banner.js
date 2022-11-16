import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Banner() {
    return (
        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src="https://mdbootstrap.com/img/new/slides/041.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src="https://mdbootstrap.com/img/new/slides/042.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    );
}


