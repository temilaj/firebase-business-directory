import {Injectable} from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map';

import {Business} from '../Business';
import {Category} from '../Category';

@Injectable()
export class FirebaseService{
      businessess: FirebaseListObservable<Business[]>;
      categories: FirebaseListObservable<Category[]>;

        constructor(private _af: AngularFire) {
        }
        getBusinesses(){
            this.businessess = this._af.database.list('/businesses') as
            FirebaseListObservable<Business[]>;
            return this.businessess;
        }
        getCategories(){
            this.categories = this._af.database.list('/categories') as
            FirebaseListObservable<Category[]>;
            return this.categories;
        }
}