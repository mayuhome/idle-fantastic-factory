import BigNumber from 'bignumber.js';
import { Observable, of } from 'rxjs';
import { IGoods } from '../models/goods.model';

export class Goods implements IGoods {
    level: number;
    value: BigNumber;
    cost: BigNumber;
    upgradeRate: BigNumber;
    count: BigNumber;
    coldDown: BigNumber;
    perEarn$: Observable<BigNumber>;
    name: string;

    constructor(
        name: string,
        level: number = 1,
        value: BigNumber = new BigNumber(0),
        cost: BigNumber = new BigNumber(10),
        upgradeRate: BigNumber = new BigNumber(1.1),
        count: BigNumber = new BigNumber(0),
        coldDown: BigNumber = new BigNumber(1)
    ) {
        this.name = name;
        this.level = level;
        this.value = value;
        this.cost = cost;
        this.upgradeRate = upgradeRate;
        this.count = count;
        this.coldDown = coldDown;
        this.perEarn$ = of(this.value.times(this.count));
    }

    addAccount(cnt: BigNumber | number): void {
        const addCount = BigNumber.isBigNumber(cnt) ? cnt : new BigNumber(cnt);
        this.count = this.count.plus(addCount);
    }

    costByAccount(cnt: BigNumber | number): BigNumber {
        const n = BigNumber.isBigNumber(cnt) ? cnt : new BigNumber(cnt);
        // Geometric progression sum: cost * (upgradeRate^n - 1) / (upgradeRate - 1)
        if (this.upgradeRate.eq(1)) {
            return this.cost.times(n);
        }
        const totalCost = this.cost
            .times(this.upgradeRate.pow(n).minus(1))
            .div(this.upgradeRate.minus(1));
        return totalCost;
    }
}
