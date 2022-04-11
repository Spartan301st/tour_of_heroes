import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() {}

  createDb() {
    const heroes = [
      { id: 11, name: 'Gandalf' },
      { id: 12, name: 'Frodo' },
      { id: 13, name: 'Elrond' },
      { id: 14, name: 'Aragorn' },
      { id: 15, name: 'Legolas' },
      { id: 16, name: 'Sam' },
      { id: 17, name: 'Eowyn' },
      { id: 18, name: 'Gimli' },
      { id: 19, name: 'Merry' },
      { id: 20, name: 'Galadriel' },
    ];
    return { heroes };
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }
}
