import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';

const routes: Routes = [
  {path:'',redirectTo:'hotel',pathMatch:'full'},
  {path:'cart' , component:CheckoutComponent},
  {path:'hotel', component:HomeComponent},
  {path:'About', component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
