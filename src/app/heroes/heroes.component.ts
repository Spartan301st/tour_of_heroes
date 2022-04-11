import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
// import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  // hero: Hero = {
  //   id: 1,
  //   name: 'Leonidas',
  // };
  // selectedHero?: Hero;

  // heroes = HEROES;
  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService // private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  // when user is selected add a corresponding message info
  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  // }

  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }
  // to be able to handle Observable returned by our service
  getHeroes(): void {
    // here we are subscribing for the observable returned
    // The subscribe() method passes the emitted array to the callback, which sets the component's heroes property.
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
