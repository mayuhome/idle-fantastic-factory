import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResourceService } from './resource.service';
import { FactoryManagerService } from './factory-manager.service';
// import * as LZMA from 'lzma';
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaveService {

  // // 配置参数
  // private readonly SAVE_KEY = 'save';
  // private readonly AUTO_SAVE_INTERVAL = 1000 * 60 * 3; // 3 分钟

  // // 状态管理
  // private currentVersion = '0.0.1';
  // private isSaving: boolean = false;

  // // 加密配置
  // private cryptoKey?: CryptoKey;

  // constructor(
  //   private http: HttpClient,
  //   private factoryManager: FactoryManagerService,
  //   private resourceService: ResourceService,
  //   // private researchService: ResearchService
  // ) { 
  //   this.initCryptoKey();
  //   this.setupAutoSave();
  // }

  // async loadGame(): Promise<boolean> {
  //   const rawData = localStorage.getItem(this.SAVE_KEY);
  //   if (!rawData) return false;
  
  //   try {
  //     // 解密 -> 解压 -> 反序列化
  //     const decrypted = await this.decryptData(rawData);
  //     const decompressed = this.decompress(decrypted);
  //     const parsed = this.parseSaveData(decompressed);
  
  //     // 版本迁移
  //     // const migrated = this.migrateSaveData(parsed);
  
  //     // 分发数据到各子系统
  //     // this.resourceService.load(migrated.resources);
  //     // this.factoryManager.load(migrated.buildings);
  //     // this.researchService.load(migrated.researches);
  
  //     return true;
  //   } catch (error) {
  //     console.error('存档加载失败', error);
  //     // this.restoreFromBackup();
  //     return false;
  //   }
  // }

  // async saveCurrentState(): Promise<void> {
  //   if (this.isSaving) return;
  //   this.isSaving = true;
  
  //   try {
  //     // 收集子系统数据
  //     const saveData: SaveData = {
  //       version: this.currentSaveVersion,
  //       resources: this.resourceService.export(),
  //       buildings: this.buildingManager.export(),
  //       researches: this.researchService.export(),
  //       timestamp: Date.now()
  //     };
  
  //     // 序列化 -> 压缩 -> 加密
  //     const serialized = JSON.stringify(saveData);
  //     const compressed = this.compress(serialized);
  //     const encrypted = await this.encryptData(compressed);
  
  //     // 备份管理
  //     this.rotateBackups();
  
  //     // 写入存储
  //     localStorage.setItem(this.SAVE_KEY, encrypted);
  //   } finally {
  //     this.isSaving = false;
  //   }
  // }
  
  
  // private parseSaveData(data: string): SaveData {
  //   return SaveSchema.parse(JSON.parse(data));
  // }

  // private setupAutoSave(): void {
  //   // 定时保存
  //   interval(this.AUTO_SAVE_INTERVAL).pipe(
  //     filter(() => !this.isSaving)
  //   ).subscribe(() => this.saveCurrentState());
  
  //   // 页面关闭前强制保存
  //   window.addEventListener('beforeunload', () => {
  //     this.saveCurrentStateSync(); // 同步保存
  //   });
  // }
  
  // private saveCurrentStateSync(): void {
  //   // 使用同步XHR强制保存（慎用，仅限关键操作）
  //   const xhr = new XMLHttpRequest();
  //   xhr.open('POST', '/api/save', false);
  //   xhr.send(this.getCurrentSave());
  // }

  // // 数据压缩(LZMA + Base64)
  // private compress(data: string): string {
  //   const compressed = LZMA.compress(data, 9);
  //   return btoa(String.fromCharCode(...compressed));
  // }
  
  // private decompress(data: string): string {
  //   const byteArray = new Uint8Array(atob(data).split('').map(c => c.charCodeAt(0)));
  //   return LZMA.decompress(byteArray);
  // }
  

  // // 加密解密
  // private async initCryptoKey(): Promise<void> {
  //   const keyStr = environment.encryptionKey; // 从环境变量获取
  //   const keyBuffer = new TextEncoder().encode(keyStr);
  
  //   this.cryptoKey = await crypto.subtle.importKey(
  //     'raw', keyBuffer, 'AES-GCM', false, ['encrypt', 'decrypt']
  //   );
  // }
  
  // private async encryptData(data: string): Promise<string> {
  //   const iv = crypto.getRandomValues(new Uint8Array(12));
  //   const encrypted = await crypto.subtle.encrypt(
  //     { name: 'AES-GCM', iv },
  //     this.cryptoKey!,
  //     new TextEncoder().encode(data)
  //   );
  //   return btoa(String.fromCharCode(...iv, ...new Uint8Array(encrypted)));
  // }
  
  // private async decryptData(data: string): Promise<string> {
  //   const buffer = Uint8Array.from(atob(data), c => c.charCodeAt(0));
  //   const iv = buffer.slice(0, 12);
  //   const encrypted = buffer.slice(12);
  
  //   const decrypted = await crypto.subtle.decrypt(
  //     { name: 'AES-GCM', iv },
  //     this.cryptoKey!,
  //     encrypted
  //   );
  //   return new TextDecoder().decode(decrypted);
  // }
  
  
  
}
