import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {
  nombreLower: string = 'gerson';
  nombreUpper: string = 'GERSON';
  nombreCompleto: string = 'GersOn AngeL';
}
