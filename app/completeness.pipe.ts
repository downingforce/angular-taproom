import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe({
  name: "completeness",
  pure: false
})

export class CompletenessPipe implements PipeTransform {

  transform(input: Keg[], overTen, sortPrice){

    var newList: Keg[] = [];

    newList = input.sort(function (a,b) {
      if(a.price > b.price){
        return 1;
      }
      if(a.price < b.price){
        return -1;
      }
      return 0;
    });


    var output: Keg[] = [];
    if(overTen === "tappedIn"){
      for(var i = 0; i < newList.length; i ++){
        if(newList[i].totalPints >= 10){
          output.push(newList[i]);
        }
      }

      return output;
    } else if (overTen === "tappedOut"){
      for(var i = 0; i < input.length; i++){
          if(input[i].totalPints < 10){
            output.push(input[i]);
          }
        }
      return output;
    } else {
      return newList;
    }
  }
}
