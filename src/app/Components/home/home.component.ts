import { Component, OnInit } from "@angular/core";
import { Restaurant } from "src/app/Models/restaurant";
import { RestaurantService } from "src/app/Models/restaurant.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  restaurants: Restaurant[] = [];
  number :number = 0;
  constructor(private restroService:RestaurantService ) {}

  ngOnInit() {

    this.restroService.getAllMenu().subscribe((data : Restaurant[]) => {

      this.restaurants = data;

    });

  }

  addToCheckout(restaurant: any) {
    
    this.number = this.number +1;
    alert(restaurant.itemname+' Added to Checkout ');
    this.restroService.addToCheckout(restaurant);

  }
}