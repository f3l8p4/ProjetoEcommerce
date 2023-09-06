import { Component } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.scss']
})
export class UsuarioFormComponent {
  public nome: string = '';
  public email: string = '';
  public senha: string = ''
  public indice: String  = '';

  constructor(public usuarioService : UsuarioService, public activated_route:ActivatedRoute){
    this.activated_route.params
    .subscribe(
      (params:any) => {
        // Caso seja um registro novo
        // interronper o método
        if (params.indice == undefined) return;

        this.usuarioService.ref()
        .child('/' + params.indice)
        .on('value',(snapshot:any) => {
          let dado:any    = snapshot.val();
          this.indice     = params.indice;
          this.nome  = dado.nome;
          this.email = dado.email;
          this.senha = dado.senha
        });
      }
    );
  }
  salvar(){
    this.usuarioService.salvar({
      nome:this.nome,
      email:this.email,
      senha:this.senha
    })
  }

}
