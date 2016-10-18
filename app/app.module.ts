import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import { KegListComponent }   from './keg-list.component';
import { NewKegComponent }   from './new-keg.component';
import { CompletenessPipe }  from './completeness.pipe';
import { SortingPipe }  from './sorting.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [ AppComponent, KegListComponent, NewKegComponent, CompletenessPipe, SortingPipe],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
