import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './map/map.component';
import { PipeComponent } from './pipe/pipe.component';
import { TakeComponent } from './take/take.component';
import { FilterComponent } from './filter/filter.component';
import { CombineletestComponent } from './combineletest/combineletest.component';
import { MergeComponent } from './merge/merge.component';
import { OfComponent } from './of/of.component';
import { FromeventComponent } from './fromevent/fromevent.component';
import { PluckComponent } from './pluck/pluck.component';
import { TakeuntillComponent } from './takeuntill/takeuntill.component';
import { TapComponent } from './tap/tap.component';
import { CatcherrorComponent } from './catcherror/catcherror.component';
import { ZipComponent } from './zip/zip.component';
import { ThrottleTimeComponent } from './throttle-time/throttle-time.component';
import { SwitchmapComponent } from './switchmap/switchmap.component';
import { FirstComponent } from './first/first.component';

const routes: Routes = [
  {
    path: "map",
    component: MapComponent
  },
  {
    path: "pipe",
    component: PipeComponent
  },
  {
    path: "take",
    component: TakeComponent
  },
  {
    path: "filter",
    component: FilterComponent
  },
  {
    path: "combineletest",
    component: CombineletestComponent
  },
  {
    path: "merge",
    component: MergeComponent
  },
  {
    path: "of",
    component: OfComponent
  },
  {
    path: "fromevent",
    component: FromeventComponent
  },
  {
    path: "pluck",
    component: PluckComponent
  },
  {
    path: "takeuntill",
    component: TakeuntillComponent
  },
  {
    path: "tap",
    component: TapComponent
  },
  {
    path: "catcherror",
    component: CatcherrorComponent
  },
  {
    path: "zip",
    component: ZipComponent
  },
  {
    path: "throttletime",
    component: ThrottleTimeComponent
  },
  {
    path: "switchmap",
    component: SwitchmapComponent
  },
  {
    path: "first",
    component: FirstComponent
  },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
