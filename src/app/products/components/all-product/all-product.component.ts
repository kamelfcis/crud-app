import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})
export class AllProductComponent implements OnInit {

  products: any[] = [];
  categories: any[] = [];
  loading: boolean = false;
  cartProducts: any = []
  constructor(private service: ProductService) {



  }
  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }
  getProducts() {
    this.loading = true;
    this.service.getAllProducts().subscribe(
      (res: any) => {
        console.log(res);
        this.products = res;
        this.loading = false;
      },
      error => {
        console.log(error);
        this.loading = false;
      }
    )
  }
  getCategories() {
    this.loading = true;
    this.service.getAllCategories().subscribe(
      (res: any) => {
        console.log(res);
        this.categories = res;
        this.loading = false;
      },
      error => {
        console.log(error);
        this.loading = false;
      }
    )
  }
  getProductsCategory(keyword: string) {
    this.loading = true;
    this.service.getProductByCategory(keyword).subscribe(

      (res: any) => {

        this.products = res;
        this.loading = false;
      }, error => {
        this.loading = false;

      }
    )
  }
  filtercategory(event: any) {
    let value = event.target.value;
    (value == "all") ? this.getProducts() : this.getProductsCategory(value);
    // if (value == 'all') {
    //   this.getProducts();
    // }
    // else {
    //   this.getProductsCategory(value);
    // }

  }
  addToCart(event: any) {
    console.log(event);
    // JSON.stringify()//send data
    //Json.parse() //recive Data

    if ("cart" in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!) //skip null error
      let exist = this.cartProducts.find((i: { item: { id: any; }; }) => i.item.id == event.item.id);
      // let exist = this.cartProducts.find((i: { id: any; }) => i.id == event.item.id);
      if (exist) {
        alert("Product already exist");
      }
      else {
        this.cartProducts.push(event);
        localStorage.setItem("cart", JSON.stringify(this.cartProducts));
      }



    }
    else {
      this.cartProducts.push(event);
      localStorage.setItem("cart", JSON.stringify(this.cartProducts));
    }

  }





}
