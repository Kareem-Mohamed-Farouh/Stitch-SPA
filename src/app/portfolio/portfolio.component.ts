import { Component, ElementRef } from '@angular/core';
import { Interface } from 'readline';
// interface Iproduct{
//   img: string;
//   price: number;
//   namep: string;
//   size: string;
// }
@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  ishiden: boolean = true;
  hideModel(CURtARGET: EventTarget | null, elref: HTMLImageElement): void {
    if (CURtARGET == elref) {
      return;
    } else {
      this.ishiden = true;
    }
  }
  currentsrc: string = '';
  imgsrc: string[] = [
    '/Pink-Lemonade-Main-480x638.webp',

    '/Designed-White-4.jpg',
    '/Designed-White-1.jpg',
    '/Designed-White-4.jpg',
    '/Designed-White-3.jpg',
    '/Designed-White-4.jpg',
    '/Designed-White-1.jpg',
    '/Designed-White-2.jpg',
    '/Designed-White-4.jpg',
  ];
}
