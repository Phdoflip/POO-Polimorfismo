import './App.css';
import { Gato } from './models/Gato';
import { Papagaio } from './models/Papagaio';
import { Animal } from './models/Animal';

function App() {
  const animais: Animal[] = [
    new Gato('Mimi'),
    new Papagaio('Loro! Olá! Eu sou um papagaio!')
  ];

  return (
    <div>
      {animais.map((animal, i) => (
        <p key={i}>
          {animal.getNome()} diz: {animal.emitirSom()}
        </p>
      ))}
    </div>
  );
}

export default App;
