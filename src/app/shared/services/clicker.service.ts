import { Injectable } from '@angular/core';
import { CoinService } from './coin.service';
import { BehaviorSubject, fromEvent } from 'rxjs';
import BigNumber from 'bignumber.js';

@Injectable({
  providedIn: 'root'
})
export class ClickerService {
  private perClickerSubject = new BehaviorSubject<BigNumber>(BigNumber(1));
  perClicker$ = this.perClickerSubject.asObservable();

  constructor(
    private coinService: CoinService
  ) { }

  click(){
    this.coinService.addCoins(this.perClickerSubject.value);
  }
}
