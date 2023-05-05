import { Component } from '@angular/core';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
  example: any;
  subscribe: any;

  source = from([10, 20, 30, 40, 50]);
  map() {

    this.example = this.source.pipe(map((res: any) => {
      return res + 1
    }));

    return this.subscribe = this.example.subscribe((val: any) => console.log(val));
  }

  map2() {
    const source = from([
      { name: 'Joe', age: 30 },
      { name: 'Frank', age: 20 },
      { name: 'Ryan', age: 50 }
    ]);


    const example = source.pipe(map(({ name, age }) => name + '   ' + age));

    const subscribe = example.subscribe(val => console.log(val));
  }

}
