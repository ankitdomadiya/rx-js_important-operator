import { Component } from '@angular/core';
import { first, from } from 'rxjs';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent {

  firstmethod(){
  const source = from([10, 2, 3, 4, 5]);
  const example = source.pipe(first());
  const subscribe = example.subscribe(val => console.log(`First value: ${val}`));
  }

}
