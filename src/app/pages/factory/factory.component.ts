import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MainService } from '../../shared/services/main.service';
import { AsyncPipe } from '@angular/common';
import { LayoutComponent } from '../../components/layout/layout.component';
import { ClickerService } from '../../shared/services/clicker.service';
import { GoodsComponent } from '../../components/goods/goods.component';
import { IGoods } from '../../shared/models/goods.model';
import { GoodsService } from '../../shared/services/goods.service';
import BigNumber from 'bignumber.js';
import { Observable } from 'rxjs';
import { FactoryManagerService } from '../../shared/services/factory-manager.service';
import * as PIXI from 'pixi.js';
import { Application, Rectangle, Assets } from 'pixi.js';

@Component({
  selector: 'app-factory',
  imports: [AsyncPipe, LayoutComponent, GoodsComponent],
  templateUrl: './factory.component.html',
  styleUrl: './factory.component.css',
})
export class FactoryComponent implements AfterViewInit, OnInit {
  coinButton!: HTMLButtonElement;
  coinText!: HTMLDivElement;
  goods: IGoods[] = [];
  coins$: Observable<BigNumber>;
  ZERO = BigNumber(0);
  constructor(
    public mainService: MainService,
    private clickerService: ClickerService,
    private goodsService: GoodsService,
    private factoryManager: FactoryManagerService
  ) { 
    this.goods = this.goodsService.goods;
    this.coins$ = this.mainService.coinService.coins$;
  }

  ngOnInit(): void {
    this.factoryManager.initialize();
    this.factoryManager.factories.forEach((factory, index) => {
      console.log(`factory ${index}:`, factory.productionRate);
    });
   
    
  }

  async ngAfterViewInit() {
    await this.loadImg();
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

  async loadImg() {
    const app = new Application();
    await app.init({ background: '#1099bb', width: 64, height: 64 });
    console.log('app:', app);
    
    document.body.appendChild(app.canvas);

    // 加载图片
    const texture = await Assets.load('../../../assets/images/gold.png');

    // 定义子纹理区域(x,y,width,height)
    const frame = new PIXI.Rectangle(67*6, 4, 60, 60);
    const subTexture = new PIXI.Texture({
      source: texture.source,
      frame: frame,
    });
    // 创建精灵
    const sprite = new PIXI.Sprite(subTexture);
    sprite.position.set(0,0);
    app.stage.addChild(sprite);
  }
}
