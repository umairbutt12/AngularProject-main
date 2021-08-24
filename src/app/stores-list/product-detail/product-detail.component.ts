import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/shared/product';
import { StoreServiceService } from 'src/app/shared/store-service.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product!: Product;
  constructor(private storeService: StoreServiceService,private router: Router) { }

  ngOnInit() {
    this.storeService.fetchProduct().subscribe((res: Product) => {
      debugger
      this.product = res;
    });
  }

}
