import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ResultadosInversionComponent } from './resultados-inversion/resultados-inversion.component';
import { BrowserModule } from '@angular/platform-browser';
import { IncomeUserModule } from './user-income/user-income.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ResultadosInversionComponent,
  ],
  imports:[BrowserModule, IncomeUserModule],
  bootstrap:[AppComponent]
})
export class AppModule {}
