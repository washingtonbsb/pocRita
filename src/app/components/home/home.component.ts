import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  dataUser = [
    {
      professionalType: 'Front-End',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      image: '../../../../assets/img/frontend.jpg',
    },
    {
      professionalType: 'Mobile',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      image: '../../../../assets/img/mobile.jpg',
    },
    {
      professionalType: 'Back-End',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      image: '../../../../assets/img/backend.jpg',
    },
  ];

  constructor() {}
}
