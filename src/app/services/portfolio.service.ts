import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Portfolio } from '../model/portfolio';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http: HttpClient) { }

  getPortfolio () { 
    return this.http.get<any>('https://sheltered-cliffs-34052.herokuapp.com/api/portfolio').toPromise();
  }

  createPortfolio (portfolioName: string) { 
    return this.http.post<any>('https://sheltered-cliffs-34052.herokuapp.com/api/portfolio',
        {name: portfolioName}).toPromise();
  }

  editPortfolio (portfolio: Portfolio) { 
    return this.http.put<any>('https://sheltered-cliffs-34052.herokuapp.com/api/portfolio/' + 
        portfolio.id, {name: portfolio.name} ).toPromise();
  }

  deletePortfolio (id: number) { 
    return this.http.delete<any>('https://sheltered-cliffs-34052.herokuapp.com/api/portfolio/' + 
        id).toPromise();
  }
}
