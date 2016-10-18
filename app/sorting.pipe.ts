import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe({
  name: "sorting",
  pure: false
})

export class SortingPipe implements PipeTransform {
  transform(input: Keg[],sortThis){

  if(sortThis === "Yes") {
    input.sort(function (a,b) {
      if(a.price > b.price){
        return 1;
      }
      if(a.price < b.price){
        return -1;
      }
      return 0;
    });
      return input;
  } else {
    return input;
    }
  }
}
