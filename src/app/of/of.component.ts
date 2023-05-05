import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.scss']
})
export class OfComponent {

  ofmethod(){
    const source = of({ name: 'of method' }, [1, 2, 3], function hello() {
      return 'Hello';
    });
    const subscribe = source.subscribe(val => console.log(val));
  }

}
