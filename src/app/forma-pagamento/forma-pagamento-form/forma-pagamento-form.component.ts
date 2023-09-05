import { Component } from '@angular/core';
import { FormaPagamentoService } from '../forma-pagamento.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forma-pagamento-form',
  templateUrl: './forma-pagamento-form.component.html',
  styleUrls: ['./forma-pagamento-form.component.scss']
})
export class FormaPagamentoFormComponent {
  public forma: string = '';
  public indice: String  = '';

  constructor(public formaPagamentoService : FormaPagamentoService, public activated_route:ActivatedRoute){
    this.activated_route.params
    .subscribe(
      (params:any) => {
        // Caso seja um registro novo
        // interronper o método
        if (params.indice == undefined) return;

        this.formaPagamentoService.ref()
        .child('/' + params.indice)
        .on('value',(snapshot:any) => {
          let dado:any    = snapshot.val();
          this.indice     = params.indice;
          this.forma  = dado.forma;
        });
      }
    );
  }
  salvar(){
    this.formaPagamentoService.salvar({
      froma:this.forma
    })
  }
}
