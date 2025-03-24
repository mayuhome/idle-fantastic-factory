import BigNumber from 'bignumber.js';
import { FactorySchema } from '../models/factory.model';
import { Formula } from '../../utils/formula';

export class FactoryInstance {
    constructor(
        public schema: FactorySchema,
        public currentTier: number = 1,
        public count = 0,
    ) {}

    get productionRate() {
        return this.calculateProduction();
    }

    get current(){
        return this.schema.tiers.get(this.currentTier)!;
    }

    private calculateProduction(){
        const total = this.schema.tiers.get(this.currentTier)!.effects.filter(e => e.type === 'production').reduce((acc, e) => acc.plus(e.value), new BigNumber(0));
        console.log('total:', total.toString());
        
        return total;
    }

    addCount(coin: BigNumber, cnt: number = 1) {
        if(coin.isGreaterThanOrEqualTo(this.costAfford(cnt))){
            this.count += cnt;
            // this.current.upgradeCost.params.base = this.costAfford(cnt);
            coin = coin.minus(this.costAfford(cnt));
            console.log(`add ${cnt} ${this.schema.name}`);
            return true;
        }
    }

    private costAfford(cnt: number) {
        const cost = Formula.exponential(cnt, this.current!.upgradeCost.params);
        console.log(`${cnt} costAfford: ${cost.toString()}`);
        return new BigNumber(cost);
    }
}