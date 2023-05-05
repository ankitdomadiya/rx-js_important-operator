import { Component } from '@angular/core';
import { throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-catcherror',
  templateUrl: './catcherror.component.html',
  styleUrls: ['./catcherror.component.scss']
})
export class CatcherrorComponent {

  catcherrormethod() {

    const source = throwError('This is an error!');
    const example = source.pipe(catchError(val => of(`I caught: ${val}`)));
    const subscribe = example.subscribe(val => console.log(val));
  }
}
