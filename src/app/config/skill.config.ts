import { SkillConfig } from '../shared/models/skill.model';

export const BASE_SKILLS: SkillConfig[] = [
    {
      id: 'click_power',
      name: '强化点击',
      description: '每次点击获得额外50%收益',
      maxLevel: 10,
      upgradeCost: (level) => [
        { type: 'gold', amount: 100 * Math.pow(1.5, level) }
      ],
      effects: [
        { type: 'clickMultiplier', value: 0.5 }
      ],
      category: 'passive'
    },
    {
      id: 'offline_boost',
      name: '离线增效',
      description: '离线收益提升20%',
      maxLevel: 5,
      upgradeCost: (level) => [
        { type: 'energy', amount: 200 * level }
      ],
      effects: [
        { type: 'offlineProduction', value: 0.2 }
      ],
      category: 'passive'
    },
    {
      id: 'cost_reduction',
      name: '成本优化',
      description: '所有升级成本降低5%',
      maxLevel: 8,
      upgradeCost: (level) => [
        { type: 'souls', amount: 50 * Math.pow(2, level) }
      ],
      effects: [
        { type: 'costReduction', value: { 
          target: 'all', 
          percentage: 0.05 
        }}
      ],
      category: 'passive'
    }
  ];