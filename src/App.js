
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner/Banner';
import NavBar from './components/NavBar/NavBar';
import Top10Carousl from './components/Top10Carousl/Top10Carousl';
import FirstAdContainer from './Container/FirstAdContainer/FirstAdContainer';
import CategoryMovieCarousl from './components/CategoryMovieSwiper/CategoryMovieSwiper';
import OtherAdContainer from './Container/OtherAdContainer/OtherAdContainer';
import FooterBanner from './components/FooterBanner/FooterBanner';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <FirstAdContainer />
      <Top10Carousl />
      <CategoryMovieCarousl movieTitle={"ดูหนังออนไลน์HD"} />
      <OtherAdContainer />
      <CategoryMovieCarousl movieTitle={"พากย์ไทย"} />
      <CategoryMovieCarousl movieTitle={"Action บู"} />
      <OtherAdContainer />
      <CategoryMovieCarousl movieTitle={"Comedy ตลก"} />
      <CategoryMovieCarousl movieTitle={"หนังการ์ตูน"} />
      <OtherAdContainer />
      <CategoryMovieCarousl movieTitle={"Fantasy แฟนตาซี"} />
      <CategoryMovieCarousl movieTitle={"Thriller ระทึกขวัญ"} />

      <FooterBanner />
      <Footer />



    </div>
  );
}

export default App;
