import { Injectable } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Injectable({
  providedIn: 'root'
})
export class FormaPagamentoService {

  constructor(public firebaseService:FirebaseService) { }
  ref(){
    return this.firebaseService.ref().child('/forma_pagamento');
  }

  salvar(dados:any){
    this.ref().push(dados).then();
  }
  listar(){
    return this.ref();
  }

  excluir(indice:string){
    this
    .ref()
    .child('/' + indice)
    .remove()
    .then();
  }

  editar(indice:string,dados:any){
    this.ref().child('/' + indice)
    .update(dados)
    .then();
  }
}
