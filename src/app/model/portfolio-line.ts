export class PortfolioLine {
  public id:number = 0;
  public amount:number;
  public portfolioUrl:string;
  public currencyUrl:string;
  public acronym:string;

  constructor(
    amount:number,
    currencyUrl:string,
    acronym?: string,
    portfolioUrl?:string,
    id?:number ) {
      if(id) {
        this.id = id;
      } else {
        this.id = 0;
      }
      if(portfolioUrl) {
        this.portfolioUrl = portfolioUrl;
      } else {
        this.portfolioUrl = '';
      }
      if(acronym) {
        this.acronym = acronym;
      } else {
        this.acronym = '';
      }
      this.amount = amount;
      this.currencyUrl = currencyUrl;
  }
  
}
