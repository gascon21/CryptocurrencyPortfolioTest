import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Portfolio } from '../model/portfolio';
import { PortfolioLine } from '../model/portfolio-line';

@Injectable({
  providedIn: 'root'
})
export class PortfolioLinesService {

  constructor(private http: HttpClient) { }

  public getPortfolioLines (id: number) { 
    return this.http.get<any>('https://sheltered-cliffs-34052.herokuapp.com/api/portfolio/' + id + 
        '/lines').toPromise();
  }

  public getCurrency (currencyUrl: string) {
    return this.http.get<any>(currencyUrl).toPromise();
  }

  public createPortfolioLines (portfolioLine: PortfolioLine) { 
    return this.http.post<any>('https://sheltered-cliffs-34052.herokuapp.com/api/portfolioline', {
      amount: portfolioLine.amount,
      currency: portfolioLine.currencyUrl,
      portfolio: portfolioLine.portfolioUrl
    }).toPromise();
  }

  public editPortfolioLines (portfolioLine: PortfolioLine) { 
    return this.http.put<any>('https://sheltered-cliffs-34052.herokuapp.com/api/portfolioline/' + 
        portfolioLine.id, {
          amount: portfolioLine.amount,
          currency: portfolioLine.currencyUrl,
          portfolio: portfolioLine.portfolioUrl
        } ).toPromise();
  }
  
  public deletePortfolioLines (id: number) { 
    return this.http.delete<any>('https://sheltered-cliffs-34052.herokuapp.com/api/portfolioline/' + 
        id).toPromise();
  }
}
