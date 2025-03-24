import BigNumber from 'bignumber.js';
import { IFactory } from '../shared/models/factory.model';

export const Factory_Farm: IFactory[] = [{
    id: 'farm',
    name: '农场',
    description: '种植各种农作物，生产粮食和金币。',
    faction: 'human',
    baseTier: 1,
    categories: ['food', 'gold'],
    tiers: new Map([
        [1, {
            unlockConditions: {
                reincarnation: 0,
                totalGold: new BigNumber(0)
            },
            upgradeCost: {
                formula: 'exponential',
                params: {
                    base: 10,
                    factor: 1.13
                }
            },
            effects: [
                { type: 'production', value: new BigNumber(2) }
            ]
        }],
        [2, {
            unlockConditions: {
                totalGold: new BigNumber(1000)
            },
            upgradeCost: {
                formula: 'exponential',
                params: {
                    base: 1000,
                    factor: 1.15
                }
            },
            effects: [
                { type: 'production', value: new BigNumber(10) }
            ]
        }],
        [3, {
            unlockConditions: {
                totalGold: new BigNumber(10000)
            },
            upgradeCost: {
                formula: 'exponential',
                params: {
                    base: 10000,
                    factor: 1,
                    exponent: 2
                }
            },
            effects: [
                { type: 'production', value: new BigNumber(100) }
            ]
        }]
    ])
}];