import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  item: any = {};
  loading: boolean = false;
  ngOnInit(): void {
    this.getProduct();
  }
  constructor(private route: ActivatedRoute, private productservice: ProductService) {

  }
  getProduct() {
    this.loading = true;
    this.route.params.subscribe(result => {

      this.productservice.getProductDetail(result["id"]).subscribe(result => {
        console.log(result);
        this.item = result;
        this.loading = false;
      },

        error => {
          this.loading = false;
          alert(error)
        });
    })
  }

}
