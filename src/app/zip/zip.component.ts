import { Component } from '@angular/core';
import { delay } from 'rxjs/operators';
import { of, zip } from 'rxjs';

@Component({
  selector: 'app-zip',
  templateUrl: './zip.component.html',
  styleUrls: ['./zip.component.scss']
})
export class ZipComponent {

  zipmethod() {
    const sourceOne = of('Hello');
    const sourceTwo = of('World!');
    const sourceThree = of('Goodbye');
    const sourceFour = of('World!');
    const sourceFive = of('Hello');
    const sourceSix = of('World!');
    const sourceSeven = of('Goodbye');
    const sourceEight = of('World!');
    const sourceNine = of('Hello');
    const sourceTen = of('World!');
    const sourceOne1 = of('Hello');
    const sourceTwo2 = of('World!');
    const sourceThree3 = of('Goodbye');
    const sourceFour4 = of('World!');
    const sourceFive5 = of('Hello');
    const sourceSix6 = of('World!');
    const sourceSeven7 = of('Goodbye');
    const sourceEight8 = of('World!');
    const sourceNine9 = of('Hello');
    const sourceTen10 = of('World!');
    const example = zip(
      sourceOne,
      sourceTwo.pipe(delay(10)),
      sourceThree.pipe(delay(10)),
      sourceFour.pipe(delay(10)),
      sourceFive.pipe(delay(10)),
      sourceSix.pipe(delay(10)),
      sourceSeven.pipe(delay(10)),
      sourceEight.pipe(delay(10)),
      sourceNine.pipe(delay(10)),
      sourceTen.pipe(delay(10)),
      sourceOne1.pipe(delay(10)),
      sourceTwo2.pipe(delay(10)),
      sourceThree3.pipe(delay(10)),
      sourceFour4.pipe(delay(10)),
      sourceFive5.pipe(delay(10)),
      sourceSix6.pipe(delay(10)),
      sourceSeven7.pipe(delay(10)),
      sourceEight8.pipe(delay(10)),
      sourceNine9.pipe(delay(10)),
      sourceTen10.pipe(delay(10)),
    );
    const subscribe = example.subscribe(val => console.log(val));
  }
}
