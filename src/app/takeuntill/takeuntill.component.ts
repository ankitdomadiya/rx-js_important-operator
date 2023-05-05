import { Component } from '@angular/core';
import { interval, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-takeuntill',
  templateUrl: './takeuntill.component.html',
  styleUrls: ['./takeuntill.component.scss']
})
export class TakeuntillComponent {

  takeuntillmethod(){

    let take = interval(1000);
    let timer$ = timer(5000);
    let example = take.pipe(takeUntil(timer$));
    let subscribe = example.subscribe(val=> console.log(val));
  }
}
