import BigNumber from 'bignumber.js';
import { ResourceCost } from './skill.model';
import { FormulaParams, FormulaType } from '../../models/formula.model';
import { FactionType } from './main-state.model';

export interface IFactory {
    id: string; // 工厂ID
    name: string;
    description: string;
    faction: FactionType | null; // null 表示通用
    baseTier: number; // 基础等级
    categories: string[]; // 分类标签
    tiers: Map<number, FactoryTier>; // 工厂等级配置
}

export class FactorySchema {
    constructor(
        public id: string,
        public name: string,
        public description: string,
        public tiers: Map<number, FactoryTier>,
        public faction: FactionType | null,
        public baseTier: number,
        public globalModifiers?: GlobalModifier[]
        ){}
}

export interface FactoryTier {
    unlockConditions: UnlockConditions;
    upgradeCost: UpgradeCost;
    effects: BuildingEffect[];
}

export interface UnlockConditions {
reincarnation?: number;
totalGold?: BigNumber;
}

export interface UpgradeCost {
    formula: FormulaType; // 消耗公式类型
    params: FormulaParams; // 升级消耗公式
}

export interface BuildingEffect {
    type: string;
    value: BigNumber;
    target?: string;
}

// 全局加成配置
export interface GlobalModifier {
    perXBuildings?: {             // 每X个建筑触发加成
        threshold: number;
        effect: BuildingEffect;
      }[];
      synergyBonuses?: {            // 协同建筑加成
        withBuildingId: string;     // 协同建筑ID
        requiredCount: number;      // 需要数量
        effect: BuildingEffect;
      }[];
}