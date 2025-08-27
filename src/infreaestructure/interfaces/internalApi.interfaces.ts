import { HeroEntity } from '../../domain/entities/hero.entity';

export interface InternalApiFavoritesResponse {
  message: string;
  favorites: FavoriteResonpe[];
}

export interface FavoriteResonpe {
  id: number;
  superheroId: number;
  superhero: HeroEntity;
  createdAt: string;
  updatedAt: string;
}
