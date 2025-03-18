import { Injectable } from '@angular/core';
import { ClickerService } from './clicker.service';
import { CoinService } from './coin.service';
import { TimerService } from './timer.service';
import { GoodsService } from './goods.service';
import { Observable } from 'rxjs';
import BigNumber from 'bignumber.js';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  coins$!: Observable<BigNumber>;

  constructor(
    private timerService: TimerService,
    private coinService: CoinService,
    private clickerService: ClickerService,
    private goodsService: GoodsService
  ) { 
    this.init();
    this.coins$ = this.coinService.coins$;

  }

  init(){
    this.timerService.timer$.subscribe((t) => {
      console.log('main:', t);
      
      this.coinService.addCoins(this.goodsService.goodsEarnedPerSecond);
    });
  }
}
