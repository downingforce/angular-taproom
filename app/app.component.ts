import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  template: `
  <div class ="container">
    <h1>My First Angular 2 App</h1>
    <keg-list [childkegs]='masterKegList'></keg-list>
  </div>
  `
})

export class AppComponent {
  public masterKegList: Keg[] = [
    new Keg("Bock", "Shiner Bock", 80, 6),
    new Keg("IPA", "Lagaunitas", 105, 7),
    new Keg("Pilsner", "Budweiser", 60, 4.5),
    new Keg("Hefeweizen", "Pyramid", 100, 5)
  ];

  }
