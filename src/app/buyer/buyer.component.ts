import { Component, OnInit } from '@angular/core';
import { IPropertyDetails } from 'src/shared/models/propertyDetails';
import { PropertyService } from 'src/shared/services/property.service';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.scss']
})
export class BuyerComponent implements OnInit {

  constructor(private propertyService: PropertyService) { }

  propertyData: IPropertyDetails[] = [];

  ngOnInit(): void {
    this.getPropertyData();
  }

  getPropertyData(): void {
    this.propertyService.getProperty().subscribe({
      next: (data) => {
        this.propertyData = data;
      },
      
      error: (err) => console.log(err)
    });
  }
}