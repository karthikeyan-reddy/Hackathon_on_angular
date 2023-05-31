import { Component, OnInit } from "@angular/core";
import { Restaurant } from "src/app/Models/restaurant";
import { RestaurantService } from "src/app/Models/restaurant.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  menuitems: Restaurant[] = [];
  number :number = 0;
  constructor(private restroService:RestaurantService ) {}

  ngOnInit() {

    this.restroService.getAllMenu().subscribe((data : Restaurant[]) => {

      this.menuitems = data;

    });

  }
 Add(items : Restaurant)
  {
    alert(items.itemName+" Added");
    this.number = this.number+1;
    this.restroService.addToCheckout(items);
  }
}