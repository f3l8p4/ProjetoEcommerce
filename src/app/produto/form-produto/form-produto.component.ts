import { Component } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { ActivatedRoute } from '@angular/router';
import { CategoriaService } from 'src/app/categoria/categoria.service';
import { SubCategoriaServiceService } from 'src/app/sub-categoria/sub-categoria-service.service';

@Component({
  selector: 'app-form-produto',
  templateUrl: './form-produto.component.html',
  styleUrls: ['./form-produto.component.scss']
})
export class FormProdutoComponent {
  public categorias:Array<any> = [];
  public subCategorias:Array<any> = [];
  public nome: string = '';
  public preco: string = '';
  public descricao: string = '';
  public categoria: string = '';
  public indice: string = '';
  public is_desabilidado:boolean = false;
  public subCategoria:string  = ''
  constructor(public produtoService: ProdutoService, public activated_route:ActivatedRoute, public categoriaService: CategoriaService, public subCategoriaService:SubCategoriaServiceService){
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

    this.activated_route.params
    .subscribe(
      (params:any) => {
        // Caso seja um registro novo
        // interronper o método
        if (params.indice == undefined) return;

        this.categoriaService.ref()
        .child('/' + params.indice)
        .on('value',(snapshot:any) => {
          let dado:any      = snapshot.val();
          this.indice       = params.indice;
          this.nome         = dado.nome;
          this.preco        = dado.preco;
          this.descricao    = dado.descricao;
          this.categoria    = dado.categoria;
          this.listarSubcategoria(dado.categoria);
          this.subCategoria = dado.subcategoria;
        });
      }
    );
  }

  salvar(){
    let dados = {
      nome:this.nome,
      preco:this.preco,
      descricao:this.descricao,
      categoria:this.categoria,
      subCategoria:this.subCategoria
    }
    //this.produtoService.salvar(dados)
    console.log(dados)
  }

  listarSubcategoria(_categoria:string){


    //this.subCategorias.splice(0,this.subCategorias.length);

    this.subCategoriaService.listar()
    .on('value',(snapshot:any) => {

      // Dados retornados do Firebase
      let response = snapshot.val();

      // Não setar valores caso não venha
      // nenhum registro
      if (response == null) return;
      
      Object.values( response )
      .forEach(
        (e:any,i:number) => {
          
          // Indice da subcategoria
          let _indice = Object.keys(snapshot.val())[i];
          
          // Testa se a categoria selecionada
          // é a mesma da subcategoria
          if (_categoria == e.categoria){
          // Adiciona os elementos no vetor
          // de dados            
            this.subCategorias.push({
              nome: e.nome,
              preco:e.preco,
              descricao: e.descricao,
              categoria: e.categoria,
              subcategoria: e.subcategoria,
              indice: _indice
            });
          }
        }
      );
      /**if (this.subCategorias.length > 0){
        this.is_desabilidado = false;
      }else{
        this.is_desabilidado = true;
      }
      **/
    });    
  }
}


