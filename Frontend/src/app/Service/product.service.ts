import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  constructor(private http:HttpClient) { }

  saveProductDetails(product:any){
    return this.http.post("http://localhost:4000/addProduct", product);
  }
}



// shreyasam
// a8xLshYOd4zdoJRB