import { Component } from '@angular/core';
import { DogBreedService } from './dog-breed.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dog-breed-explorer';
  searchTerm: string = '';
  breedDetails: any; // Add breedDetails property
  errorMessage: string = ''; // Add errorMessage property

  constructor(private dogBreedService: DogBreedService) {}

  searchBreed() {
    this.dogBreedService.getBreedById(this.searchTerm)
      .subscribe(
        response => {
          this.breedDetails = response[0]?.breeds[0];
          this.errorMessage = '';
        },
        error => {
          this.breedDetails = null;
          this.errorMessage = 'Breed not found. Please try again.';
        }
      );
      }
    }
