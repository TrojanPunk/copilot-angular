import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignupComponent } from './signup/signup.component';
import { BuyerComponent } from './buyer/buyer.component';
import { SellerComponent } from './seller/seller.component';
import { PropertyDisplayComponent } from './property-display/property-display.component'; // Import the PropertyDisplayComponent
const routes: Routes = [
  { path: "", component: LandingPageComponent },
  { path: "signup", component: SignupComponent },
  { path: "buyer", component: BuyerComponent },
  { path: "seller", component: SellerComponent },
  { path: "property/:id", component: PropertyDisplayComponent } // Add this line
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
