import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConverter'
})
export class CurrencyConverterPipe implements PipeTransform {
  private exchangeRates: { [key: string]: number } = {
    USD: 1,  // 1 USD to USD (base currency)
    EUR: 0.85, // Exchange rate from USD to EUR
    INR: 74.85, // Exchange rate from USD to INR
  };

  transform(value: number, currency: string): number {
    if (currency === 'USD') {
      return value; // No conversion needed for USD
    } else if (this.exchangeRates.hasOwnProperty(currency)) {
      return value * this.exchangeRates[currency];
    } else {
      console.error('Invalid currency:', currency);
      return value;
    }
  }
}
