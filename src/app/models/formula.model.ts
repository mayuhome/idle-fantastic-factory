// 公式类型定义
export type FormulaType = 
  | "linear"        // 线性增长
  | "exponential"   // 指数增长 
  | "polynomial"    // 多项式
  | "logistic"      // S型曲线
  | "hybrid";       // 混合模式

// 公式参数接口
export interface FormulaParams {
  base: number;      // 基础值
  exponent?: number; // 指数项系数
  factor?: number;   // 调节因子
  offset?: number;   // 偏移量
  cap?: number;      // 最大值
}