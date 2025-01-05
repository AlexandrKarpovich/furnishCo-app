import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss'
})
export class CatalogComponent implements OnInit {

  products = [
    { id: 1, name: 'Диваны', image: '/assets/catalog-1.jpg' },
    { id: 2, name: 'Лампы', image: '/assets/catalog-2.jpg' },
    { id: 3, name: 'Торшеры', image: '/assets/catalog-3.jpg' },
    { id: 4, name: 'Кресла', image: '/assets/catalog-4.jpg' },
    { id: 5, name: 'Декор', image: '/assets/catalog-5.jpg' },
    { id: 6, name: 'Кровати', image: '/assets/catalog-6.jpg' },
    { id: 7, name: 'Стулья', image: '/assets/catalog-7.jpg' },
    { id: 8, name: 'Шкафы', image: '/assets/catalog-8.jpg' },
    { id: 9, name: 'Цветы', image: '/assets/catalog-9.jpg' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
