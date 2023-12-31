import { Component } from '@angular/core';
import { CategoriaService } from 'src/app/categoria/categoria.service';
import { __values } from 'tslib';
import { SubCategoriaServiceService } from '../sub-categoria-service.service';

@Component({
  selector: 'app-sub-categoria-form',
  templateUrl: './sub-categoria-form.component.html',
  styleUrls: ['./sub-categoria-form.component.scss']
})
export class SubCategoriaFormComponent {
  public categorias:Array<any> = [];
  public indice:string          = '';
  public descricao:string       = '';  
  public categoria:string       = '';
  constructor( public categoriaService:CategoriaService, public subCategoriaService:SubCategoriaServiceService){

    this.categoriaService.listar()
    .once('value',(snapshot:any) => {

      // Dados retornados do Firebase
      let response = snapshot.val();

      // Não setar valores caso não venha
      // nenhum registro
      if (response == null) return;

      Object.values( response )
      .forEach(
        (e:any,i:number) => {
          // Adiciona os elementos no vetor
          // de dados
          this.categorias.push({
            descricao: e.descricao,
            indice: Object.keys(snapshot.val())[i]
          });
        }
      );

      
    });
  }
  salvar(){
    let dados = {
      categoria:this.categoria,
      descricao : this.descricao
    }
    this.subCategoriaService.salvar(dados)

  }
}
