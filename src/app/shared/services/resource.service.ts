import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ZERO } from '../../utils/bigNumber';
import BigNumber from 'bignumber.js';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  private coinSubject = new BehaviorSubject(ZERO);
  public coin$ = this.coinSubject.asObservable();

  constructor() { }

  get coin(){
    return this.coinSubject.value;
  }

  set coins(value: BigNumber | number) {
    this.coinSubject.next(new BigNumber(value));
  }


  // 增加 coins
  addCoins(amount: BigNumber): void {
    console.log('add coins', amount.toString());
    
    this.coinSubject.next(this.coinSubject.value.plus(amount));
  }

  // 减少 coins
  deductCoins(amount: BigNumber): void {
    if(this.coinSubject.value.isLessThan(amount)) {
      console.warn('Not enough coins to deduct');
      return;
    }
    this.coinSubject.next(this.coinSubject.value.minus(amount));
  }

}
