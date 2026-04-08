import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(`${this.apiBaseUrl}/trips`);
  }

  deleteTrip(id: string): Observable<any> {
  return this.http.delete(`${this.apiBaseUrl}/trips/${id}`);
}

addTrip(trip: Trip): Observable<Trip> {
  return this.http.post<Trip>(`${this.apiBaseUrl}/trips`, trip);
}

getTrip(id: string): Observable<Trip> {
  return this.http.get<Trip>(`${this.apiBaseUrl}/trips/${id}`);
}

updateTrip(trip: Trip): Observable<Trip> {
  return this.http.put<Trip>(
    `${this.apiBaseUrl}/trips/${trip._id}`,
    trip
  );
}

}