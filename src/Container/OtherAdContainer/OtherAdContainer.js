import ImgCard from '../../components/ImgCard/ImgCard';
import './OtherAdContainer.css'
export default function OtherAdContainer() {
    const key = Math.random()

    return (
        <div className='OtherAdContainer container'>
            <div className="">
                <div className="row">
                    <div className="col">
                        <ImgCard
                            key={key}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}