import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Currency } from '../model/currency';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) { }

  getCurrencyList () { 
    return this.http.get<any>('https://sheltered-cliffs-34052.herokuapp.com/api/currency').toPromise();
  }

  createCurrency (currency: Currency) { 
    return this.http.post<any>('https://sheltered-cliffs-34052.herokuapp.com/api/currency', {
          acronym: currency.acronym,
          name: currency.name
        }).toPromise();
  }

  editCurrency (currency: Currency) { 
    return this.http.put<any>('https://sheltered-cliffs-34052.herokuapp.com/api/currency/' + 
        currency.id, {
          acronym: currency.acronym,
          name: currency.name
        }).toPromise();
  }

  deleteCurrency (id: number) { 
    return this.http.delete<any>('https://sheltered-cliffs-34052.herokuapp.com/api/currency/' + 
        id).toPromise();
  }
}
