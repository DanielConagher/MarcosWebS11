import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  nombre: string = '';
  correo: string = '';
  tipoApp: string = '';
  mensaje: string = '';
  telefono: string = '';
  registroValido: boolean = false;
  constructor() { }


  validarRegistro() {
    const correoValido =
      this.correo.includes('@') && this.correo.includes('.');
    if (!this.nombre.trim()) {
      this.registroValido = false;
      this.mensaje.concat("Error: ", "nombre no puede estar vacio");
      return;
    }

    if (!this.correo.trim()) {
      this.registroValido = false;
      this.mensaje.concat(this.mensaje, "correo no puede estar vacio");
      return;
    }

    if (!correoValido) {
      this.registroValido = false;
      this.mensaje.concat(this.mensaje, 'Ingrese un correo válido.');
      return;
    }

    if (!this.tipoApp) {
      this.registroValido = false;
      this.mensaje.concat(this.mensaje, 'Debe elegir un tipo de aplicación.');
      return;
    }

    if (!this.telefono) {
      this.registroValido = false;
      this.mensaje.concat(this.mensaje, 'Debe ingresar su telefono.');
      return;
    }

    if (isNaN(Number(this.telefono))) {
      this.registroValido = false;
      this.mensaje.concat(this.mensaje.concat(this.mensaje, 'El teléfono solo debe contener números.'));
      return;
    }

    this.registroValido = true;
    this.mensaje =
      'Registro válido. Bienvenido/a ' + this.nombre +
      '. Tipo de app: ' + this.tipoApp + '.';

  }

  limpiar() {
    this.nombre = '';
    this.correo = '';
    this.tipoApp = '';
    this.mensaje = '';
    this.telefono = '';
    this.registroValido = false;
  }
}
