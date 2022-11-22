
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner/Banner';
import NavBar from './components/NavBar/NavBar';
import ImgCard from './components/ImgCard/ImgCard';
import Top10Carousl from './components/Top10Carousl/Top10Carousl';
import FirstAdContainer from './FirstAdContainer/FirstAdContainer';

function App() {

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <FirstAdContainer />
      <Top10Carousl />

    </div>
  );
}

export default App;
