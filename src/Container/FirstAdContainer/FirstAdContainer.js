import Container from 'react-bootstrap/Container';
import ImgCard from '../../components/ImgCard/ImgCard';
import './FirstAdContainer.css'
import { api_info_1 } from '../../mockApi/mockApi'

export default function FirstAdContainer() {
  const datas = api_info_1.data

  return (
    <div className="container FirstAdContainer">
      <div className="row">

        {Array.from(datas).map((data) =>
          <div className="col">
            <ImgCard
              key={data?.adID}
            />
          </div>
        )}
      </div>
    </div>
  );
}