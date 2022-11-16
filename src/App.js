import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner/Banner';
import NavBar from './components/NavBar/NavBar';
import ImgCard from './components/ImgCard/ImgCard';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <ImgCard></ImgCard>
    </div>
  );
}

export default App;
