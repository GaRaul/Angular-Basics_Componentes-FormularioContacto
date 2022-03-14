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

  contactos: any;

  guardarContacto(){
    this.contactos.push(this.nombre, this.email, this.mensaje, this.respuesta);
    this.listaContactos.guardar(this.contactos);
  }
}
