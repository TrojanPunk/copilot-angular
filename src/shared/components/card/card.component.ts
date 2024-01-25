import { Component, Input } from '@angular/core';
import { IPropertyDetails } from 'src/shared/models/propertyDetails';
import { PropertyService } from 'src/shared/services/property.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() id: string = '';
  @Input() area: number = 0;
  @Input() ratings: number = 0;
  @Input() propertyName: string = '';
  @Input() price: number = 0;
  @Input() images: string[] = [];
  @Input() category: string = '';
  @Input() features: { bhk: number, baths: number, parking: number } = { bhk: 0, baths: 0, parking: 0 };
  @Input() seller: { sellerName: string, sellerMobile: number, sellerEmail: string } = { sellerName: '', sellerMobile: 0, sellerEmail: '' };
  @Input() location: { city: string, pincode: number, address: string, state: string } = { city: '', pincode: 0, address: '', state: '' };

  constructor(private propertyService: PropertyService) { }
}