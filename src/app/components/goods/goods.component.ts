import { Component, Input } from '@angular/core';
import { IGoods } from '../../shared/models/goods.model';
import { NgClass } from '@angular/common';
import { CoinService } from '../../shared/services/coin.service';

@Component({
  selector: 'app-goods',
  imports: [NgClass],
  templateUrl: './goods.component.html',
  styleUrl: './goods.component.css'
})
export class GoodsComponent {
  @Input({
    required: true
  }) good!: IGoods;

  @Input() notAvailable = true;
  constructor(
    private coinService: CoinService,
  ){}

  add(cnt = 1){
    const cost = this.good.costByAccount(cnt);
    const success = this.coinService.deductCoins(cost);
    if(success){
      this.good.addAccount(cnt);
    }
  }
}
