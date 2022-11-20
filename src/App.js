import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner/Banner';
import NavBar from './components/NavBar/NavBar';
import ImgCard from './components/ImgCard/ImgCard';
import Top10Carousl from './components/Top10Carousl/Top10Carousl';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <ImgCard></ImgCard>
      <Top10Carousl />
    </div>
  );
}

export default App;
