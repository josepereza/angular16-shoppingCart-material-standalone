import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from 'src/app/services/cart.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-total',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent {
  total:number=0
cartService=inject(CartService)
constructor(){
  this.cartService.products
  .pipe(map(products=>products.reduce((prev, curr )=>prev+curr.price,0)))

  .subscribe(data=>{
    this.total=data
  })
}
}
