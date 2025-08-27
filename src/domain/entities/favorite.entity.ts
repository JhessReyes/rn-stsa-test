import { HeroEntity } from './hero.entity';

export interface FavoriteEntity {
  id: number;
  superheroId: number;
  superhero: HeroEntity;
}
