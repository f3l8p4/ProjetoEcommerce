import { Component } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.scss']
})
export class ClienteFormComponent {
  public nome:string = '';
  public cpf:string = '';
  public datanascimento:string = '';
  public celular:string = '';
  public email:string = '';
  constructor(public clienteService:ClienteService, acitvated_route:ActivatedRoute){}
  salvar(){
    let dados = {
      nome:this.nome,
      cpf:this.cpf,
      datanascimento:this.datanascimento,
      celular:this.celular,
      email:this.email
    }
    this.clienteService.salvar(dados)
  }
}
