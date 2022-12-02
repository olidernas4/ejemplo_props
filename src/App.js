import './App.css';
import Cajas from './componentes/caja.jsx'

function App() {
  return (
    <div className="App">
      <div className='contenedorCajas'>
		<Cajas
			imagen='natural.jpg'
			altImagen='Foto de un lago en la montaña'
			titulo='Viajes de montaña'
			texto='Les presentamos una gran variedad
			de entornos espectaculares de montaña.
			Le preparamos todo para que pueda pasar
			sus vacaciones en la montaña.'
		/>
		<Cajas
			imagen='paisajes.jpg'
			altImagen='Foto de una calle mojada por la lluvia'
			titulo='Viajes urbanos'
			texto='Tenemos viajes preparados para visitar las
			ciudades más impactantes del mundo. Conocerá los
			rincones más especiales de la ciudad que decida visitar.'
		/>
		
      </div>
    </div>
  );
}

export default App;
