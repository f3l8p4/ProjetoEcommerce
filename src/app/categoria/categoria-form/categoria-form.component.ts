import { Component } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.scss']
})
export class CategoriaFormComponent {
  public descricao: string = '';
  public indice: String  = '';

  constructor(public categoria_service : CategoriaService, public activated_route:ActivatedRoute){
    this.activated_route.params
    .subscribe(
      (params:any) => {
        // Caso seja um registro novo
        // interronper o método
        if (params.indice == undefined) return;

        this.categoria_service.ref()
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
    this.categoria_service.salvar({
      descricao:this.descricao
    })
  }
}
