import { FormulaParams } from '../models/formula.model';

export class Formula {
    // 线性增长：cost = base + (level-1)*factor
    static linear(level: number, params: FormulaParams): number {
      return params.base + (level - 1) * (params.factor || 1);
    }
  
    // 指数增长：cost = base * factor^(level-1) 
    static exponential(level: number, params: FormulaParams): number {
      return params.base * Math.pow(params.factor || 1.15, level - 1);
    }
  
    // 多项式增长：cost = base + factor*level^exponent
    static polynomial(level: number, params: FormulaParams): number {
      return params.base + (params.factor || 1) * Math.pow(level, params.exponent || 2);
    }
  
    // 逻辑斯蒂曲线：cost = cap / (1 + e^(-k*(level - midpoint)))
    static logistic(level: number, params: FormulaParams): number {
      const k = params.factor || 0.1;
      const midpoint = params.offset || 50;
      return (params.cap || 1e6) / (1 + Math.exp(-k * (level - midpoint)));
    }
  
    // 混合模式（示例：前50级指数，之后多项式）
    static hybrid(level: number, params: FormulaParams): number {
      return level <= 50 ? 
        this.exponential(level, params) :
        this.polynomial(level, { ...params, base: 0 });
    }
  }