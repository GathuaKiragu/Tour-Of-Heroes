import { Component } from '@angular/core';

// Creating a Hero object
export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `<h1>{{title}}</h1>
  <div>
  <h2>{{hero.name}} details!</h2>
  <h2><label>name: </label></h2>
  <input [(ngModel)]="hero.name" placeholder="name">
</div>`
})


export class AppComponent {
  title = 'Tour of Heroes';
  heroes = HEROES;
// Assigning hero object with values
  // hero: Hero = {
  // id: 1,
  // name: 'Windstormyy'
  // }
}
// Hweoes Array
const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];
