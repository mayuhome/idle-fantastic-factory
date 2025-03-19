import { Injectable } from '@angular/core';
import { SkillConfig } from '../models/skill.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private skills: SkillConfig[] = [];
  private unlockedSkills = new BehaviorSubject<Set<string>>(new Set());
  private skillLevels = new BehaviorSubject<Map<string, number>>(new Map());

  // constructor(
  //   private resourceService: ResourceService,
  //   private clickService: ClickService,
  //   private productionService: ProductionService
  // ) {}

  // // 初始化技能系统
  // initialize(skills: SkillConfig[]) {
  //   this.skills = skills;
  //   this.updateGlobalEffects();
  // }

  // // 升级技能
  // upgradeSkill(skillId: string): boolean {
  //   const skill = this.skills.find(s => s.id === skillId);
  //   if (!skill || !this.canUpgrade(skill)) return false;

  //   const currentLevel = this.getSkillLevel(skillId);
  //   const cost = skill.upgradeCost(currentLevel);
    
  //   if (this.resourceService.canAfford(cost)) {
  //     this.resourceService.deductResources(cost);
  //     this.setSkillLevel(skillId, currentLevel + 1);
  //     this.updateGlobalEffects();
  //     return true;
  //   }
  //   return false;
  // }

  // // 更新全局效果
  // private updateGlobalEffects() {
  //   this.clickService.resetMultipliers();
  //   this.productionService.resetModifiers();

  //   this.skills.forEach(skill => {
  //     const level = this.getSkillLevel(skill.id);
  //     if (level > 0) {
  //       this.applySkillEffects(skill, level);
  //     }
  //   });
  // }

  // // 应用技能效果
  // private applySkillEffects(skill: SkillConfig, level: number) {
  //   skill.effects.forEach(effect => {
  //     switch(effect.type) {
  //       case 'clickMultiplier':
  //         this.clickService.addMultiplier(effect.value * level);
  //         break;
  //       case 'offlineProduction':
  //         this.productionService.addMultiplier(effect.value * level);
  //         break;
  //       case 'costReduction':
  //         this.resourceService.registerCostReduction(
  //           effect.value.target,
  //           effect.value.percentage * level
  //         );
  //         break;
  //       case 'criticalChance':
  //         this.clickService.addCriticalChance(effect.value * level);
  //         break;
  //     }
  //   });
  // }
}
