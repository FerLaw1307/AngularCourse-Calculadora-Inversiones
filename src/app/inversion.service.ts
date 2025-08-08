import { Injectable } from '@angular/core';
import { type IngresoInversion } from './ingreso-inversion.model';

@Injectable({
  providedIn: 'root',
})
export class InversionService {
  inforesultado?: {
    anio: number;
    interes: number;
    valorFinalAnio: number;
    inversionAnual: number;
    interesTotal: number;
    montoTotalInvertido: number;
  }[];

  calcularResultadosInversion(info: IngresoInversion) {
    const { inversionInicial, inversionAnual, rendimientoEsperado, duracion } =
      info;

    const datosAnuales = [];
    let valorInversion = inversionInicial;

    for (let i = 0; i < duracion; i++) {
      const anio = i + 1;
      const interesGanadoEnAnio = valorInversion * (rendimientoEsperado / 100);
      valorInversion += interesGanadoEnAnio + inversionAnual;
      const interesTotal =
        valorInversion - inversionAnual * anio - inversionInicial;
      datosAnuales.push({
        anio: anio,
        interes: interesGanadoEnAnio,
        valorFinalAnio: valorInversion,
        inversionAnual: inversionAnual,
        interesTotal: interesTotal,
        montoTotalInvertido: inversionInicial + inversionAnual * anio,
      });
    }
    this.inforesultado = datosAnuales;
    // this.infoResultados.set(datosAnuales);
  }
}
