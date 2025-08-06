// Classe base
export class Animal {
  emitirSom(): string {
    return 'Loro';
  }
}

// Subclasse Papagaio sobrescrevendo emitirSom
export class Papagaio extends Animal {
  emitirSom(): string {
    return 'Loro! Olá! Eu sou um papagaio!';
  }
}

function apresentarAnimal(animal: Animal) {
  console.log(animal.emitirSom());
}

const animalGenerico = new Animal();
const papagaio = new Papagaio();

apresentarAnimal(animalGenerico);
apresentarAnimal(papagaio);        
