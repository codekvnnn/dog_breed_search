import { Component } from '@angular/core';
import { DogBreedService } from '../dog-breed.service';


@Component({
  selector: 'app-breed-details',
  templateUrl: './breed-details.component.html',
  styleUrls: ['./breed-details.component.css']
})
export class BreedDetailsComponent {
  searchTerm: string = '';
  breedDetails: any;
  errorMessage: string = '';

  constructor(private dogBreedService: DogBreedService) {}

  searchBreed() {
    this.errorMessage = '';
    if (this.searchTerm) {
      this.dogBreedService.getBreedById(this.searchTerm).subscribe(
        (response: any) => {
          if (response.length > 0) {
            this.breedDetails = {
              breed: response[0].breeds[0].name,
              bredFor: response[0].breeds[0].bred_for,
              breedGroup: response[0].breeds[0].breed_group,
              origin: response[0].breeds[0].origin,
              image: response[0].url
            };
          } else {
            this.errorMessage = 'Breed not found';
            this.breedDetails = null;
          }
        },
        (error: any) => {
          this.errorMessage = 'Error occurred while fetching breed details';
          this.breedDetails = null;
        }
      );
    }
  }
}
