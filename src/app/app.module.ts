import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; // Import ReactiveFormsModule and FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from '../shared/components/layout/layout.component';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignupComponent } from './signup/signup.component';
import { BuyerComponent } from './buyer/buyer.component';
import { SellerComponent } from './seller/seller.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'src/shared/material.module';
import { CardComponent } from '../shared/components/card/card.component';
import { PropertyDisplayComponent } from './property-display/property-display.component';
import { FilterDialogComponent } from './filter-dialog/filter-dialog.component';
import { FeelingLuckyDialogComponent } from './feeling-lucky-dialog/feeling-lucky-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavbarComponent,
    LandingPageComponent,
    SignupComponent,
    BuyerComponent,
    SellerComponent,
    CardComponent,
    PropertyDisplayComponent,
    FilterDialogComponent,
    FeelingLuckyDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule, // Add ReactiveFormsModule
    FormsModule, 
    BrowserAnimationsModule, // Add FormsModule
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
