import { Component } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { ActivatedRoute } from '@angular/router';
import { CategoriaService } from 'src/app/categoria/categoria.service';

@Component({
  selector: 'app-form-produto',
  templateUrl: './form-produto.component.html',
  styleUrls: ['./form-produto.component.scss']
})
export class FormProdutoComponent {
  public categorias:Array<any> = [];
  public nome: string = '';
  public preco: string = '';
  public descricao: string = '';
  public categoria: string = '';
  public indice: string = '';
  constructor(public produtoService: ProdutoService, public activated_route:ActivatedRoute, public categoriaService: CategoriaService){
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
          let dado:any    = snapshot.val();
          this.indice     = params.indice;
          this.descricao  = dado.descricao;
        });
      }
    );
  }

  salvar(){
    let dados = {
      nome:this.nome,
      preco:this.preco,
      descricao:this.descricao,
      categoria:this.categorias,
    }
    this.produtoService.salvar(dados)
  }
  mudar(){
    console.log(this.indice)
  }
}
