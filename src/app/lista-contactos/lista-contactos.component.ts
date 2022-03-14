import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent implements OnInit {

  @Input() datos: any;

  constructor() { }

  ngOnInit(): void {
  }

  guardar(nombre: any, email: any, mensaje: any, respuesta: number){
    this.datos.push(nombre, email, mensaje, respuesta);
  }

}
