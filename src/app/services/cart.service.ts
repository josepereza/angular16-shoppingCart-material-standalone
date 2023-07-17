import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
carrito:boolean=false;
cartProducts:Product[]=[]
private products$:BehaviorSubject<Product[]>=new BehaviorSubject<Product[]>([])
  constructor() { }

  get products(){
    return this.products$.asObservable()
  }
 
  cambioSide(){
    console.log('cartService')
    this.carrito=!this.carrito
  }

  addProductoCarrito(product:Product){
 this.cartProducts.push(product)
 console.log('carrito',this.cartProducts)
 this.products$.next(this.cartProducts)
  }
}
