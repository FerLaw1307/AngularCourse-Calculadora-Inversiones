import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
@Component({
  selector: 'app-raiz',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent]
})
export class AppComponent {}
