import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
products:Product[]=[]
  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<Product[]>('https://fakestoreapi.com/products')
  }

}
