import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IPropertyDetails } from 'src/shared/models/propertyDetails';
import { PropertyService } from 'src/shared/services/property.service';
import { FilterDialogComponent } from '../filter-dialog/filter-dialog.component';
import { ICityData } from 'src/shared/models/cityData';
import { Form, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.scss']
})
export class BuyerComponent implements OnInit {

  constructor(private propertyService: PropertyService, private dialog: MatDialog, private fb: FormBuilder) { }

  propertyData: IPropertyDetails[] = [];
  filteredProperties: IPropertyDetails[] = [];
  cities: ICityData[] = [];
  cityNames: string[] = [];
  citySelect: FormGroup = this.fb.group({});
  searchField: FormGroup = this.fb.group({});

  ngOnInit(): void {
    this.citySelect = this.fb.group({
      searchPropertyByCity: ['']
    });

    this.searchField = this.fb.group({
      searching: ['']
    });

    this.searchField.valueChanges.subscribe(value => {
      console.log(value);
      this.searchingProperty(value.searching.toLowerCase() ?? '')}
    )

    this.getPropertyData();
    this.assignData();
  }


  getPropertyData(): void {
    this.propertyService.getProperty().subscribe({
      next: (data) => {
        this.propertyData = data;
        this.propertyService.filteredPropertyDataBS.next(this.propertyData);
        this.filteredProperties = this.propertyData;

        this.propertyData.map(property => {
          if (!this.cityNames.includes(property.location.city) && property.location.city !== '') {
            this.cityNames.push(property.location.city);

            switch (property.location.city) {
              case 'Hyderabad':
                this.cities.push({ 'icon': 'assets/images/charminar.png', 'city': property.location.city });
                break;

              case 'Kolkata':
                this.cities.push({ 'icon': 'assets/images/howrah.png', 'city': property.location.city })
                break;

              case 'Mumbai':
                this.cities.push({ 'icon': 'assets/images/gateway.png', 'city': property.location.city })
                break;

              case 'Delhi':
                this.cities.push({ 'icon': 'assets/images/india-gate.png', 'city': property.location.city })
                break;

              case 'Lucknow':
                this.cities.push({ 'icon': 'assets/images/mosque.png', 'city': property.location.city })
                break;

              case 'Bangalore':
                this.cities.push({ 'icon': 'assets/images/palace.png', 'city': property.location.city })
                break;

              case 'Chennai':
                this.cities.push({ 'icon': 'assets/images/akshardham.png', 'city': property.location.city })
                break;

              default:
                this.cities.push({ 'icon': 'assets/images/howrah.png', 'city': property.location.city })
                break;
            }
          }
        });

        console.log(this.cityNames);
      },

      error: (err) => console.log(err)
    });
  }

  cityFilter(event: any): void {
    console.log(event.value);
    this.filteredProperties = this.propertyData.filter(property => property.location.city === event.value);
  }

  filterProperties(category: string): void {
    this.filteredProperties = this.propertyData.filter(property => property.category === category);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(FilterDialogComponent, {
      width: '70%',
      height: '90%',
      data: { name: 'John Doe' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  assignData(): void {
    this.propertyService.filteredPropertyDataBS.subscribe({
      next: (data) => {
        this.filteredProperties = data;
      }
    });
  }

  searchingProperty(search: string): void {
    this.filteredProperties = this.propertyData.filter((property: IPropertyDetails) => {
      const startsWithSearch = property.propertyName.toLowerCase().startsWith(search);
      return startsWithSearch;
    });
  }
}