import { CurrencyPipe, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { YearInvestment } from './show-investment.module';

@Component({
  selector: 'app-show-investment',
  standalone: true,
  imports: [NgFor, CurrencyPipe],
  templateUrl: './show-investment.component.html',
  styleUrl: './show-investment.component.css',
})
export class ShowInvestmentComponent {
  @Input() allYear: YearInvestment[] = [];
}