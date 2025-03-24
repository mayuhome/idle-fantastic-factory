import BigNumber from 'bignumber.js';
import { FactorySchema } from '../models/factory.model';

export class FactoryInstance {
    constructor(
        public schema: FactorySchema,
        public currentTier: number = 1,
        public count = 0,
    ) {}

    get productionRate() {
        return this.calculateProduction();
    }

    private calculateProduction(){
        const total = this.schema.tiers.get(this.currentTier)!.effects.filter(e => e.type === 'production').reduce((acc, e) => acc.plus(e.value), new BigNumber(0));
        console.log('total:', total.toString());
        
        return total;
    }
}