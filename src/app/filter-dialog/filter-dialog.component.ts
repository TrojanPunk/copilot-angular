import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription, filter } from 'rxjs';
import { PropertyService } from 'src/shared/services/property.service';

@Component({
  selector: 'app-filter-dialog',
  templateUrl: './filter-dialog.component.html',
  styleUrls: ['./filter-dialog.component.scss']
})
export class FilterDialogComponent implements OnInit {
  filterForm: FormGroup = this.fb.group({});
  selectedCategory = 'residential';
  minPrice = 4000;
  maxPrice = 5000000;
  selectedArea = 200;
  subscriptions: Subscription[] = [];

  constructor(
    public dialogRef: MatDialogRef<FilterDialogComponent>,
    private dialog: MatDialog,
    private propertyService: PropertyService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.filterForm = this.fb.group({
      price: [0],
      features: [{ bhk: [0], baths: [0], parking: [0] }],
      seller: [{ sellerName: [''], sellerEmail: [''], sellerMobile: [0] }],
      location: [{ city: [''], address: [''], state: [''], pincode: [0] }],
      ratings: [0],
      area: [0],
      city: [''],
      category: [''],
      minPrice: [4000],
      maxPrice: [5000000]
    });

    const formSub = this.filterForm.valueChanges.subscribe(formValue => {
      console.log(formValue.minPrice, formValue.maxPrice);
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }


  selectCategory(category: string): void {
    this.selectedCategory = category;
  }

  updatePriceMin(value: number): void {
    this.minPrice = value;
  }

  updatePriceMax(value: number): void {
    this.maxPrice = value;
  }

  updateArea(value: number): void {
    this.selectedArea = value;
  }

  formatLabel(value: number): string {
    if (value >= 1) {
      return Math.round(value / 1) + 'ft.²';
    }

    return `${value}`;
  }

  filterData(): void {
    const filterParams = this.filterForm.getRawValue();

    this.propertyService.getFilteredData(filterParams.category, filterParams.area, filterParams.minPrice, filterParams.maxPrice).subscribe(
      {
        next: (filteredData) => {
          console.log(filteredData);
          this.propertyService.filteredPropertyDataBS.next(filteredData);
        }
      });
  }
}