import { Component } from '@angular/core';
import { filter, map, of } from 'rxjs';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent {

  source = of(1,2,3,4,5,6);
  ngOnInit(): void {
    
    const res = this.source.pipe(map((val)=>{ return val*2}), filter((val)=>{ return val % 2 == 0}))
                .subscribe({
                  next:(res)=>{console.log(res)},
                  error:(err)=>{console.log(err);},
                  complete:()=>{console.log('Done');}
                });
    
    console.log(res);
  }
}
