import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Import Forms Modules
import { NewInvestment } from './new-investment.module';


@Component({
  selector: 'app-new-investment',
  imports: [FormsModule],
  templateUrl: './new-investment.component.html',
  styleUrl: './new-investment.component.css'
})
export class NewInvestmentComponent {


  @Input({ required: true }) investmentCreated!: NewInvestment
  @Output() firstInvestment = new EventEmitter<NewInvestment>();
  investmentAmount: number = 0;
  interestRate: number = 0;

  calculateInvestment() {
    let principal = this.investmentCreated.initialInvestment;
    let rate = this.investmentCreated.annualInterestRate / 100; // Convert percentage to decimal
    let years = this.investmentCreated.numberOfYears;
    let frequency = this.investmentCreated.compoundFrequency;

    if (principal <= 0 || rate < 0 || years <= 0 || frequency <= 0) {
      console.error("Invalid input values.");
      return;
    }



    let amount = principal * Math.pow(1 + rate / frequency, frequency * years);
    this.investmentAmount = Math.floor(amount); // Round to 2 decimal places
    this.interestRate = Math.floor((amount - principal));
    this.firstInvestment.emit(this.investmentCreated)// Round to 2 decimal places
  }
}
