import { AfterViewInit, Component } from '@angular/core';
import { MainService } from '../../shared/services/main.service';
import { AsyncPipe } from '@angular/common';
import { LayoutComponent } from '../../components/layout/layout.component';
import { ClickerService } from '../../shared/services/clicker.service';
import { GoodsComponent } from '../../components/goods/goods.component';
import { IGoods } from '../../shared/models/goods.model';
import { GoodsService } from '../../shared/services/goods.service';
import BigNumber from 'bignumber.js';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-factory',
  imports: [AsyncPipe, LayoutComponent, GoodsComponent],
  templateUrl: './factory.component.html',
  styleUrl: './factory.component.css',
})
export class FactoryComponent implements AfterViewInit {
  coinButton!: HTMLButtonElement;
  coinText!: HTMLDivElement;
  goods: IGoods[] = [];
  coins$: Observable<BigNumber>;
  ZERO = BigNumber(0);
  constructor(
    public mainService: MainService,
    private clickerService: ClickerService,
    private goodsService: GoodsService
  ) { 
    this.goods = this.goodsService.goods;
    this.coins$ = this.mainService.coinService.coins$;
  }

  ngAfterViewInit(): void {
    this.coinButton = document.getElementById('coinButton') as HTMLButtonElement;
    this.coinText = document.getElementById('coinText') as HTMLDivElement;
    this.coinButton.addEventListener('click', () => {
      // 显示文字
      this.coinText!.classList.remove('hidden');
      this.coinText!.classList.add('coin-animation');

      // 动画结束后重置
      setTimeout(() => {
        this.coinText!.classList.remove('coin-animation');
        this.coinText!.classList.add('hidden');
      }, 1000); // 2秒后重置
    });
  }

  handleClicker(){
    this.clickerService.click();
  }

  canBy(cost: BigNumber){
    return this.mainService.canBuy(cost);
  }
}
