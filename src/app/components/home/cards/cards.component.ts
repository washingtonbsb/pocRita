import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
  @Input() image: string = '';
  @Input() description: string = '';
  @Input() professional: string = '';

  constructor() {}

  ngOnInit() {}
}
