import { Component } from '@angular/core';
import { from } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent {

  pluckmethod(){
    const source = from([
      { name: 'Joe', age: 30 },
      { name: 'Sarah', age: 35 }
    ]);
    const example = source.pipe(pluck('name'));
    const subscribe = example.subscribe(val => console.log(val));
  }
}
