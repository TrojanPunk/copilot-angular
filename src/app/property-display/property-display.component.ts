import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IPropertyDetails } from 'src/shared/models/propertyDetails';
import { PropertyService } from 'src/shared/services/property.service';

@Component({
  selector: 'app-property-display',
  templateUrl: './property-display.component.html',
  styleUrls: ['./property-display.component.scss']
})
export class PropertyDisplayComponent implements OnInit {
  propertyId = '';
  propertyData!: IPropertyDetails;

  constructor(private propertyService: PropertyService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProperty();
  }

  getProperty(): void {
    this.getIdFromParams();

    this.propertyService.getPropertyById(this.propertyId).subscribe({
      next: data => {
        console.log(data);
        this.propertyData = data;
      }
    });
  }

  getIdFromParams(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.propertyId = params.get('id') || '';
    });
  }
}
