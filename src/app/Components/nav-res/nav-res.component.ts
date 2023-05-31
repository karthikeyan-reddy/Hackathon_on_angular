import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { RestaurantService } from 'src/app/Models/restaurant.service';
@Component({
  selector: 'app-nav-res',
  templateUrl: './nav-res.component.html',
  styleUrls: ['./nav-res.component.css']
})
export class NavResComponent implements OnInit {
  count : number =0;
  title : string = "MkreddyRestraurent app on Angular";

  constructor(private service : RestaurantService) {
  }
  ngOnInit(): void {
  }
  
}
