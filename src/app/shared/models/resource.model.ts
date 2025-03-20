import BigNumber from 'bignumber.js';
import { ZERO } from '../../utils/bigNumber';

export type ResourceType = 'coin' | 'gem' | 'mana'

export interface IResource {
    // type: ResourceType;
    name: string;
    icon: string; // asset path
    value: BigNumber;
    unlockCondition: (s?: any) => boolean;
}

export const RESOURCE_TYPES = new Map<ResourceType, IResource>([
    [ 'coin', {
        name: '金币',
        icon: '',
        value: ZERO,
        unlockCondition: () => true
    } ],
    [ 'gem', {
        name: '宝石',
        icon: '',
        value: ZERO,
        unlockCondition: (state: any) => (state.reincarnationCount as number) > 3
    } ]
]);