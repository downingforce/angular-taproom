import { Component, Input} from "@angular/core";
import { Keg } from "./keg.model";

@Component ({
  selector: 'keg-list',
  template: `
  <div class="row">
    <div *ngFor="let keg of childkegs">
      <div class="col-sm-2" id="keglist">
          <h3>{{ keg.name }}</h3>
          <h3>{{ keg.brand }}</h3>
          <h3>{{ keg.price }}$</h3>
          <h3>{{ keg.alcoholContent }}%</h3>
          <h3>{{ keg.totalPints }}</h3>
          <button (click)="takePint(keg)">Take a Pint</button>
      </div>
    </div>
  </div>

  `
})

export class KegListComponent{
  @Input() childkegs: Keg[];
  takePint(testKeg: Keg){
    testKeg.totalPints -= 1;
  }
}
