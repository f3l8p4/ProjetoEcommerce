import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './categoria/categoria.component';
import { MainComponent } from './main/main.component';
import { BrowserModule } from '@angular/platform-browser';
import { CategoriaListarComponent } from './categoria/categoria-listar/categoria-listar.component';
import { CategoriaFormComponent } from './categoria/categoria-form/categoria-form.component';

const routes: Routes = [
  {
    path:'',
    component:MainComponent
  },
  {
    path: 'categoria',
    component:CategoriaComponent,
    children:[
      {
        path:'',
        component:CategoriaListarComponent
      },
      {
        path:'form',
        component:CategoriaFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [ BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
