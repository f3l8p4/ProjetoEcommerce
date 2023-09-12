import { Injectable } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(public firebaseService:FirebaseService) { }
  ref(){
    return this.firebaseService.ref().child('/produto')
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
