export type FactionType = "angel" | "demon" | "elf" | 'human';
type BuildingTier = "";

interface IMainState {
    /** 玩家全局进度 */
    player: {
      reincarnationCount: number;    // 转生次数（硬重置计数）
      playTime: number;              // 总在线时长（秒）
      lastUpdate: string;            // ISO8601时间戳（用于离线计算）
      activeFaction: FactionType;    // 当前激活阵营（"angel" | "demon" | "elf"）
    };
  
    /** 资源集合（科学计数法存储） */
    resources: { 
      gold: [number, number];       // [尾数, 指数] 例如1.23e45存储为[123, 43]
      gem: [number, number];         // 宝石（高级货币）
      faith: number;                 // 信仰值（整数存储）
      factionCoin: {                 // 阵营专属货币
        [faction in FactionType]?: number;
      };
    };
  
    /** 阵营发展数据 */
    factions: {
      [faction in FactionType]: {
        level: number;               // 阵营等级（影响加成强度）
        unlockedPerks: string[];     // 已解锁的永久特权ID
        relics: string[];            // 收集的圣物ID
        currentBlessing?: string;     // 当前生效的祝福技能
      };
    };
  
    /** 建筑系统 */
    buildings: {
      [tier in BuildingTier]: {     // T1-T3基础建筑
        [buildingId: string]: {
          count: number;             // 建筑数量（整数）
          upgrades: {
            [upgradeId: string]: boolean; // 是否已升级
          };
        };
      };
    //   wonders: string[];             // 已建造的奇观ID
    };
  
    /** 科技研究进度 */
    researches: {
      [treeId: string]: {           // 研究树分类（如"basic", "magic"）
        unlockedNodes: string[];    // 已解锁的科技ID
        activeEffects: string[];    // 当前激活的全局效果
      };
    };
  
    /** 成就系统 */
    achievements: {
      [achievementId: string]: {
        unlocked: boolean;          // 是否已解锁
        progress: number;           // 进度百分比（0-100）
        tier?: number;              // 成就阶级（多级成就）
      };
    };
  
    /** 法术系统 */
    spells: {
      [spellId: string]: {
        level: number;              // 法术等级
        lastCastTime: string;       // 最后施放时间戳
        cooldown: number;           // 剩余冷却时间（秒）
      };
    };
  
    /** 用户设置 */
    settings: {
      notationType: 'scientific' | 'engineering'; // 数值显示格式
      autoSaveInterval: number;     // 自动保存间隔（秒）
      lastBackupHash: string;       // 存档校验哈希
    };
  
    /** 系统元数据 */
    meta: {
      version: string;              // 存档版本（用于兼容迁移）
      createdTime: string;          // 首次创建时间
      modifiedTime: string;         // 最后修改时间
    };
  
    /** 临时状态（不存档） */
    _temp?: {
      comboCounter: number;         // 点击连击计数器
      offlineSeconds: number;       // 离线时间缓存
      pendingRewards: {             // 待领取奖励
        [rewardType: string]: number;
      };
    };
  }