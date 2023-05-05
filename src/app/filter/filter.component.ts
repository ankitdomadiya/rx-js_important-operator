import { Component } from '@angular/core';
import { filter, from } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  subscribe: any;
  source: any;
  example: any;

  filtermethod() {

    this.source = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    this.example = this.source.pipe(filter((res: any) => {
      return res % 2 === 0;
    }));
    return this.subscribe = this.example.subscribe((val: any) => console.log(`Even number: ${val}`));
  }


}

