import { Component, OnInit } from "@angular/core";
import { ICity } from "../../models/city.model";
import { CitiesService } from "../../services/cities/cities.service";

@Component({
    selector: 'cities-list',
    templateUrl: './cities-list.component.html',
    styleUrls: ['./cities-list.component.css']
})

export class CitiesListComponent implements OnInit {

    cities: ICity[];
    constructor(private _citiesService: CitiesService) { }

    ngOnInit(): void {
        this.getCities();
    }

    getCities() {
        this._citiesService.getCities().subscribe(cities => {
            this.cities = cities as ICity[];
        });
    }

    deleteCity(city: ICity) {
        this._citiesService.deleteCity(city).subscribe(() => {
            this.getCities(); //Would ideally refresh the list but with it being static in the backend.. this wont actually do anything asides from fetch the same data
        });
    } 
}