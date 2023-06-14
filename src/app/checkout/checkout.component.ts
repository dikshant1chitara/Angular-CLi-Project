import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  totalPrice: number = 105;
  selectedCurrency: string = 'USD';
  

  ngOnInit() {
    // Trigger the transition after a short delay
    setTimeout(() => {
      document.querySelector('.container')?.classList.add('show');
    }, 100);
  }

  calculateConvertedPrice(): number {
    return this.totalPrice;
  }
}
