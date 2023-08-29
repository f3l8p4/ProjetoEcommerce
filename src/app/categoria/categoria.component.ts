import { Component, OnInit } from '@angular/core';
import { CategoriaService } from './categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit{
    public dados:Array <any>  = [];
    constructor(public categoria_service: CategoriaService){

  }
  ngOnInit(): void {
    this.categoria_service.listar().on('value',(snapshot:any) =>{
      this.dados = Object(snapshot.values(snapshot.val()))
    })

  }
}
