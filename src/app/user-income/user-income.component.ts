import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-income',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-income.component.html',
  styleUrl: './user-income.component.css'
})
export class UserIncomeComponent {
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
  }
}
