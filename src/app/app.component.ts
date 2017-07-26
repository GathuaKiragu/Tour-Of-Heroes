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
  template: `<h1>{{title}}</h1><h2>{{hero.name}} details!</h2>`
})


export class AppComponent {
  title = 'Tour of Heroes';

// Assigning hero object with values
  hero: Hero = {
  id: 1,
  name: 'Windstormyy'
  }
}
