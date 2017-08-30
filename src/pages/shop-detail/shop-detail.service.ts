import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { ShopDetailModel } from "./shop-detail.model";



@Injectable()
export class ShopDetailService {
    constructor(public http: Http) { }

    getData(): Promise<ShopDetailModel> {
        return this.http.get('./assets/example_data/shopdetail.json')
            .toPromise()
            .then(response => response.json() as ShopDetailModel)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}
