import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import { api_carousel_Index_Index } from '../../mockApi/mockApi';

export default function Banner() {
    const bannerDatas = api_carousel_Index_Index.data
    return (
        <>
            <Carousel>
                {Array.from(bannerDatas).map((data) =>
                    <Carousel.Item interval={5000}>
                        <img
                            className="d-block w-100"
                            src={`${data.desktop_src}`}
                            alt={`${data.alt}`}
                        />
                    </Carousel.Item>

                )}

            </Carousel>
        </>
    );
}


