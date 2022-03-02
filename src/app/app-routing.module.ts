import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { DataComponent } from './data/data.component';
const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'data', component: DataComponent },
  { path: 'display', component: DisplayComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }