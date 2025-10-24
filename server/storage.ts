import { type Poem, poems } from "@shared/schema";

export interface IStorage {
  getAllPoems(): Promise<Poem[]>;
  getPoemById(id: string): Promise<Poem | undefined>;
}

export class MemStorage implements IStorage {
  private poems: Poem[];

  constructor() {
    this.poems = poems;
  }

  async getAllPoems(): Promise<Poem[]> {
    return this.poems;
  }

  async getPoemById(id: string): Promise<Poem | undefined> {
    return this.poems.find((poem) => poem.id === id);
  }
}

export const storage = new MemStorage();
