import { FactoryTier, IFactory } from '../models/factory.model';
import { FactionType } from '../models/main-state.model';

export class FactoryCore implements IFactory {
    id: string;
    name: string;
    description: string | undefined;
    faction: FactionType | null;
    baseTier: number;
    categories: string[];
    tiers: Map<number, FactoryTier>;
    constructor(factory: IFactory) {
        this.id = '';
        // if (!factory) return;
        this.initialize(factory);
    }

    initialize(factory: IFactory) {
        this.id = factory.id;
        this.name = factory.name;
        this.description = factory.description;
        this.faction = factory.faction;
        this.baseTier = factory.baseTier;
        this.categories = factory.categories;
        this.tiers = factory.tiers;
    }

}