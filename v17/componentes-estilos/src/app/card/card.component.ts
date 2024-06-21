import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',

  styleUrl: './card.component.scss',
})
export class CardComponent {
  plano = {
    info: {
      tipo: 'simples',
      preco: 100,
    },
  };
}
