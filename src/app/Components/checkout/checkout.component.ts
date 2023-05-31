import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from 'src/app/Models/restaurant';
import { RestaurantService } from 'src/app/Models/restaurant.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  items : Restaurant[] = [];
  price : number = 0;
  Gst : number = 0;
  total : number = 0;

  constructor(private service : RestaurantService,private route:Router,private activatedRoute:ActivatedRoute) {
    
  }
  ngOnInit(): void {
    this.items = this.service.GetCheckout() ; 
    for (const item of this.items) {
      this.price += item.price;
      this.Gst += (item.price * 0.18) ; 
      this.total +=(this.price+this.Gst);
    }
  }

}
