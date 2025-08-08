import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserIncomeComponent } from './user-income/user-income.component';
import { ResultadosInversionComponent } from './resultados-inversion/resultados-inversion.component';
@Component({
  selector: 'app-raiz',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserIncomeComponent, ResultadosInversionComponent],
})
export class AppComponent {}
