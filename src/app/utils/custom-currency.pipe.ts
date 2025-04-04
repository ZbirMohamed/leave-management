import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCurrency'
})
export class CustomCurrencyPipe implements PipeTransform {

  transform(value: number, currency: string): string {
    if (value == null || isNaN(value)) return '';

    switch (currency) {
      case '$':
        return (value / 10).toFixed(2) + '$';
      case '€':
        return (value / 11).toFixed(2) + '€';
      case '£':
        return (value / 12).toFixed(2) + '£';
      default:
        return value.toFixed(2) + ' ' + currency;
    }
  }

}
