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
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioListarComponent } from './usuario/usuario-listar/usuario-listar.component';
import { UsuarioFormComponent } from './usuario/usuario-form/usuario-form.component';
import { SubCategoriaComponent } from './sub-categoria/sub-categoria.component';
import { SubCategoriaFormComponent } from './sub-categoria/sub-categoria-form/sub-categoria-form.component';
import { ProdutoComponent } from './produto/produto.component';
import { ListagemProdutoComponent } from './produto/listagem-produto/listagem-produto.component';
import { FormProdutoComponent } from './produto/form-produto/form-produto.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ClienteListarComponent } from './cliente/cliente-listar/cliente-listar.component';
import { ClienteFormComponent } from './cliente/cliente-form/cliente-form.component';
import { AutenticacaoComponent } from './autenticacao/autenticacao.component';
import { GuardService } from './service/guard.service';

const routes: Routes = [
  {
    path:'',
    component:MainComponent,
    canActivateChild:[GuardService]
  },
  {
    path: 'categoria',
    component:CategoriaComponent,
    canActivateChild:[GuardService],
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
        path:'listar',
        component:FormaPagamentoListarComponent
      },
      {
        path:'',
        redirectTo:'listar',
        pathMatch:'full'
      },
      {
        path:'form',
        component:FormaPagamentoFormComponent
      }
    ]
  },
  {
    
  path:'usuario',
  component:UsuarioComponent,
  children:[
    {
      path:'listar',
      component:UsuarioListarComponent
    },
    {
      path:'',
      redirectTo:'listar',
      pathMatch:'full'
    },
    {
      path:'form',
      component:UsuarioFormComponent
    }
  ]
  },
  {
    path:'subcategoria',
    component:SubCategoriaComponent,
    children:[
      {
        path:'forms',
        component:SubCategoriaFormComponent
      }
    ]
  },
  {
    path:'produto',
    component:ProdutoComponent,
    children:[
      {
        path:'listar',
        component:ListagemProdutoComponent
      },
      {
        path:'',
        redirectTo:'listar',
        pathMatch:'full'
      },
      {
        path:'form',
        component:FormProdutoComponent
      }
    ]
  },
  {
    path:'cliente',
    component:ClienteComponent,
    children:[
      {
        path:'listar',
        component:ClienteListarComponent
      },
      {
        path:'',
        redirectTo:'listar',
        pathMatch:'full'
      },
      {
        path:'form',
        component:ClienteFormComponent
      }
    ]
  },
  {
    path:'login',
    component:AutenticacaoComponent
  }
];

@NgModule({
  imports: [ BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
