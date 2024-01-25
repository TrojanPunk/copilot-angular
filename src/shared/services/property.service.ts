import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPropertyDetails } from '../models/propertyDetails';
import { API_GET_PROPERTY_ID_URL, API_GET_PROPERTY_URL } from '../constant';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private http: HttpClient) { }

  getProperty(): Observable<IPropertyDetails[]> {
    return this.http.get<IPropertyDetails[]>(API_GET_PROPERTY_URL);
  }

  getPropertyById(id: string): Observable<IPropertyDetails> {
    return this.http.get<IPropertyDetails>(`${API_GET_PROPERTY_ID_URL}/${id}`);
  }
}