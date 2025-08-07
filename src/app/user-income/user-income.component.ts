import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type IngresoInversion } from '../ingreso-inversion.model';

@Component({
  selector: 'app-user-income',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-income.component.html',
  styleUrl: './user-income.component.css'
})
export class UserIncomeComponent {
  @Output() calcular = new EventEmitter<IngresoInversion>();

  inversionInicialIngresada = '0';
  inversionAnualIngresada = '0';
  rendimientoEsperadoIngresado = '5';
  duracionIngresada = '10';

  onSend(){
    console.log("Eviado!!!!!!!!!!!!");
    console.log(this.inversionInicialIngresada);
    console.log(this.inversionAnualIngresada);
    console.log(this.rendimientoEsperadoIngresado);
    console.log(this.duracionIngresada);

    this.calcular.emit({
      inversionInicial: +this.inversionInicialIngresada,
      inversionAnual: + this.inversionAnualIngresada,
      rendimientoEsperado: + this.rendimientoEsperadoIngresado,
      duracion: + this.duracionIngresada,
    });
  }
}
