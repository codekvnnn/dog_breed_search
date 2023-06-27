import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreedListComponent } from './breed-list/breed-list.component';
import { BreedDetailsComponent } from './breed-details/breed-details.component';
import { DogBreedService } from './dog-breed.service'; // Import DogBreedService
import { FormsModule } from '@angular/forms'; // Import FormsModule

@NgModule({
  declarations: [
    AppComponent,
    BreedListComponent,
    BreedDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DogBreedService], // Add DogBreedService to providers
  bootstrap: [AppComponent]
})
export class AppModule { }
