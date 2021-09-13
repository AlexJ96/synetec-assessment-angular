import { Injectable } from "@angular/core";
import { CitiesEndpoint } from "./cities-endpoint.service";
import { ICity } from "../../models/city.model";

@Injectable()
export class CitiesService {
    
    constructor(private _citiesEndpoint: CitiesEndpoint) {}

    getCities() {
        return this._citiesEndpoint.get();
    }

    deleteCity(city: ICity) {
        return this._citiesEndpoint.delete(city);
    }

}