import logo from './logo.svg';
import './App.css';
import ProductCard from './components/ProductCard';

function App() {
  return (
    <div className="App">
<ProductCard nom="Voiture de sport" prix="$170000.00" description="Véhicule avec un beau désign pouvant atteindre les 300kms" image="./assets/images/car-3531147_1280.jpg" note="4.5"/>

    </div>
  );
}

export default App;
