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


  @Input({ required: true }) investmentCreated?: NewInvestment
  @Output() firstInvestment = new EventEmitter<NewInvestment>();
  investmentAmount: number = 1001;
  interestRate: number = 1;

  calculateInvestment() {
    let principal = this.investmentCreated?.initialInvestment || 1000;
    let rate = (this.investmentCreated?.annualInterestRate || 0.1) / 100; // Convert percentage to decimal
    let years = (this.investmentCreated?.numberOfYears || 1);
    let frequency = (this.investmentCreated?.compoundFrequency || 1);


    let amount = principal * Math.pow(1 + rate / frequency, frequency * years);
    this.investmentAmount = Math.round(amount); // Round to 2 decimal places
    this.interestRate = Math.round((amount - principal));
    this.firstInvestment.emit(this.investmentCreated)// Round to 2 decimal places
  }
}
