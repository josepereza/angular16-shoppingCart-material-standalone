import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/interfaces/product';
import {MatListModule} from '@angular/material/list';
import { TotalComponent } from '../total/total.component';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, MatListModule, TotalComponent],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products:Product[]=[]
cartService=inject(CartService)

  
ngOnInit(): void {
  this.cartService.products.subscribe(data=>{
    this.products=data
  })
}

}
