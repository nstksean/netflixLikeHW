import Card from 'react-bootstrap/Card';

function ImgCard(

) {
    return (
        <Card className="bg-dark text-white">
            <Card.Img src={'https://info-1312249851.cos.ap-bangkok.myqcloud.com/16629790221388102.png'} alt="Card image" />
            <Card.ImgOverlay>

            </Card.ImgOverlay>
        </Card>
    );
}

export default ImgCard;