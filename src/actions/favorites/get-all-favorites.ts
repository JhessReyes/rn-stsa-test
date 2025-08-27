import { internalApi } from '../../config/api/internalApi';
import { InternalApiFavoritesResponse } from '../../infreaestructure/interfaces/internalApi.interfaces';
import { FavoriteMapper } from '../../infreaestructure/mappers/favorite.mapper';

export const getFavorites = async (): Promise<any> => {
  try {
    const url = `/favorites`;
    const { data } = await internalApi.get<InternalApiFavoritesResponse>(url);

    const favorites = data.favorites.map(favorite =>
      FavoriteMapper.favoriteApiToEntity(favorite),
    );

    return favorites;
  } catch (error) {
    throw new Error('Error getting favorites');
  }
};
