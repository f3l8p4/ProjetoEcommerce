import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriaListarComponent } from './categoria/categoria-listar/categoria-listar.component';
import { CategoriaFormComponent } from './categoria/categoria-form/categoria-form.component';
import {AngularFireModule} from '@angular/fire/compat'
import {AngularFireStorageModule} from '@angular/fire/compat/storage'
import { FormsModule } from '@angular/forms';
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
import { ClienteFormComponent } from './cliente/cliente-form/cliente-form.component';
import { ClienteListarComponent } from './cliente/cliente-listar/cliente-listar.component';
import { HttpClientModule } from '@angular/common/http';
import { AutenticacaoComponent } from './autenticacao/autenticacao.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    SidebarComponent,
    CategoriaComponent,
    CategoriaListarComponent,
    CategoriaFormComponent,
    FormaPagamentoComponent,
    FormaPagamentoListarComponent,
    FormaPagamentoFormComponent,
    UsuarioComponent,
    UsuarioListarComponent,
    UsuarioFormComponent,
    SubCategoriaComponent,
    SubCategoriaFormComponent,
    ProdutoComponent,
    ListagemProdutoComponent,
    FormProdutoComponent,
    ClienteComponent,
    ClienteFormComponent,
    ClienteListarComponent,
    AutenticacaoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBAi74itJuKANQ9FstRxbp13_dwwErxJio",
      authDomain: "ecommerce-93042.firebaseapp.com",
      projectId: "ecommerce-93042",
      storageBucket: "ecommerce-93042.appspot.com",
      messagingSenderId: "161358087707",
      appId: "1:161358087707:web:706099db196d18af7e9abe",
      measurementId: "G-VDXRH4ELBN"
}),
    AngularFireStorageModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
