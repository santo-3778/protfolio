import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SantoComponent } from './pages/santo/santo.component';

const routes: Routes = [

  {
    path:'',component:SantoComponent
  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
