import { Component, computed, inject, input } from '@angular/core';
import { InversionService } from '../inversion.service';

@Component({
  selector: 'app-resultados-inversion',
  templateUrl: './resultados-inversion.component.html',
  styleUrl: './resultados-inversion.component.css',
})
export class ResultadosInversionComponent {
  private inversionService = inject(InversionService);

  resultados = computed(() => this.inversionService.inforesultado());
  // res = this.inversionService.inforesultado.asReadonly();
}
