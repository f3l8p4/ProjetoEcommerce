import { Component, OnInit } from '@angular/core';
import { FormaPagamentoService } from '../forma-pagamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forma-pagamento-listar',
  templateUrl: './forma-pagamento-listar.component.html',
  styleUrls: ['./forma-pagamento-listar.component.scss']
})
export class FormaPagamentoListarComponent implements OnInit {
  public dados: Array <any> = [];
  constructor( public formaPagamentoService:FormaPagamentoService, public router:Router){
  }
  ngOnInit(): void {
    this.formaPagamentoService.listar().on('value',(snapshot:any) => {

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
            forma: e.forma,
            indice: Object.keys(snapshot.val())[i]
          });
        }
      );
    });
  }
  excluir(key:string){
    this.formaPagamentoService.excluir(key);
  }
      
  editar(key:string){
    this
    .router
    .navigate(['/form/form/' + key]);
  }
}
