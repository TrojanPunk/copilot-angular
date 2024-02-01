import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IPropertyDetails } from 'src/shared/models/propertyDetails';
import { PropertyService } from 'src/shared/services/property.service';
@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.scss']
})
export class SellerComponent {
  addPropertyForm: FormGroup = this.fb.group({});

  sellPropertyData: IPropertyDetails = {
    id: '',
    ratings: 0,
    images: [],
    propertyName: '',
    price: 0,
    area: 0,
    category: '',
    features: { 
      bhk: 0,
      baths: 0,
      parking: 0
    },
    location: { 
      city: '',
      pincode: 0,
      address: '',
      state: '',
    },
    seller: {
      sellerName: '',
      sellerMobile: 0,
      sellerEmail: '',
    },
    maxPrice  : 0,
    minPrice: 0,
  };

  constructor(private fb: FormBuilder, private propertyService: PropertyService) { }

  ngOnInit(): void {
    this.addPropertyForm = this.fb.group({
      propertyName: [''],
      price: [''],
      area: [0],
      category: [''],
      bhk: [0],
      baths: [0],
      parking: [0],
      city: [''],
      pincode: [0],
      address: [''],
      state: [''],
      sellerName: [''],
      sellerMobile: [0],
      sellerEmail: [''],
    });
  }

  disableInputs(event: any) {
    const category = event.value;
    console.log(category);

    if (category === 'commercial') {
      this.addPropertyForm.controls['baths'].disable();
      this.addPropertyForm.controls['parking'].disable();
      this.addPropertyForm.controls['bhk'].disable();
    } else {
      this.addPropertyForm.controls['baths'].enable();
      this.addPropertyForm.controls['parking'].enable();
      this.addPropertyForm.controls['bhk'].enable();
    }
  }

  handleImageInput(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64String = reader.result?.toString().split(',')[1];
      console.log(base64String);
      
      if (base64String) {
        this.sellPropertyData.images.push(`data:image/jpeg;base64,${base64String}`);
      }
    };

    reader.readAsDataURL(file);
  }

  postPropertyData() {
    const rawData = this.addPropertyForm.getRawValue();
    this.sellPropertyData = {
      ...this.sellPropertyData,
      ...rawData
    };
    this.propertyService.postProperty(this.sellPropertyData).subscribe({
      next: (data) => {
        console.log(data);
      }
    });
  }
}
