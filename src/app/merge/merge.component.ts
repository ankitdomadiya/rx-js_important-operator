import { Component } from '@angular/core';
import { from, map, mergeAll, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss']
})
export class MergeComponent {

  getData(data:any){
    return of(data+ ' API Call..');
  }

  ngOnInit(): void {
    
      const source = from(['First','Second','Third']);

      // Merge Map

      source.pipe(map(res => this.getData(res)))
      .subscribe(res =>{
        console.log(res);
        // res.subscribe(res => console.log(res));
      });



      // Merge All

      source.pipe(map(res => this.getData(res)),
          mergeAll()
      )
      .subscribe(res =>{
        console.log(res);
      });



      // mergeMap
      
      source.pipe(mergeMap(res => this.getData(res)))
      .subscribe(res =>{
        console.log(res);
      });
  }
}
