import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import BigNumber from "bignumber.js";

@Injectable({
  providedIn: 'root'
})
export class CoinService {

  private coinsSubject = new BehaviorSubject<BigNumber>(BigNumber(0));
  coins$ = this.coinsSubject.asObservable();

  constructor() { }

    // 获取当前值
    get coins(): BigNumber {
      return this.coinsSubject.value;
    }
  
    // 更新 coins 的值
    set coins(value: BigNumber) {
      this.coinsSubject.next(value);
    }
  
    // 增加 coins
    addCoins(amount: BigNumber): void {
      console.log('add coins', amount.toString());
      
      this.coinsSubject.next(this.coinsSubject.value.plus(amount));
    }
  
    // 减少 coins
    deductCoins(amount: BigNumber): void {
      if(this.coinsSubject.value.isLessThan(amount)) {
        console.warn('Not enough coins to deduct');
        return;
      }
      this.coinsSubject.next(this.coinsSubject.value.minus(amount));
    }
}
