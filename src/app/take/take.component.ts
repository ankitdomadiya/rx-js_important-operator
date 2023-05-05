import { Component } from '@angular/core';
import { interval, of, take } from 'rxjs';



// ######### import rxjs ###########

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent {


  source = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
  takeSource: any[] = [];


  takeoperator() {
    this.source.pipe(take(9)).subscribe((val: any) => {
      // console.log(typeof(val));
      this.takeSource.push(val);
    });
  }




  
}