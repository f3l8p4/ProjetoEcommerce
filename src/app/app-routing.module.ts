import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './categoria/categoria.component';
import { MainComponent } from './main/main.component';
import { BrowserModule } from '@angular/platform-browser';
import { CategoriaListarComponent } from './categoria/categoria-listar/categoria-listar.component';
import { CategoriaFormComponent } from './categoria/categoria-form/categoria-form.component';
import { FormaPagamentoComponent } from './forma-pagamento/forma-pagamento.component';
import { FormaPagamentoListarComponent } from './forma-pagamento/forma-pagamento-listar/forma-pagamento-listar.component';
import { FormaPagamentoFormComponent } from './forma-pagamento/forma-pagamento-form/forma-pagamento-form.component';

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
        path:'listar',
        component:CategoriaListarComponent
      },
      {
        path:'',
        redirectTo:'listar',
        pathMatch:'full'
      },
      {
        path:'form',
        component:CategoriaFormComponent
      }
    ]
  },
  {
    path:'forma-pagamento',
    component:FormaPagamentoComponent,
    children:[
      {
        path:'listagemPagamento',
        component:FormaPagamentoListarComponent
      },
      {
        path:'',
        redirectTo:'listagemPagamento',
        pathMatch:'full'
      },
      {
        path:'formaPagamento-form',
        component:FormaPagamentoFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [ BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
