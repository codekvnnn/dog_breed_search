import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogBreedService {
  private baseUrl = 'https://api.thedogapi.com/v1';
  private apiKey = 'live_ZbAjhjeyEVlyLRoRH3qkUAxOGD7ac3QzmFn5jkXRlBWEJVzD8KEJX2iM0wPABWVb'; // Replace with actual API key

  constructor(private http: HttpClient) { }

  getAllBreeds(): Observable<any> {
    const url = `${this.baseUrl}/breeds`;
    return this.http.get(url, {
      headers: {
        'x-api-key': this.apiKey
      }
    });
  }

  getBreedById(breedId: string): Observable<any> {
    const url = `${this.baseUrl}/images/search?breed_ids=${breedId}`;
    return this.http.get(url, {
      headers: {
        'x-api-key': this.apiKey
      }
    });
  }
}

