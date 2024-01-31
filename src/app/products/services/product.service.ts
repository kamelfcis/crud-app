import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  item:any
  constructor(private http: HttpClient) {



  }
  getAllProducts() {
    return this.http.get(environment.baseApiUrl + 'products');
  }
  getAllCategories() {
    return this.http.get(environment.baseApiUrl + 'products/categories');
  }
  getProductByCategory(keyword:any) {
    return this.http.get(environment.baseApiUrl + 'products/category/'+keyword);
  }
  getProductDetail(id:any){
  return  this.http.get(environment.baseApiUrl + "products/"+id);
  }
}
