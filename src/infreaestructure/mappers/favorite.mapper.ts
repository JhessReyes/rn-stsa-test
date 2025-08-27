import { FavoriteEntity } from '../../domain/entities/favorite.entity';
import { FavoriteResonpe } from '../interfaces/internalApi.interfaces';

export class FavoriteMapper {
  static favoriteApiToEntity(favoriteApi: FavoriteResonpe): FavoriteEntity {
    return {
      id: favoriteApi.id,
      superheroId: favoriteApi.superheroId,
      superhero: { ...favoriteApi.superhero, isFavorite: true },
    };
  }
}
