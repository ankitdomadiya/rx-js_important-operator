import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { throttle, map } from 'rxjs/operators';

@Component({
  selector: 'app-throttle-time',
  templateUrl: './throttle-time.component.html',
  styleUrls: ['./throttle-time.component.scss']
})
export class ThrottleTimeComponent {

  throttlemethod() {
    const source = interval(10);
    //incrementally increase the time to resolve based on source
    const promise = (val: number) =>
      new Promise(resolve =>
        setTimeout(() => resolve(`Resolved: ${val}`), val * 100)
      );
    //when promise resolves emit item from source
    const example = source.pipe(
      throttle(promise),
      map(val => `Throttled off Promise: ${val}`)
    );
    
    const subscribe = example.subscribe(val => console.log(val));
  }
}
