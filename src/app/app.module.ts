import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Services
import { CurrencyService } from './services/currency.service';
import { PortfolioService } from './services/portfolio.service';
import { PortfolioLinesService } from './services/portfolio-lines.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { ComponentsModule } from './components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { PortfolioLinesListComponent } from './pages/portfolio-lines-list/portfolio-lines-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PortfolioLinesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule
  ],
  providers: [
    CurrencyService,
    PortfolioService,
    PortfolioLinesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
