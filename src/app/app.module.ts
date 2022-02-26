import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MeasurementSpo2Component } from './measurement-spo2/measurement-spo2.component';
import {MatCardModule} from '@angular/material/card';
import { MeasurementBpComponent } from './measurement-bp/measurement-bp.component';
import { MeasurementTempComponent } from './measurement-temp/measurement-temp.component';
import { MeasurementScaleComponent } from './measurement-scale/measurement-scale.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MeasurementSpo2Component,
    MeasurementBpComponent,
    MeasurementTempComponent,
    MeasurementScaleComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
