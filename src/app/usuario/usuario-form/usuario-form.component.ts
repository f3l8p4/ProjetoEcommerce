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

 constructor(private usuarioService:UsuarioService){
 }

 salvar(){
  const fd = new FormData()
  fd.append('nome',this.nome),
  fd.append('email',this.email),
  fd.append('senha',this.senha)
  if(this.indice == ''){
    this.usuarioService.salvar(fd).subscribe()
  }
 }
}
