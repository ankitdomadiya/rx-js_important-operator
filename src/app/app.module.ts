import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { TakeComponent } from './take/take.component';
import { PipeComponent } from './pipe/pipe.component';
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
import { FirstComponent } from './first/first.component';
import { SwitchmapComponent } from './switchmap/switchmap.component';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    TakeComponent,
    PipeComponent,
    FilterComponent,
    CombineletestComponent,
    MergeComponent,
    OfComponent,
    FromeventComponent,
    PluckComponent,
    TakeuntillComponent,
    TapComponent,
    CatcherrorComponent,
    ZipComponent,
    ThrottleTimeComponent,
    FirstComponent,
    SwitchmapComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
