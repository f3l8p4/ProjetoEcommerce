import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-listar',
  templateUrl: './usuario-listar.component.html',
  styleUrls: ['./usuario-listar.component.scss']
})
export class UsuarioListarComponent implements OnInit{
  public dados: Array <any> = [];
  constructor( public usuarioService:UsuarioService, public router:Router){
    
  }
  
 /* ngOnInit(): void {
    this.usuarioService.listar().on('value',(snapshot:any) => {

      // Limpa variavel local com os dados
      this.dados.splice(0,this.dados.length);
  
      console.log( snapshot.val);
      // Dados retornados do Firebase
      let response = snapshot.val();
  
      // Não setar valores caso não venha
      // nenhum registro
      if (response == null) return;
  
      // Percorre a coleção de dados 
      Object.values( response )
      .forEach(
        (e:any,i:number) => {
          // Adiciona os elementos no vetor
          // de dados
          this.dados.push({
            nome: e.nome,
            email: e.email,
            senha: e.senha,
            indice: Object.keys(snapshot.val())[i]
          });
        }
      );
    });
  }
  excluir(key:string){
    this.usuarioService.excluir(key);
  }
      
  editar(key:string){
    this
    .router
    .navigate(['/form/form/' + key]);
  }
*/
  listar(){
    this.usuarioService.listar().subscribe((_dados:any)=>{
      this.dados = _dados
    })
  }
  ngOnInit(): void {
      this.listar();
  }
}
