import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-fromevent',
  templateUrl: './fromevent.component.html',
  styleUrls: ['./fromevent.component.scss']
})
export class FromeventComponent {

  fromeventmethod(){
    const source = fromEvent(document, 'click');
    const example = source.pipe(map(event => `Event time: ${event.timeStamp}`));
    const subscribe = example.subscribe(val => console.log(val));
  }
}
