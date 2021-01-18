import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { PortfolioLinesListComponent } from './pages/portfolio-lines-list/portfolio-lines-list.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'portfolio-lines',
    component: PortfolioLinesListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
