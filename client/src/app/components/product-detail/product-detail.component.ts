import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit {

  productId: number = 0;
  product: any;

  products = [
    { id: 1, name: 'Диваны', image: '/assets/product-detail-1.jpg', description: 'Описание для диванов' },
    // { id: 1, name: 'Диваны', image: '/assets/catalog-1.jpg', description: 'Описание для диванов' },
    // { id: 2, name: 'Лампы', image: '/assets/catalog-2.jpg', description: 'Описание для ламп' }
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = +params['id'];
      this.product = this.products.find(p => p.id === this.productId);
    });
  }
}
