import { Product } from './product';
import { Store } from './store';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class StoreServiceService {

constructor(private http: HttpClient) { }

fetchData():Observable<Store[]>{
   return  this.http.get<any>("https://mocki.io/v1/a0194b79-08c8-4881-ae45-108cc3c8827c")
   .pipe(map((response) => response.data as Store[] )
);
   }
   fetchProduct():Observable<Product>{
      return  this.http.get<any>("https://mocki.io/v1/02f8ec80-61a2-419c-8111-57ab9148c99a")
      .pipe(map((response) => response as Product )
   );
      }
}
