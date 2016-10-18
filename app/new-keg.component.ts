import { Component, Output, EventEmitter} from "@angular/core";
import { Keg } from "./keg.model";

@Component ({
  selector: 'new-keg',
  template: `
  <h1>Add a Keg Name</h1>
  <input #kegName>
  <label>Add a Keg Brand</label>
  <input #kegBrand>
  <label>Add a Keg price</label>
  <input #kegPrice>
  <label>Add an alcohol content</label>
  <input #alcoholContent>
  <button (click)="createKegClicked(kegName.value, kegBrand.value, kegPrice.value, alcoholContent.value)">Create Keg </button>
  `
})

export class NewKegComponent {
  @Output() kegSender = new EventEmitter()
  createKegClicked(name,brand,price,alcContent) {
    var testKeg: Keg = new Keg(name,brand,price,alcContent, 124);
    this.kegSender.emit(testKeg);
  }

}
