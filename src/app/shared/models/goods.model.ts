import BigNumber from 'bignumber.js';
import { BehaviorSubject, Observable } from 'rxjs';

export interface IGoods {
    level: number;
    name: string;
    value: BigNumber;
    cost: BigNumber;
    upgradeRate: BigNumber;
    account: BigNumber;
    perEarn$: Observable<BigNumber>;
    addAccount(cnt: BigNumber): void;
    costByAccount(cnt: BigNumber): BigNumber;
}

export class Goods implements IGoods {
    private perEarnSubject = new BehaviorSubject<BigNumber>(BigNumber(0));
    perEarn$ = this.perEarnSubject.asObservable();
    level: number;
    name: string;
    value: BigNumber;
    cost: BigNumber;
    upgradeRate: BigNumber;
    account: BigNumber;
    constructor() { 
        this.level = 0;
        this.name = '';
        this.value = BigNumber(0);
        this.cost = BigNumber(0);
        this.upgradeRate = BigNumber(0);
        this.account = BigNumber(0);
    }

    addAccount(cnt: BigNumber) {
        this.account = this.account.plus(cnt);
        this.cost.multipliedBy(this.upgradeRate.pow(cnt.plus(1)));
        this.perEarnSubject.next(this.account.multipliedBy(this.value));
    }
    costByAccount(cnt: BigNumber) {
        return this.cost.multipliedBy(this.upgradeRate.pow(cnt));
    }
}

export class GoodsOne extends Goods {
    constructor() {
        super();
        this.level = 1;
        this.name = 'level one';
        this.cost = BigNumber(10);
        this.upgradeRate = BigNumber(1.15);
        this.value = BigNumber(2);
    }
}

export class GoodsTwo extends Goods {
    constructor() {
        super();
        this.level = 2;
        this.name = 'level two';
        this.cost = BigNumber(1125);
        this.upgradeRate = BigNumber(1.15);
        this.value = BigNumber(6);
    }
}

export class GoodsThree extends Goods {
    constructor() {
        super();
        this.level = 3;
        this.name = 'level three';
        this.cost = BigNumber(600);
        this.upgradeRate = BigNumber(1.15);
        this.value = BigNumber(20);
    }
}

export class GoodsFour extends Goods {
    constructor() {
        super();
        this.level = 4;
        this.name = 'level four';
        this.cost = BigNumber(1800);
        this.upgradeRate = BigNumber(1.15);
        this.value = BigNumber(65);
    }
}