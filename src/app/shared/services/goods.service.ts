import { Injectable } from '@angular/core';
import BigNumber from 'bignumber.js';
import { BehaviorSubject, combineLatest, combineLatestAll, map, mergeAll, Observable, reduce } from 'rxjs';
import { Goods, GoodsFour, GoodsOne, GoodsThree, GoodsTwo, IGoods } from '../models/goods.model';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {
  private goodsEarnedPerSecondSubject = new BehaviorSubject<BigNumber>(BigNumber(0));

  goodsEarnedPerSecond$ = this.goodsEarnedPerSecondSubject.asObservable();
  goods: IGoods[] = [];
  constructor() { 
    console.log('init goods');
    
    this.goods = [
      new GoodsOne(),
      new GoodsTwo(),
      new GoodsThree(),
      new GoodsFour(),
    ];
    console.log('goods', this.goods);
    
    const a = combineLatest(this.goods.map(good =>
    {
      good.addAccount(BigNumber(1));
      console.log('good:', good.value.toString());
      
      return good.perEarn$;
    }
  )).pipe(
      // mergeAll(),
      map(arr => arr.reduce((a,b) => a.plus(b))),
      // reduce((acc, value) => acc.plus(value), BigNumber(0)),
      map(value => {
        this.goodsEarnedPerSecondSubject.next(value);
        return value;
      })
    ).subscribe(() => {
      console.log('goods');
      
    });
  }

  get goodsEarnedPerSecond(): BigNumber {
    return this.goodsEarnedPerSecondSubject.value;
  }

  set goodsEarnedPerSecond(value: BigNumber) {
    this.goodsEarnedPerSecondSubject.next(value);
  }
}
