import { Injectable, Injector } from "@angular/core";
import { BaseService } from "../base.service";
import { HttpClient } from "@angular/common/http";
import { ICity } from "../../models/city.model";

@Injectable()
export class CitiesEndpoint extends BaseService {

    private _citiesURL = "cities";

    constructor(private _httpClient: HttpClient, private _injector: Injector) {
        super(_httpClient, _injector);
    }

    get() {
        return this._httpClient.get<ICity[]>(this.getBaseUrl() + this._citiesURL, this.getRequestHeaders());
    }

    delete(city: ICity) {
        return this._httpClient.delete(this.getBaseUrl() + this._citiesURL + "/delete-city/" + city.id, this.getRequestHeaders());
    }
}