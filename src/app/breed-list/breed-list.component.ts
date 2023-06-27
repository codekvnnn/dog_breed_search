import { Component, OnInit } from '@angular/core';
import { DogBreedService } from '../dog-breed.service';

@Component({
  selector: 'app-breed-list',
  templateUrl: './breed-list.component.html',
  styleUrls: ['./breed-list.component.css']
})
export class BreedListComponent implements OnInit {
  breeds: any[] = [];

  constructor(private breedService: DogBreedService) { }

  ngOnInit(): void {
    this.fetchBreeds();
  }

  fetchBreeds(): void {
    this.breedService.getAllBreeds().subscribe(
      (response: any[]) => {
        this.breeds = response;
      },
      (error) => {
        console.log('Error fetching breeds:', error);
      }
    );
  }
}
