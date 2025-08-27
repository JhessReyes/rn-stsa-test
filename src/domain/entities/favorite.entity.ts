import { HeroEntity } from './hero.entity';

export interface FavoriteEntity {
  id: number;
  heroId: number;
  hero: HeroEntity;
}
