import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InversionService } from '../inversion.service';

@Component({
  selector: 'app-user-income',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-income.component.html',
  styleUrl: './user-income.component.css'
})
export class UserIncomeComponent {

  inversionInicialIngresada = signal('0');
  inversionAnualIngresada = signal('0');
  rendimientoEsperadoIngresado = signal('5');
  duracionIngresada = signal('10');

  constructor(private inversionService: InversionService){}

  onSend(){
    console.log("Eviado!!!!!!!!!!!!");
    
    this.inversionService.calcularResultadosInversion({
      inversionInicial: +this.inversionInicialIngresada(),
      inversionAnual: + this.inversionAnualIngresada(),
      rendimientoEsperado: + this.rendimientoEsperadoIngresado(),
      duracion: + this.duracionIngresada(),
    });

    this.inversionInicialIngresada.set('0');
    this.inversionAnualIngresada.set('0');
    this.rendimientoEsperadoIngresado.set('5');
    this.duracionIngresada.set('10');
  }
}
