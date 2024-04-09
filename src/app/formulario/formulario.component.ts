import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  nombre: string = '';
  email: string = '';
  opcion: string = '';
  acepto: boolean = false;

  enviarFormulario(formulario: any) {
    formulario.submitted = true; // Establecer submitted en true para mostrar los mensajes de validación

    // Verificar si el formulario es válido antes de proceder
    if (formulario.invalid) {
      return; // No hacer nada si el formulario no es válido
    }

    // Si el formulario es válido, proceder con la lógica de envío
    console.log('Formulario enviado:', { nombre: this.nombre, email: this.email, opcion: this.opcion, acepto: this.acepto });
  }
}
