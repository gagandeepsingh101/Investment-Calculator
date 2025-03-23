import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewInvestmentComponent } from "./new-investment/new-investment.component";
import { ShowInvestmentComponent } from "./show-investment/show-investment.component";
import { HeaderComponent } from "./header/header.component";
import { NewInvestment } from './new-investment/new-investment.module';
import { YearInvestment } from './show-investment/show-investment.module';

@Component({
  selector: 'app-root',
  imports: [NewInvestmentComponent, ShowInvestmentComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'investment-calculator';
  newInvestment: NewInvestment = {
    initialInvestment: 1000, annualInterestRate: 0.1, numberOfYears: 1, compoundFrequency: 1
  }


  calculateInterestPerYear(investment: NewInvestment) {
    let principal = investment.initialInvestment;
    let rate = investment.annualInterestRate / 100; // Convert percentage to decimal
    let frequency = investment.compoundFrequency;
    let allYear: YearInvestment[] = [];

    let totalInterest = 0;

    for (let year = 1; year <= investment.numberOfYears; year++) {
      let previousAmount = principal;

      // Apply compounding for the year
      for (let period = 0; period < frequency; period++) {
        let interestForPeriod = principal * (rate / frequency);
        principal += interestForPeriod;
      }

      let interestThisYear = principal - previousAmount;
      totalInterest += interestThisYear;

      allYear.push({
        year,
        investment: Math.round(principal),
        interest: Math.round(interestThisYear),
        totalInterest: Math.round(totalInterest),
      });
    }

    return allYear;
  }

  getFirstInvestment(currentInvestment: NewInvestment) {
    this.newInvestment = currentInvestment;
  }


}
