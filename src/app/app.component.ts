import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Basics_Componentes-FormularioContacto';

  @ViewChild('listaContactos') listaContactos: any;

  nombre: any;
  email: any;
  mensaje: any;
  respuesta: number = 0;

  contactos = [{nombre: 'lala', email: 'lala@gmail.com', mensaje: 'lalalalalal', respuesta: 5}]

  guardarContacto(){
    this.listaContactos.guardar(this.nombre, this.email, this.mensaje, this.respuesta);
  }
}
