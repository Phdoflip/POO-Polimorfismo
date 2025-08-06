import { Animal } from './Animal';

export class Gato extends Animal {
  emitirSom(): string {
    return 'Miau!';
  }
}
