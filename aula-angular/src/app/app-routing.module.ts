import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component'
import { DashComponent } from './components/dash/dash.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {
    path: 'dash',
    component: DashComponent
  },
  {
    path: 'main',
    component: MainComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
