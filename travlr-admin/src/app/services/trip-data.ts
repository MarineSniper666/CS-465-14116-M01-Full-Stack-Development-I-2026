import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Trip {
  _id?: string;
  name: string;
  image: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class TripData {
  private http = inject(HttpClient);
  private apiBaseUrl = '/api';

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('travlr-token') || '';
    return new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  }

  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(`${this.apiBaseUrl}/trips`);
  }

  deleteTrip(id: string): Observable<any> {
    return this.http.delete(`${this.apiBaseUrl}/trips/${id}`, {
      headers: this.getAuthHeaders()
    });
  }

  addTrip(trip: Trip): Observable<Trip> {
    return this.http.post<Trip>(`${this.apiBaseUrl}/trips`, trip, {
      headers: this.getAuthHeaders()
    });
  }

  getTrip(id: string): Observable<Trip> {
    return this.http.get<Trip>(`${this.apiBaseUrl}/trips/${id}`);
  }

  updateTrip(trip: Trip): Observable<Trip> {
    return this.http.put<Trip>(
      `${this.apiBaseUrl}/trips/${trip._id}`,
      trip,
      {
        headers: this.getAuthHeaders()
      }
    );
  }
}