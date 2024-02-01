import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { IPropertyDetails } from '../models/propertyDetails';
import { API_GET_FILTERED_DATA_URL, API_GET_PROPERTY_ID_URL, API_GET_PROPERTY_URL, API_PROPERTY_POST_DATA_URL } from '../constant';
import { IFilterData } from '../models/filterData';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  filteredPropertyDataBS: BehaviorSubject<IPropertyDetails[]> = new BehaviorSubject<IPropertyDetails[]>([]);

  constructor(private http: HttpClient) { }

  getProperty(): Observable<IPropertyDetails[]> {
    return this.http.get<IPropertyDetails[]>(API_GET_PROPERTY_URL);
  }

  getPropertyById(id: string): Observable<IPropertyDetails> {
    return this.http.get<IPropertyDetails>(`${API_GET_PROPERTY_ID_URL}/${id}`);
  }

  postProperty(propertyData: IPropertyDetails): Observable<IPropertyDetails> {
    return this.http.post<IPropertyDetails>(API_PROPERTY_POST_DATA_URL, propertyData);
  }


  getFilteredData(category: string, area: number, minPrice: number, maxPrice: number): Observable<IPropertyDetails[]> {
    const filter = `category=${category}&area=${area}&minPrice=${minPrice}&maxPrice=${maxPrice}`;
    return this.http.get<IPropertyDetails[]>(`${API_GET_FILTERED_DATA_URL}?${filter}`);
  }
}