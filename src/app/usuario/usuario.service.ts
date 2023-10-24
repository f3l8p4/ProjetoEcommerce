import { Injectable } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { RequisicaoService } from '../requisicao.service';
import { retinaScale } from 'src/assets/vendor/chart.js/helpers';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private requisicao_service:RequisicaoService
  ) { }

  salvar(fd:any){
    return this.requisicao_service.post(fd,'usuario');
  }

  editar(fd:any,id:number){
    return this.requisicao_service.put(fd,'usuario/' + id);
  }

  load(id:number){
    return this.requisicao_service.get('/usuario/load/' + id);
  }

  listar(){
    return this.requisicao_service.get('/usuario/listar');
  }

  excluir(_id:number){
    return this.requisicao_service.del('/usuario/'+_id);
  }
  
}
