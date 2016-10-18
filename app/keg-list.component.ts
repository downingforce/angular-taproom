import { Component, Input} from "@angular/core";
import { Keg } from "./keg.model";

@Component ({
  selector: 'keg-list',
  template: `
  <select (change) ="onChange($event.target.value)" class="filter">
    <option value="all">Show All</option>
    <option value="tappedIn">Over 10</option>
    <option value="tappedOut">Under 10</option>
  </select>
  <div class="row">
    <div *ngFor="let keg of childkegs | completeness:selectedCompleteness">
      <div class="col-sm-2" id="keglist">
          <h3>{{ keg.name }}</h3>
          <h3>{{ keg.brand }}</h3>
          <h3>{{ keg.price }}$</h3>
          <h3 [class.strongBeer]="keg.alcoholContent > 6">{{ keg.alcoholContent }}%</h3>
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
  public selectedCompleteness: string = "";
  onChange(targetValue) {
    this.selectedCompleteness = targetValue;
  }
}
