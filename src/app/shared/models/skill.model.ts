// 资源类型
export type ResourceType = 'gold' | 'energy' | 'souls';

// 资源消耗
export interface ResourceCost {
  type: ResourceType;
  amount: number;
}

// 技能效果基础类型
export interface SkillEffectBase<T extends string, V> {
  type: T;
  value: V;
}

// 具体效果类型
export type ClickMultiplierEffect = SkillEffectBase<'clickMultiplier', number>;
export type OfflineProductionEffect = SkillEffectBase<'offlineProduction', number>;
export type CostReductionEffect = SkillEffectBase<'costReduction', { target: string; percentage: number }>;
export type CriticalChanceEffect = SkillEffectBase<'criticalChance', number>;

// 效果联合类型
export type SkillEffect = 
  | ClickMultiplierEffect
  | OfflineProductionEffect
  | CostReductionEffect
  | CriticalChanceEffect;

// 技能定义
export interface SkillConfig {
  id: string;
  name: string;
  description: string;
  maxLevel: number;
  unlockCondition?: () => boolean;
  upgradeCost: (level: number) => ResourceCost[];
  effects: SkillEffect[];
  icon?: string;
  category: 'active' | 'passive';
}