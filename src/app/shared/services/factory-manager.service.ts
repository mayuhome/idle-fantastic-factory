import { Injectable } from '@angular/core';
import { FactorySchema } from '../models/factory.model';
import { FactoryInstance } from '../classes/factory-instance.class';
import { HttpClient } from '@angular/common/http';
import { Factory_Farm } from '../../data/factory';

@Injectable({
  providedIn: 'root'
})
export class FactoryManagerService {

  private schema = new Map<string, FactorySchema>();
  private factories = new Map<string, FactoryInstance>();  

  constructor(
    private http: HttpClient
  ) { }

  async initialize() {
    await this.loadSchemas();
    // this.loadInstances();
  }

  private async loadSchemas() {
    // const schemas = await this.http.get<FactorySchema[]>('assets/data/factories.json').toPromise()||[];
    const schemas = [...Factory_Farm];
    schemas.forEach(schema => this.schema.set(schema.id, schema));
  }

  // private loadInstances() {
  //   const instances = localStorage.getItem('factories');
  //   if(instances) {
  //     this.factories = new Map(JSON.parse(instances));
  //   }
  // }
}
