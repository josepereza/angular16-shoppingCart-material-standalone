import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/interfaces/product';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [CommonModule,MatButtonModule,MatCardModule],
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit{
  products:Product[]=[]
    productService=inject(ProductService)
    cartService=inject(CartService)
  
  ngOnInit(): void {
    this.productService.getAll().subscribe(data=>{
      this.products=data
    })
  }
addProductCarrito(item:Product){
this.cartService.addProductoCarrito(item)

}
}
